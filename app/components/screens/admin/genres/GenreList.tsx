import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin/navigation/AdminNavigation'
import AdminHeader from '@/components/ui/admin/table-header/AdminHeader'
import AdminTable from '@/components/ui/admin/table/AdminTable'
import Layout from '@/components/ui/layout/Layout'

import { useGenres } from './useGenres'

const GenreList: FC = () => {
	const { control, isLoading, data, createAsync, deleteAsync } = useGenres()

	return (
		<Layout isHasPadding>
			<AdminNavigation title='Genres' />
			<AdminHeader control={control} onPress={createAsync} />
			<AdminTable
				isLoading={isLoading}
				headerItems={['Name', 'Slug']}
				tableItems={data}
				removeHandler={deleteAsync}
			/>
		</Layout>
	)
}

export default GenreList
