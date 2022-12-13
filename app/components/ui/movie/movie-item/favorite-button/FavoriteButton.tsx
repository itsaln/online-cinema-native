import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FC } from 'react'
import { StyleSheet } from 'react-native'
import Animated, { withSpring } from 'react-native-reanimated'

import BlurButton from '@/components/ui/blur-button/BlurButton'

import { useFavorite } from './useFavorite'
import { useFavoriteAnimation } from './useFavoriteAnimation'

interface IFavoriteButton {
	movieId: string
	isSmall?: boolean
}

const FavoriteButton: FC<IFavoriteButton> = ({ isSmall = false, movieId }) => {
	const { isSmashed, toggleFavorite } = useFavorite(movieId)
	const { outlineStyle, fillStyle, liked } = useFavoriteAnimation(isSmashed)

	return (
		<BlurButton
			isSmall={isSmall}
			onPress={() => {
				liked.value = withSpring(liked.value === 1 ? 0 : 1)
				toggleFavorite()
			}}
		>
			<Animated.View
				style={[StyleSheet.absoluteFill, outlineStyle]}
				className='items-center justify-center'
			>
				<MaterialCommunityIcons
					name={'heart-outline'}
					size={isSmall ? 19 : 22}
					color={'white'}
				/>
			</Animated.View>

			<Animated.View style={fillStyle}>
				<MaterialCommunityIcons
					name={'heart'}
					size={isSmall ? 19 : 22}
					color={'#DC3F41'}
				/>
			</Animated.View>
		</BlurButton>
	)
}

export default FavoriteButton
