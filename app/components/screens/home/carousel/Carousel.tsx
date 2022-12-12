import { FC } from 'react'
import { View } from 'react-native'

import CarouselItem from '@/components/screens/home/carousel/carousel-item/CarouselItem'

import { IMovie } from '@/shared/types/movie.interface'

const Carousel: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<View>
			{movies.map((movie) => (
				<CarouselItem key={movie._id} movie={movie} />
			))}
		</View>
	)
}

export default Carousel
