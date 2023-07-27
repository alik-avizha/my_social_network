import axios from 'axios';
import {ResultCodeForCaptcha, ResultCodesEnum} from '../enums';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '594e8ece-c3d0-41d5-adc9-eca0a193295b'
    }
});

export type ResponseType<T = {}> = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: string[]
    fieldsErrors: Array<string>
    data: T
}
