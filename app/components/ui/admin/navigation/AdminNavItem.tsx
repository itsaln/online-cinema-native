import { MaterialIcons } from '@expo/vector-icons'
import cn from 'clsx'
import { FC } from 'react'
import { Pressable, Text } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

import { INavItem } from './admin-navigation.interface'

const AdminNavItem: FC<{ item: INavItem }> = ({
	item: { title, routeName, icon }
}) => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	return (
		<Pressable
			// @ts-ignore
			onPress={() => navigate(routeName)}
			className='flex-row items-center py-1 first:pt-0 last:pb-0'
		>
			<MaterialIcons
				name={icon}
				size={24}
				color={name === routeName ? '#d73033' : '#666'}
			/>
			<Text
				className={cn('text-lg text-[#d1d1d1] ml-2', {
					'text-[#d73033] font-medium': name === routeName
				})}
			>
				{title}
			</Text>
		</Pressable>
	)
}

export default AdminNavItem
