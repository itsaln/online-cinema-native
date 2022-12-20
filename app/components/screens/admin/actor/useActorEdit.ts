import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { ActorService } from '@/services/actor.service'

import { IActorEditInput } from '@/shared/types/actor.interface'

export const useActorEdit = (setValue: UseFormSetValue<IActorEditInput>) => {
	const { params } = useTypedRoute<'ActorEdit'>()
	const actorId = params.id

	const { isLoading } = useQuery(
		['get actor', actorId],
		() => ActorService.getOne(actorId),
		{
			onSuccess(data) {
				Object.entries<any>(data).find(([key, value]) => {
					setValue(key as keyof IActorEditInput, value)
				})
			},
			enabled: !!actorId
		}
	)

	const { invalidateQueries } = useQueryClient()

	const { mutateAsync } = useMutation(
		['update actor', actorId],
		(data: IActorEditInput) => ActorService.update(actorId, data),
		{
			async onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update actor',
					text2: 'update was successful'
				})

				await invalidateQueries(['search actors'])
			}
		}
	)

	const onSubmit: SubmitHandler<IActorEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
