import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import Layout from '@/components/ui/layout/Layout'

import { IGenreEditInput } from '@/shared/types/genre.interface'

import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IGenreEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useGenreEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit genre' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<>
						<Button onPress={handleSubmit(onSubmit)} icon={'pen-tool'}>
							Update
						</Button>
					</>
				)}
			</View>
		</Layout>
	)
}

export default GenreEdit
