import { FC, useRef } from 'react'
import { Animated, Text, View } from 'react-native'

import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'

import MovieBackground from './MovieBackground'
import MovieHeader from './MovieHeader'
import MovieContent from './movie-content/MovieContent'
import { useMovie } from './useMovie'
import { useUpdateCountOpened } from './useUpdateCountOpened'

//  [x] - Header
//  [x] - Info
//  [x] - Background
//  [x] - MovieContent
//  [x] - Actor carousel
//  [x] - Related movies
//  [x] - Animation
//  [x] - Video player
//  [x] - useCountOpened

const Movie: FC = () => {
	const y = useRef(new Animated.Value(0)).current

	useUpdateCountOpened()

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
