import { Input } from './styles'

interface inputProps {
  placeHolder: string
  type: string
}

export function InputForm({ placeHolder, type }: inputProps) {
  return <Input type={type} placeholder={placeHolder} />
}
