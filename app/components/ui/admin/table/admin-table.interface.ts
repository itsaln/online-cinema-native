export interface ITableItem {
	_id: string
	editNavigate: () => void
	items: string[]
}

export interface IAdminTableItem {
	tableItem: IAdminTableItem
	removeHandler: () => void
}

export interface IAdminTable {
	tableItems: IAdminTableItem[]
	isLoading: boolean
	headerItems: string[]
	removeHandler: (id: string) => void
}
