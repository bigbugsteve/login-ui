import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Countdown from 'react-countdown';
import { Box, Button, Grid, TextField } from '@mui/material';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RootState from '../../../interfaces/RootState';
import { PERFORM_LOGIN, VERIFICATION_IN_PROGRESS, VERIFY_CODE } from '../../../redux/auth/actions';
// import { SIGNED_IN, VERIFICATION_IN_PROGRESS } from '@src/redux/auth/actions';

type Inputs = {
	emailAddress: string;
	phoneNumber: string;
	password: string;
	verificationCode: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const LoginForm = () => {
	const [counterElement, setCounterElement] = useState<Array<JSX.Element>>();
	const verifyLogin = useSelector((state: RootState) => state?.auth?.verifyLogin);

	const signedIn = useSelector((state: RootState) => state?.auth?.signedIn);

	// const navigate = useNavigate();
	const dispatchAction = useDispatch();
	const { t } = useTranslation('common');

	// React-Hook-Form
	const { handleSubmit, reset, control, setValue } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Partial<Inputs>> = (data) => {
		if (verifyLogin === true) {
			performVerification(data as Inputs);
		} else {
			performLogin(data as Omit<Inputs, 'verificationCode'>);
		}
	};
	const performVerification = (data: Inputs) => {
		dispatchAction({ type: VERIFY_CODE, val: data });
		console.log('file: LoginForm.tsx:39 ~ performVerification ~ data:', data);
	};
	const performLogin = (data: Omit<Inputs, 'verificationCode'>) => {
		dispatchAction({ type: PERFORM_LOGIN, val: data });
	};

	const securityExpired = useCallback(() => {
		dispatchAction({ type: VERIFICATION_IN_PROGRESS, val: false });
		reset();
	}, []);

	useEffect(() => {
		if (signedIn === true) {
			// navigate('/contact');
		}
	}, [signedIn]);

	useEffect(() => {
		if (verifyLogin === true) {
			setCounterElement([
				<div key={'exp'}>
					<span className="login__code-expiry">{t('login.code_expires')}:</span>
					<Countdown
						date={Date.now() + 1000 * 30 * 10}
						onComplete={securityExpired}
						renderer={(props) => <div className="security__expire">{props.total / 1000}</div>}
					/>
				</div>,
			]);
		}
	}, [verifyLogin]);
	// 444141962
	// gabor.nagy@ewmgroup.com

	useEffect(() => {
		setValue('emailAddress', 'johndoe@example.com');
		setValue('password', '123456');
	}, []);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Box sx={{ display: 'flex' }}>
				<Grid container>
					{/* <Grid item sx={{ width: '100%', margin: '0.5rem 0' }}>
                    <SelectLanguage />
                </Grid> */}

					<Grid item sx={{ width: '100%', margin: '0.5rem 0' }}>
						<Controller
							name="emailAddress"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<TextField
									fullWidth
									error={!!error}
									helperText={error ? t('validations.required') : null}
									onChange={onChange}
									value={value || ''}
									label={t('login.email_address')}
									disabled={verifyLogin}
								/>
							)}
						/>
					</Grid>
					<Grid item sx={{ width: '100%', margin: '0.5rem 0' }}>
						<Controller
							name="password"
							control={control}
							rules={{
								required: true,
							}}
							render={({ field: { onChange, value }, fieldState: { error } }) => (
								<TextField
									fullWidth
									type="password"
									error={!!error}
									helperText={error ? t('validations.required') : null}
									onChange={onChange}
									value={value || ''}
									label={t('login.password')}
									disabled={verifyLogin}
								/>
							)}
						/>
					</Grid>
					{verifyLogin && (
						<Grid item sx={{ width: '100%', margin: '0.5rem 0' }}>
							<Controller
								name="verificationCode"
								control={control}
								rules={{
									required: true,
								}}
								render={({ field: { onChange, value }, fieldState: { error } }) => (
									<TextField
										error={!!error}
										helperText={error ? t('validations.required') : null}
										onChange={onChange}
										value={value || ''}
										label={t('login.verification_code')}
										// disabled={props.isFirstStepComplete}
									/>
								)}
							/>
						</Grid>
					)}
					<Grid container>
						{verifyLogin && (
							<Grid item xs={12}>
								{counterElement}
							</Grid>
						)}
					</Grid>
					<Grid item sx={{ width: '100%', margin: '0.5rem 0' }}>
						<Button
							// onClick={handleSubmit(onSubmit)}
							className="btn__primary"
							fullWidth
							type="submit"
						>
							{t('login.login')}
						</Button>
					</Grid>
				</Grid>
			</Box>
		</form>
	);
};

export default LoginForm;
