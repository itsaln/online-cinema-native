import { FC } from 'react'
import { ScrollView, Text } from 'react-native'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'
import Layout from '@/components/ui/layout/Layout'

import Statistics from './statistics/Statistics'

const Admin: FC = () => {
	return (
		<Layout isHasPadding>
			<AdminNavigation title='Statistics' />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Statistics />
			</ScrollView>
		</Layout>
	)
}

export default Admin
