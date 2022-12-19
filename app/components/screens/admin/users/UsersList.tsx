import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import Layout from '@/components/ui/layout/Layout'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'
import { useUsers } from './useUsers'

const UserList: FC = () => {
	const {control, isLoading, data, deleteAsync} = useUsers()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList' />
			<AdminHeader control={control}  />
		</Layout>
	)
}

export default UserList
