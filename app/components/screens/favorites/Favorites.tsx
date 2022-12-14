import { FC } from 'react'

import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import { useFavorites } from './useFavorites'

const Favorites: FC = () => {
	const { isLoading, favoriteMovies } = useFavorites()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog title='Favorites' movies={favoriteMovies} />
		</Layout>
	)
}

export default Favorites
