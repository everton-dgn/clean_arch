import { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  titleCircleFieldStatus: string
  isValidatedTheField: boolean
}
