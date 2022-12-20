import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import Button from '@/components/ui/button/Button'
import Layout from '@/components/ui/layout/Layout'

import { IActorEditInput } from '@/shared/types/actor.interface'

import { useActorEdit } from './useActorEdit'

const ActorEdit: FC = () => {
	const { control, setValue, handleSubmit } = useForm<IActorEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Edit actor' isBackButton />
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

export default ActorEdit
