import React from 'react'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: string[]
  id?: string
  name?: string
}

export function Select({ label, options, id, name, ...props }: SelectProps) {
  const selectId = id || name || label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={selectId} className="text-[#4D5C57] text-xs">
        {label}
      </label>
      <select
        id={selectId}
        name={name || selectId}
        className="rounded-lg border border-[#CDD5D2] text-[#4D5C57] text-sm px-2 py-3 outline-none cursor-pointer w-[16.375rem]"
        {...props}
      >
        <option value="">Selecione uma categoria</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
