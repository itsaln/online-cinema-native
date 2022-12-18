import { FC } from 'react'
import { ListRenderItemInfo, Text, View } from 'react-native'

import HorizontalList from '@/components/ui/HorizontalList'
import Loader from '@/components/ui/Loader'
import MovieItem from '@/components/ui/movie/movie-item/MovieItem'

import { IMovie } from '@/shared/types/movie.interface'

import { useGetRelatedMovies } from './useRelatedMovies'

export interface IRelatedMovies {
	genreIds: string[]
	currentMovieId: string
}

const RelatedMovies: FC<IRelatedMovies> = ({ currentMovieId, genreIds }) => {
	const { data, isLoading } = useGetRelatedMovies(genreIds, currentMovieId)

	if (isLoading) return <Loader />
	if (!data?.length) return null

	return (
		<View className='my-8'>
			<Text className='text-white text-2xl font-semibold mb-5'>
				RelatedMovies
			</Text>
			<HorizontalList
				snapToInterval={160}
				data={data}
				// @ts-ignore
				renderItem={({ item: movie, index }: ListRenderItemInfo<IMovie>) => (
					<MovieItem
						key={movie._id}
						index={index}
						movie={movie}
						style={{
							width: 144,
							marginRight: 16
						}}
					/>
				)}
			/>
		</View>
	)
}

export default RelatedMovies
