import { FC } from 'react'
import { Text, View } from 'react-native'

import { useTypedNavigation } from '@/hooks/useTypedNavigation'

const MovieItem: FC = () => {
	const { navigate } = useTypedNavigation()

	return (
		<View>
			<Text>MovieItem</Text>
		</View>
	)
}

export default MovieItem
