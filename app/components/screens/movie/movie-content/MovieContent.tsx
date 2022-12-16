import { useScrollToTop } from '@react-navigation/native'
import { FC, useRef } from 'react'
import { Animated, ScrollView, Text, View } from 'react-native'

import VideoPlayer from '@/components/screens/movie/VideoPlayer'
import ActorCarousel from '@/components/screens/movie/movie-content/ActorCarousel'
import MovieInfo from '@/components/screens/movie/movie-content/MovieInfo'
import RelatedMovies from '@/components/screens/movie/movie-content/RelatedMovies'

import { IMovieComponent } from '../movie-page.interface'
import { HEADER_HEIGHT } from '../movie.constants'

const MovieContent: FC<IMovieComponent> = ({ movie, y }) => {
	const ref = useRef<ScrollView>(null)
	useScrollToTop(ref)

	return (
		<Animated.ScrollView
			ref={ref}
			showsVerticalScrollIndicator={false}
			scrollEventThrottle={16}
			onScroll={Animated.event(
				[
					{
						nativeEvent: { contentOffset: { y } }
					}
				],
				{
					useNativeDriver: true
				}
			)}
			contentContainerStyle={{
				paddingTop: HEADER_HEIGHT / 1.3
			}}
		>
			<MovieInfo movie={movie} y={y} />
			<View className='bg-[#090909]'>
				<VideoPlayer video={movie.videoUrl} />
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
