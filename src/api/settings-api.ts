import axios from 'axios';
import {ResultCodeForCapctha, ResultCodesEnum} from '../redux/enum';

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '594e8ece-c3d0-41d5-adc9-eca0a193295b'
    }
});

export type ResponseType<T = {}> = {
    resultCode: ResultCodesEnum | ResultCodeForCapctha
    messages: string[]
    fieldsErrors: Array<string>
    data: T
}
