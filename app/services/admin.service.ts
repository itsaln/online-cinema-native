import { getUsersUrl } from '@/config/api.config'

import { request } from '@/services/api/request.api'

export const AdminService = {
	async getCountUsers() {
		return request<number>({
			url: getUsersUrl('/count'),
			method: 'get'
		})
	}
}
