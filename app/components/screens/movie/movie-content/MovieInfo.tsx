import { Entypo } from '@expo/vector-icons'
import { FC } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

import GenreList from '@/components/ui/movie/movie-item/GenreList'
import Rating from '@/components/ui/movie/movie-item/Rating'

import { IMovieComponent } from '../movie-page.interface'
import { HEADER_HEIGHT } from '../movie.constants'

const MovieInfo: FC<IMovieComponent> = ({ movie, y }) => {
	const opacity = y.interpolate({
		inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2],
		outputRange: [1, 1, 0]
	})

	return (
		<Animated.View className='px-6 mb-3' style={{ opacity }}>
			<Text
				className='text-5xl font-semibold text-[#f9fcfc] mb-2 pr-2'
				numberOfLines={2}
			>
				{movie.title}
			</Text>
			<View className='mb-4 flex-row items-center opacity-70'>
				<Rating rating={movie.rating} />
				<Entypo
					name='dot-single'
					size={18}
					color='rgba(255, 255, 255, .5)'
					style={{ marginLeft: 4 }}
				/>
				<Text style={styles.text}>{movie.parameters.duration} min.</Text>
			</View>
			<GenreList genres={movie.genres} />
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	text: {
		color: '#fff',
		marginHorizontal: 4,
		fontSize: 18
	}
})

export default MovieInfo
