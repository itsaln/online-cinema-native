import { useQuery } from '@tanstack/react-query'

import { GenreService } from '@/services/genre.service'

export const useAdminGenres = () =>
	useQuery(['list of genres'], () => GenreService.getAll(), {
		select: (data) =>
			data.map((genre) => ({
				label: genre.label,
				value: genre.value
			}))
	})
