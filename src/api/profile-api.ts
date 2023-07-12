import {PhotosType, ProfileType} from '../redux/profile/profile-reducer';
import {instance, ResponseType} from './settings-api';

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`profile/status`, {status})
    },
    savePhoto: function (photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<ResponseType<{ photos: PhotosType }>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType){
        return instance.put<ResponseType>(`profile`, profile)
    }
}