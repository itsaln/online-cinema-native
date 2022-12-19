import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'
import Layout from '@/components/ui/layout/Layout'

import { useUsers } from './useUsers'

const UserList: FC = () => {
	const { control, isLoading, data, deleteAsync } = useUsers()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Users' />
			<AdminHeader control={control} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Email', 'Date register']}
				tableItems={data}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default UserList
