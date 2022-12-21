import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ScrollView, Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/form-elements/field/Field'
import SlugWrapper from '@/components/ui/form-elements/field/SlugWrapper'
import TextEditor from '@/components/ui/form-elements/text-editor/TextEditor'
import Layout from '@/components/ui/layout/Layout'

import { IGenreEditInput } from '@/shared/types/genre.interface'

import { generateSlug } from '@/utils/generateSlug'

import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC = () => {
	const { control, setValue, getValues, handleSubmit } =
		useForm<IGenreEditInput>({
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
					<ScrollView showsVerticalScrollIndicator={false}>
						<Field<IGenreEditInput>
							control={control}
							name='name'
							placeholder='Enter name'
							rules={{
								required: 'Name is required!'
							}}
						/>

						<SlugWrapper generate={() => generateSlug(getValues('name'))}>
							<Field<IGenreEditInput>
								control={control}
								name='slug'
								placeholder='Enter slug'
								rules={{
									required: 'Slug is required!'
								}}
							/>
						</SlugWrapper>

						<Controller
							control={control}
							name='description'
							defaultValue=''
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<TextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder='Enter description here'
								/>
							)}
							rules={{
								validate: {
									required: (value) => {
										const replaceHTML = value.replace(/<(.|n)*?>/g, '').trim()
										const replaceWhiteSpace = replaceHTML
											.replace(/&nbsp;/g, '')
											.trim()

										return (
											replaceWhiteSpace.length > 0 || 'Description is required!'
										)
									}
								}
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

export default GenreEdit
