import { BlurView } from 'expo-blur'
import { FC } from 'react'
import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	View,
	ViewStyle
} from 'react-native'
import Animated from 'react-native-reanimated'

import Rating from '@/components/ui/movie/movie-item/Rating'
import FavoriteButton from '@/components/ui/movie/movie-item/favorite-button/FavoriteButton'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import { useTypedRoute } from '@/hooks/useTypedRoute'

import { IMovie } from '@/shared/types/movie.interface'

import { getMediaSource } from '@/utils/getMediaSource'

import { useMovieItemAnimation } from './useMovieItemAnimation'

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable)

interface IMovieItem {
	index: number
	className?: string
	style?: ViewStyle
	movie: IMovie
}

const MovieItem: FC<IMovieItem> = ({ index, movie, style }) => {
	const { navigate } = useTypedNavigation()
	const { name } = useTypedRoute()

	const isFavoritePage = name === 'Favorites'

	const { styleAnimation } = useMovieItemAnimation(index, style)

	return (
		<ReanimatedPressable
			style={styleAnimation}
			onPress={() => navigate('Movie', { slug: movie.slug })}
			className='rounded-xl overflow-hidden w-40 h-56'
		>
			{isFavoritePage && (
				<View className='absolute z-1 right-1.5 top-1.5'>
					<FavoriteButton movieId={movie._id} isSmall />
				</View>
			)}

			<Image
				style={{
					resizeMode: 'cover',
					...StyleSheet.absoluteFillObject
				}}
				source={getMediaSource(movie.poster)}
			/>

			<BlurView
				intensity={25}
				className='absolute w-full bottom-0 left-0 right-0 items-center pt-0.5 px-2'
			>
				<Rating rating={movie.rating} size={16} />
				<Text
					className='text-white text-lg font-semibold mb-1'
					numberOfLines={1}
				>
					{movie.title}
				</Text>
			</BlurView>
		</ReanimatedPressable>
	)
}

export default MovieItem
