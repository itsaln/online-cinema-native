import { AsyncStorage } from 'react-native'

import { getAuthUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'
import { deleteTokensStorage, saveToStorage } from '@/services/auth/auth.helper'

import { EnumAsyncStorage, IAuthResponse } from '@/shared/types/auth.interface'

export const AuthService = {
	async main(variant: 'reg' | 'login', email: string, password: string) {
		const response = await request<IAuthResponse>({
			url: getAuthUrl(`/${variant === 'reg' ? 'register' : 'login'}`),
			method: 'POST',
			data: { email, password }
		})

		if (response.accessToken) await saveToStorage(response)

		return response
	},

	async logout() {
		await deleteTokensStorage()
		await AsyncStorage.removeItem(EnumAsyncStorage.USER)
	}
}
