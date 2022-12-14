import { FC } from 'react'

import Loader from '@/components/ui/Loader'
import NotFound from '@/components/ui/NotFound'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import { useGenre } from './useGenre'

const Genre: FC = () => {
	const { isLoading, genre, movies } = useGenre()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{genre ? (
				<MovieCatalog
					title={genre.name}
					description={genre.description}
					movies={movies}
					isBackButton
				/>
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Genre
