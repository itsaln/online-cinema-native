import { FC, useRef } from 'react'
import { Animated } from 'react-native'

import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'

import MovieBackground from './MovieBackground'
import MovieHeader from './MovieHeader'
import MovieContent from './movie-content/MovieContent'
import { useMovie } from './useMovie'
import { useUpdateCountOpened } from './useUpdateCountOpened'

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
