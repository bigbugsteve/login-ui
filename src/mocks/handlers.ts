import { rest } from 'msw';
function generateRandomSixDigitNumber() {
	// Generálunk egy random számot 100000 és 999999 között
	const randomNumber = Math.floor(Math.random() * 900000) + 100000;
	return randomNumber;
}
const token =
	'eyJ0b2tlbklEIjoiODE0MDQ3ZWUtZjFhNS0zYThkLWE3YmQtODhjODUzYWJmYmU0IiwidHlwIjoiSldUIiwiYWxnIjoiUlM1MTIifQ.eyJzdWIiOiJCVkJBICAgVkxPRVJFTiBMQU1CUkVDSFRTIiwiYXVkIjoiQ0hTMiIsIkNVU1RPTUVSX05BTUUiOiJCVkJBICAgVkxPRVJFTiBMQU1CUkVDSFRTIiwiU0NPUEUiOiJPUkFOR0UiLCJpc3MiOiJDSFMyIiwiZXhwIjoxNjkwMjA3ODA0LCJpYXQiOjE2OTAyMDcyMDQsImp0aSI6IjA4YTU5NDFiLTU5OTItM2NmNi05MDRhLTI0NjgzMTVhYjRjMyJ9.DLEm5y8ROpsxfUj5xBEtyUc8FcpIQq_tqM-qwuAsiQ9z_zc7fc9dlKq_gSxzBMTwxjyACV2ZD0XdfRutM4cSPmzmDptqSzKCmRISt5jyZp1eBR7UXSeWCmWijVwV1LerjJkHEhQKFJpfCLfm1bilr3NJRAo-a3uyG2-1moWdVmpRNZg7ZgqrYpFqTpPmWbnRUkgrCJ1OSRpUxaWBPm_uG16Tp4_vZ34V4uf3XlG6qjC7BhcIsrGXf-MyUpMar_C5b3EkrWcTwjvIkhfdOxfBlukG-nj3EZKL-DKGMbuMFdyUEvmTRkg1i8OccsP0NpVRSFIqrsAfC6_hYitg79t14w';
let verificationCode;

export const handlers = [
	rest.post('2factor/login', (req, res, ctx) => {
		const requestBody = JSON.parse(req.body as string);
		if (requestBody.emailAddress === 'johndoe@example.com' && requestBody.password === '123456') {
			verificationCode = generateRandomSixDigitNumber();
			return res(ctx.status(200), ctx.set('Content-Type', 'application/json'), ctx.json(verificationCode));
		} else {
			return res(ctx.status(401), ctx.json({ status: 401, error: 'Unauthorized: Invalid email address' }));
		}
	}),
	rest.post('2factor/verify', (req, res, ctx) => {
		const requestBody = JSON.parse(req.body as string);

		if (verificationCode == requestBody.verificationCode) {
			return res(ctx.status(200), ctx.set('Authorization', token));
		} else {
			return res(ctx.status(401), ctx.json({ error: 'Unauthorized: Invalid verification code' }));
		}
	}),
];
