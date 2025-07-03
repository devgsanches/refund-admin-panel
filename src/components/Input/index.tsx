type InputProps = {
  children?: React.ReactNode
  label: string
  placeholder?: string
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({
  children,
  label,
  placeholder,
  className,
  ...props
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-[#4D5C57] text-xs">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className={`h-[3rem] rounded-lg border border-[#CDD5D2] px-2 ${className}`}
        {...props}
      />
      {children}
    </div>
  )
}
