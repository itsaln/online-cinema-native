import { getGenresUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'

import { IGenre, IGenreEditInput } from '@/shared/types/movie.interface'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return request<IGenre[]>({
			url: getGenresUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getOne(_id: string) {
		return request<IGenreEditInput>({
			url: getGenresUrl(`/${_id}`),
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return request<IGenre>({
			url: getGenresUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},

	// async getCollections() {
	// 	return request<ICollection[]>({
	// 		url: getGenresUrl('/collections'),
	// 		method: 'GET'
	// 	})
	// },

	async create() {
		return request<string>({
			url: getGenresUrl(''),
			method: 'POST'
		})
	},

	async update(_id: string, data: IGenreEditInput) {
		return request<string>({
			url: getGenresUrl(`/${_id}`),
			method: 'PUT',
			data
		})
	},

	async delete(_id: string) {
		return request<string>({
			url: getGenresUrl(`/${_id}`),
			method: 'DELETE'
		})
	}
}
