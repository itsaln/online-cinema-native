import { Admin } from '@/components/screens'

import { IRoute } from '@/navigation/navigation.types'

export const adminRoutes: IRoute[] = [
	{
		name: 'Admin',
		component: Admin,
		isAdmin: true
	}
]