import { FC } from 'react'
import { Text, View } from 'react-native'

import { useMovie } from '@/components/screens/movie/useMovie'
import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'

//  [] - Header
//  [] - Info
//  [] - Background
//  [] - Animation
//  [] - Actor carousel
//  [] - Video player
//  [] - Related movies
//  [] - useCountOpened

const Movie: FC = () => {
	const { isLoading, movie } = useMovie()

	if (isLoading) return <Loader />
	if (!movie) return null

	return (
		<Layout style={{ paddingTop: 0 }}>
			<Text>Movie</Text>
		</Layout>
	)
}

export default Movie
