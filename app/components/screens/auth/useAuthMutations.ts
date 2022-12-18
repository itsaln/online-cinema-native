import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { UseFormReset } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'

import { AuthService } from '@/services/auth/auth.service'

import { IAuthFormData } from '@/shared/types/auth.interface'

export const useAuthMutations = (reset: UseFormReset<IAuthFormData>) => {
	const { setUser } = useAuth()

	const { mutate: loginSync, isLoading: isLoginLoading } = useMutation(
		['login'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('login', email, password),
		{
			onSuccess(data) {
				// setTimeout(() => { // TODO: need to check without setTimeout
					reset()
					setUser(data.user)
				// }, 0)
			}
		}
	)

	const { mutate: registerSync, isLoading: isRegisterLoading } = useMutation(
		['register'],
		({ email, password }: IAuthFormData) =>
			AuthService.main('reg', email, password),
		{
			onSuccess(data) {
				// setTimeout(() => { // TODO: need to check without setTimeout
					reset()
					setUser(data.user)
				// }, 0)
			}
		}
	)

	return useMemo(
		() => ({
			loginSync,
			registerSync,
			isLoading: isLoginLoading || isRegisterLoading
		}),
		[isLoginLoading, isRegisterLoading]
	)
}
