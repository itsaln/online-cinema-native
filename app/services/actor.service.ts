import { getActorsUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'

import { IActor, IActorEditInput } from '@/shared/types/actor.interface'
import { IUser } from '@/shared/types/user.interface'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return request<IActor[]>({
			url: getActorsUrl(''),
			method: 'GET',
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	async getOne(_id: string) {
		return request<IUser>({
			url: getActorsUrl(`/${_id}`),
			method: 'GET'
		})
	},

	async getBySlug(slug: string) {
		return request<IActor>({
			url: getActorsUrl(`/by-slug/${slug}`),
			method: 'GET'
		})
	},

	async create() {
		return request<string>({
			url: getActorsUrl(''),
			method: 'POST'
		})
	},

	async update(_id: string, data: IActorEditInput) {
		return request<string>({
			url: getActorsUrl(`/${_id}`),
			method: 'PUT',
			data
		})
	},

	async delete(_id: string) {
		return request<string>({
			url: getActorsUrl(`/${_id}`),
			method: 'DELETE'
		})
	}
}
