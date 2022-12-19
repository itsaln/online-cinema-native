import { FC } from 'react'
import { ScrollView, Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'

import AdminTableHeader from './AdminTableHeader'
import AdminTableItem from './AdminTableItem'
import { IAdminTable } from './admin-table.interface'

const AdminTable: FC<IAdminTable> = ({
	isLoading,
	headerItems,
	tableItems = [],
	removeHandler
}) => {
	return (
		<ScrollView showsHorizontalScrollIndicator={false} horizontal>
			<View className='pb-6'>
				<AdminTableHeader headerItems={headerItems} />
				{isLoading ? (
					<Loader />
				) : tableItems?.length ? (
					<ScrollView showsVerticalScrollIndicator={false}>
						{tableItems.map((tableItem) => (
							<AdminTableItem
								key={tableItem._id}
								tableItem={tableItem}
								removeHandler={() => removeHandler(tableItem._id)}
							/>
						))}
					</ScrollView>
				) : (
					<Text className='text-white text-lg'>Elements not found</Text>
				)}
			</View>
		</ScrollView>
	)
}

export default AdminTable
