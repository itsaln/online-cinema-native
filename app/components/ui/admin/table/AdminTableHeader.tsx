import { FC } from 'react'
import { Text, View } from 'react-native'

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<View className='flex-row items-center px-3 rounded-lg bg-primary mt-2'>
			{headerItems.map(value => (
				<View className='py-2.5 w-32 mx-2 text-base' key={value}>
					<Text className='opacity-90 text-white'>{value}</Text>
				</View>
			))}
		</View>
	)
}

export default AdminTableHeader
