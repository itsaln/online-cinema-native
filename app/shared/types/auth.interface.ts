import { IUser } from '@/shared/types/user.interface'

export interface IAuthFormData extends Pick<IUser, 'email' | 'password'> {}
