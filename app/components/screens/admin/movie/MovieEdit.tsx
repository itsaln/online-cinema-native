import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import Dropdown from '@/components/ui/form-elements/dropdown/Dropdown'
import Field from '@/components/ui/form-elements/field/Field'
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper'
import UploadField from '@/components/ui/form-elements/upload-field/UploadField'
import Layout from '@/components/ui/layout/Layout'

import { IMovieEditInput } from '@/shared/types/movie.interface'

import { generateSlug } from '@/utils/generateSlug'

import { useAdminActors } from './useAdminActors'
import { useAdminGenres } from './useAdminGenres'
import { useMovieEdit } from './useMovieEdit'

const MovieEdit: FC = () => {
	const { control, setValue, getValues, handleSubmit } =
		useForm<IMovieEditInput>({
			mode: 'onChange'
		})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	const { isLoading: isGenresLoading, data: genres } = useAdminGenres()
	const { isLoading: isActorsLoading, data: actors } = useAdminActors()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit movie' isBackButton />
			<View>
				{isLoading ? (
					<Loader />
				) : (
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<IMovieEditInput>
							name={'title'}
							placeholder='Enter name'
							control={control}
							rules={{
								required: 'Name is required!'
							}}
						/>

						<SlugWrapper generate={() => generateSlug(getValues('title'))}>
							<Field<IMovieEditInput>
								name={'slug'}
								placeholder='Enter slug'
								control={control}
								rules={{
									required: 'Slug is required!'
								}}
							/>
						</SlugWrapper>

						<Field<IMovieEditInput>
							name={'parameters.country'}
							placeholder='Enter country'
							control={control}
							rules={{
								required: 'Country is required!'
							}}
						/>

						<View className='flex-row flex-wrap justify-between'>
							<View style={{ width: '56%' }}>
								<Field<IMovieEditInput>
									name={'parameters.duration'}
									placeholder='Enter duration (min.)'
									control={control}
									rules={{
										required: 'Duration is required!'
									}}
								/>
							</View>
							<View style={{ width: '40%' }}>
								<Field<IMovieEditInput>
									name={'parameters.year'}
									placeholder='Enter year'
									control={control}
									rules={{
										required: 'Year is required!'
									}}
									keyboardType='number-pad'
								/>
							</View>
						</View>

						<Controller
							control={control}
							name={'genres'}
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={genres}
									isLoading={isGenresLoading}
									isMulti
									error={error}
									style={{
										zIndex: 11
									}}
								/>
							)}
							rules={{
								required: 'Please select at least one genre!'
							}}
						/>

						<Controller
							control={control}
							name={'actors'}
							render={({ field, fieldState: { error } }) => (
								<Dropdown
									field={field}
									options={actors}
									isLoading={isActorsLoading}
									isMulti
									error={error}
								/>
							)}
							rules={{
								required: 'Please select at least one actor!'
							}}
						/>

						<Controller
							control={control}
							name={'poster'}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='movies'
									placeholder='Poster'
								/>
							)}
							rules={{
								required: 'Poster is required!'
							}}
						/>

						<Controller
							control={control}
							name={'videoUrl'}
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder='movies'
									placeholder='Video'
									isNoImage
									gradient={['#4361a6', '#254584']}
								/>
							)}
							rules={{
								required: 'Video is required!'
							}}
						/>

						<Button onPress={handleSubmit(onSubmit)} icon={'pen-tool'}>
							Update
						</Button>
					</ScrollView>
				)}
			</View>
		</Layout>
	)
}

export default MovieEdit
