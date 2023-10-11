import axios from 'axios';
import {ResultCodeForCaptcha, ResultCodesEnum} from '../enums';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export type ResponseType<T = {}> = {
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: string[]
    fieldsErrors: Array<string>
    data: T
}
