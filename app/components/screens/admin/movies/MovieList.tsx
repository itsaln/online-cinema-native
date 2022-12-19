import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'
import Layout from '@/components/ui/layout/Layout'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const { control, isLoading, data, createAsync, deleteAsync } = useMovies()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Movies' />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Title', 'Main genre', 'Rating']}
				tableItems={data}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default MovieList
