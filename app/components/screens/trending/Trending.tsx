import { FC } from 'react'

import Loader from '@/components/ui/Loader'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import { useTrending } from './useTrending'

const Trending: FC = () => {
	const { isLoading, movies } = useTrending()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			<MovieCatalog
				title='Trending movies'
				description='Trending movies in excellent quality: legal, safe, without ads'
				movies={movies}
			/>
		</Layout>
	)
}

export default Trending
