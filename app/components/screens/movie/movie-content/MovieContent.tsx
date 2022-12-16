import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Animated, ScrollView, Text, View } from 'react-native'

import ActorCarousel from '@/components/screens/movie/movie-content/ActorCarousel'
import MovieInfo from '@/components/screens/movie/movie-content/MovieInfo'
import RelatedMovies from '@/components/screens/movie/movie-content/RelatedMovies'

import { IMovieComponent } from '../movie-page.interface'

const MovieContent: FC<IMovieComponent> = ({ movie }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
		>
			<MovieInfo movie={movie} />
			<View className='bg-[#090909]'>
				{/* Video Player */}
				<ActorCarousel actors={movie.actors} />
				<RelatedMovies
					currentMovieId={movie._id}
					genreIds={movie.genres.map(({ _id }) => _id)}
				/>
			</View>
		</Animated.ScrollView>
	)
}

export default MovieContent
