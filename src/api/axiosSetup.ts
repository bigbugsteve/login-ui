import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { axiosRequestConfiguration } from './config';

const initialization = (configs: AxiosRequestConfig): AxiosInstance => {
	const axiosInstance = axios.create(configs);

	return axiosInstance;
};

const axiosInstance = initialization(axiosRequestConfiguration);

export default axiosInstance;
