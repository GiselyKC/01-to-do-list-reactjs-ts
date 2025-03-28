type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button ({ children, ...rest}: Props) {
  return (
    <button
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
