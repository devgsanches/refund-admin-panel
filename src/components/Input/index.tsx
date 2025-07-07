import { useState } from 'react'

type InputProps = {
  children?: React.ReactNode
  label: string
  id?: string
  name?: string
  placeholder?: string
  className?: string
  autoComplete?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function Input({
  children,
  label,
  id,
  name,
  placeholder,
  className,
  autoComplete = 'off',
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  function handler() {
    setIsFocused(true)
  }

  const inputId = id || name || label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputId}
        className={`text-xs ${
          isFocused ? 'text-[#1F8459] font-medium' : 'text-[#4D5C57]'
        }`}
      >
        {label}
      </label>
      <input
        id={inputId}
        name={name || inputId}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={`h-[3rem] rounded-lg border border-[#CDD5D2] px-3 ${className} focus:outline-none focus:ring-2 focus:ring-[#1F8459] `}
        {...props}
        onFocus={handler}
        onBlur={() => setIsFocused(false)}
      />
      {children}
    </div>
  )
}
