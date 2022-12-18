import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Layout from '@/components/ui/layout/Layout'

const UserList: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='UserList' />
		</Layout>
	)
}

export default UserList
