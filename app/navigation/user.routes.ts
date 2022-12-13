import Favorites from '@/components/screens/favorites/Favorites'
import Home from '@/components/screens/home/Home'
import Profile from '@/components/screens/profile/Profile'
import Search from '@/components/screens/search/Search'
import Trending from '@/components/screens/trending/Trending'

import { adminRoutes } from './admin.routes'
import { IRoute } from './navigation.types'

export const userRoutes: IRoute[] = [
	{
		name: 'Home',
		component: Home
	},
	{
		name: 'Trending',
		component: Trending
	},
	{
		name: 'Search',
		component: Search
	},
	{
		name: 'Favorites',
		component: Favorites
	},
	{
		name: 'Profile',
		component: Profile
	}
]

export const routes = [...userRoutes, ...adminRoutes]
