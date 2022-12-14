import { Ionicons } from '@expo/vector-icons'
import { FC } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import Description from '@/components/ui/heading/Description'
import Heading from '@/components/ui/heading/Heading'
import { IMovieCatalog } from '@/components/ui/movie/catalog/movie-catalog.interface'
import MovieItem from '@/components/ui/movie/movie-item/MovieItem'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const MovieCatalog: FC<IMovieCatalog> = ({
	movies = [],
	isBackButton,
	title,
	description
}) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View className='flex-row items-center justify-between'>
				<Heading title={title} className='mb-3' />
				{isBackButton && (
					<Pressable onPress={goBack}>
						<Ionicons
							name='arrow-back-circle-outline'
							size={32}
							color='white'
						/>
					</Pressable>
				)}
			</View>

			{description && <Description text={description} />}

			<ScrollView showsVerticalScrollIndicator={false}>
				<View className='flex-row flex-wrap justify-between mt-5 mb-32'>
					{movies?.length ? (
						movies.map((movie, index) => (
							<View className='mb-6' key={movie._id}>
								<MovieItem index={index} movie={movie} style={{ width: 160 }} />
							</View>
						))
					) : (
						<Text className='text-white text-lg'>Elements not found</Text>
					)}
				</View>
			</ScrollView>
		</View>
	)
}

export default MovieCatalog
