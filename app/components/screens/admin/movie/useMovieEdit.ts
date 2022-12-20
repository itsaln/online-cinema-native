import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import Toast from 'react-native-toast-message'

import { useTypedRoute } from '@/hooks/useTypedRoute'

import { MovieService } from '@/services/movie.service'

import { IMovieEditInput } from '@/shared/types/movie.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEditInput>) => {
	const { params } = useTypedRoute<'MovieEdit'>()
	const movieId = params.id

	const { isLoading } = useQuery(
		['get movie', movieId],
		() => MovieService.getOne(movieId),
		{
			onSuccess(data) {
				Object.entries<any>(data).find(([key, value]) => {
					setValue(key as keyof IMovieEditInput, value)
				})
			},
			enabled: !!movieId
		}
	)

	const { invalidateQueries } = useQueryClient()

	const { mutateAsync } = useMutation(
		['update movie', movieId],
		(data: IMovieEditInput) => MovieService.update(movieId, data),
		{
			async onSuccess() {
				Toast.show({
					type: 'success',
					text1: 'Update movie',
					text2: 'update was successful'
				})

				await invalidateQueries(['search movies'])
			}
		}
	)

	const onSubmit: SubmitHandler<IMovieEditInput> = async (data) => {
		await mutateAsync(data)
	}

	return { onSubmit, isLoading }
}
