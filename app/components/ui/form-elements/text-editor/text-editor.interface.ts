import { FieldError } from 'react-hook-form'

export interface ITextEditor {
	onChange: (...events: any[]) => void
	value: string
	error?: FieldError
	placeholder?: string
}
