import Auth from '@/components/screens/auth/Auth'
import Home from '@/components/screens/home/Home'

import { IRoute } from '@/navigation/navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Auth',
		component: Auth
	}
]
