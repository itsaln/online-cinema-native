import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import { IAdminTable } from './admin-table.interface'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'

const AdminTable: FC<IAdminTable> = ({
	tableItems,
	headerItems,
	isLoading,
	removeHandler
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal>
			<View className='pb-6'>
				{/*<AdminHeader control={} />*/}
			</View>
		</ScrollView>
	)
}

export default AdminTable
