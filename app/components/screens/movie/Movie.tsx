import { FC } from 'react'
import { Text, View } from 'react-native'

import MovieBackground from '@/components/screens/movie/MovieBackground'
import MovieHeader from '@/components/screens/movie/MovieHeader'
import MovieInfo from '@/components/screens/movie/MovieInfo'
import { useMovie } from '@/components/screens/movie/useMovie'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'

//  [x] - Header
//  [x] - Info
//  [] - Background
//  [] - MovieContent
//  [] - Actor carousel
//  [] - Related movies
//  [] - Animation
//  [] - Video player
//  [] - useCountOpened

const Movie: FC = () => {
	const { isLoading, movie } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<MovieHeader movie={movie} />
			<MovieBackground movie={movie} />
			<MovieInfo movie={movie} />
		</Layout>
	)
}

export default Movie
