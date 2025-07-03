export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`bg-[#F9FBFA] rounded-xl p-8 ${className}`}>{children}</div>
  )
}
