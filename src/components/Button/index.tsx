interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={`w-full rounded-lg ${className} cursor-pointer py-3.5 font-bold text-sm outline-none`}
      {...props}
    >
      {children}
    </button>
  )
}
