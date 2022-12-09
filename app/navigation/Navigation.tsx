import { NavigationContainer } from '@react-navigation/native'
import { FC } from 'react'

import PrivateNavigator from '@/navigation/PrivateNavigator'

const Navigation: FC = () => {
	return (
		<NavigationContainer>
			<PrivateNavigator />
		</NavigationContainer>
		// TODO: Bottom menu
	)
}

export default Navigation
