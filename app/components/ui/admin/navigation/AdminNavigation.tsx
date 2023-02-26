import { useIsFocused } from '@react-navigation/native'
import { BlurView } from 'expo-blur'
import { FC, useEffect, useState } from 'react'
import { View } from 'react-native'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'

import BlurButton from '@/components/ui/blur-button/BlurButton'
import Heading from '@/components/ui/heading/Heading'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

import AdminNavItem from './AdminNavItem'
import { navItems } from './admin-navigation.data'
import HamburgerAnimation from './hamburger-animation/HamburgerAnimation'

interface IAdminNavigation {
	title: string
	isBackButton?: boolean
}

const AdminNavigation: FC<IAdminNavigation> = ({ isBackButton, title }) => {
	const [isShow, setIsShow] = useState(false)
	const { goBack } = useTypedNavigation()

	const isFocused = useIsFocused()

	useEffect(() => {
		setIsShow(!isFocused)
	}, [isFocused])

	const translateXAnimation = useAnimatedStyle(
		() => ({
			transform: [
				{
					translateX: withSpring(isShow ? 0 : 165, {
						damping: 11.7
					})
				}
			]
		}),
		[isShow]
	)

	return (
		<View className='flex-row justify-between items-center z-10 mb-5'>
			<Heading title={title} />
			<View className='relative flex-row'>
				{isBackButton && (
					<BlurButton
						icon={'chevron-left'}
						iconSize={24}
						className='w-12 h-12 mr-3'
						onPress={goBack}
					/>
				)}

				<BlurButton
					onPress={() => setIsShow(!isShow)}
					iconSize={24}
					className='w-12 h-12'
				>
					<HamburgerAnimation isShow={isShow} />
				</BlurButton>

				<Animated.View style={translateXAnimation}>
					<BlurView
						intensity={50}
						tint='dark'
						className='absolute right-0 top-14 w-36 overflow-hidden rounded-2xl px-3.5 py-2.5'
					>
						{navItems.map((item) => (
							<AdminNavItem key={item.routeName} item={item} />
						))}
					</BlurView>
				</Animated.View>
			</View>
		</View>
	)
}

export default AdminNavigation
