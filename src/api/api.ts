import axiosInstance from './axiosSetup';

export default class Service {
	/**
	 * AUTHORIZATION
	 */
	static performLogin = (body) =>
		axiosInstance
			.post('2factor/login', body)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				throw err;
			});
	static verifyCode = (body) =>
		axiosInstance
			.post('2factor/verify', body)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				throw err;
			});
}
