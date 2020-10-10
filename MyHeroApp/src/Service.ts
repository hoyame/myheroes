import axios, { AxiosInstance } from 'axios';

axios.defaults.baseURL = 'https://localhost:5001/';
axios.defaults.timeout = 1000 * 60 * 5;

export default abstract class Service {
	private static notInitialized: boolean = true;
	public static instance: AxiosInstance;

	public static initialize() {
		if (!this.notInitialized) return;

		this.instance = axios.create();
		this.instance.defaults.timeout = 5000;
		this.instance.defaults.baseURL = `https://localhost:5001/`;

		delete this.notInitialized;
    }

	public static post(eventName: string, payload: any = {}): Promise<Response> {
		return new Promise((resolve, reject) => {
			this.instance
				.post(`/${eventName}`, payload)
				.then((res: any) => resolve(res))
				.catch((err: any) => reject(err));
		});
	}

	public static get(eventName: string, payload: any = {}): Promise<Response> {
		return new Promise((resolve, reject) => {
			this.instance
				.post(`/${eventName}`, payload)
				.then((res: any) => resolve(res))
				.catch((err: any) => reject(err));
		});
	}
}
