import { FC, useRef } from 'react'
import { Animated, Text, View } from 'react-native'

import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import MovieContent from '@/components/screens/movie/movie-content/MovieContent'
import { useMovie } from '@/components/screens/movie/useMovie'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'

//  [x] - Header
//  [x] - Info
//  [x] - Background
//  [x] - MovieContent
//  [x] - Actor carousel
//  [x] - Related movies
//  [x] - Animation
//  [] - Video player
//  [] - useCountOpened

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current
	
	const { isLoading, movie } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} y={y} />
			<MovieBackground movie={movie} y={y} />
			<MovieContent movie={movie} y={y} />
		</Layout>
	)
}

export default Movie
