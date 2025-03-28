type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export function Input ({ ...rest }: Props) {
  return (
    <input
      type="text"
      name="todo"
      placeholder='Adicione uma nova tarefa'
      {...rest}
    />
  )
}
