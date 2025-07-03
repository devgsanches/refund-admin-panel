import logo from '@/assets/logo.svg'

export function Logo({ className }: { className?: string }) {
  return <img src={logo} alt="Logo" className={className} />
}
