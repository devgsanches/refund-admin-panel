interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  action?: string
  children: React.ReactNode
  className?: string
}

export function Form({ action, className, children, ...props }: FormProps) {
  return (
    <form action={action} className={className} {...props}>
      {children}
    </form>
  )
}
