import { FC } from 'react'

import Loader from '@/components/ui/Loader'
import NotFound from '@/components/ui/NotFound'
import Layout from '@/components/ui/layout/Layout'
import MovieCatalog from '@/components/ui/movie/catalog/MovieCatalog'

import { useActor } from './useActor'

const Actor: FC = () => {
	const { isLoading, actor, movies } = useActor()

	if (isLoading) return <Loader />

	return (
		<Layout isHasPadding>
			{actor ? (
				<MovieCatalog title={actor.name} movies={movies} isBackButton />
			) : (
				<NotFound />
			)}
		</Layout>
	)
}

export default Actor
