import { FC } from 'react'
import { View } from 'react-native'

import { useFavorites } from '@/components/screens/favorites/useFavorites'
import Loader from '@/components/ui/Loader'
import Heading from '@/components/ui/heading/Heading'
import Layout from '@/components/ui/layout/Layout'
import MovieItem from '@/components/ui/movie/movie-item/MovieItem'

const Favorites: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()

	return (
		<Layout isHasPadding>
			<Heading title='Favorites' />

			<View className=''>
				{isLoading ? (
					<Loader />
				) : (
					favoriteMovies?.map((movie) => (
						<MovieItem key={movie._id} movie={movie} />
					))
				)}
			</View>
		</Layout>
	)
}

export default Favorites
