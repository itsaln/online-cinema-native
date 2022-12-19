import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'
import Layout from '@/components/ui/layout/Layout'

import { useActors } from './useActors'

const ActorList: FC = () => {
	const { control, isLoading, data, createAsync, deleteAsync } = useActors()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Actors' />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Name', 'Count movies']}
				tableItems={data}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default ActorList
