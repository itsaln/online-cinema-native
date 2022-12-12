import { getMoviesUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'

import { IMovie, IMovieEditInput } from '@/shared/types/movie.interface'

export const MovieService = {
	async getAll(searchTerm?: string) {
		return request<IMovie[]>({
			url: getMoviesUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getOne(_id: string) {
		return request<IMovieEditInput>({
			url: getMoviesUrl(`/${_id}`),
			method: 'GET'
		})
	},

	async getMostPopularMovies() {
		return request<IMovie[]>({
			url: getMoviesUrl('/most-popular'),
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return request<IMovie>({
			url: getMoviesUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},

	async getByActor(actorId: string) {
		return request<IMovie>({
			url: getMoviesUrl(`/by-actor/${actorId}`),
			method: 'GET'
		})
	},

	async getByGenres(genreIds: string[]) {
		return request<IMovie[]>({
			url: getMoviesUrl('/by-genres'),
			method: 'POST',
			data: { genreIds }
		})
	},

	async create() {
		return request<string>({
			url: getMoviesUrl(''),
			method: 'POST'
		})
	},

	async update(_id: string, data: IMovieEditInput) {
		return request<string>({
			url: getMoviesUrl(`/${_id}`),
			method: 'PUT',
			data
		})
	},

	async updateCountOpened(slug: string) {
		return request<string>({
			url: getMoviesUrl('/update-count-opened'),
			method: 'PUT',
			data: { slug }
		})
	},

	async delete(_id: string) {
		return request<string>({
			url: getMoviesUrl(`/${_id}`),
			method: 'DELETE'
		})
	}
}
