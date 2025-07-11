import foodIcon from '@/assets/icons/foodIcon.svg'
import transportIcon from '@/assets/icons/transportIcon.svg'
import hostingIcon from '@/assets/icons/hostingIcon.svg'
import servicesIcon from '@/assets/icons/servicesIcon.svg'
import othersIcon from '@/assets/icons/othersIcon.svg'
import { formatCurrency } from '@/utils/formatCurrency'

export function Refund({
  category,
  name,
  description,
  amount,
  onClick,
}: {
  category: string
  name: string
  description: string
  amount: number
  onClick: () => void
}) {
  type CategoryInfo = {
    img: React.ReactNode
    name: string
  }

  function getCategoryInfo(category: string): CategoryInfo | undefined {
    switch (category) {
      case 'food':
        return {
          img: <img src={foodIcon} alt="Alimentação" />,
          name: 'Alimentação',
        }
      case 'accommodation':
        return {
          img: <img src={hostingIcon} alt="Hospedagem" />,
          name: 'Hospedagem',
        }
      case 'transport':
        return {
          img: <img src={transportIcon} alt="Transporte" />,
          name: 'Transporte',
        }
      case 'services':
        return {
          img: <img src={servicesIcon} alt="Serviços" />,
          name: 'Serviços',
        }
      case 'others':
        return {
          img: <img src={othersIcon} alt="Outros" />,
          name: 'Outros',
        }
      default:
        return undefined
    }
  }

  const categoryInfo = getCategoryInfo(category)

  return (
    <li onClick={onClick} className="cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          {categoryInfo?.img}
          <div className="flex flex-col">
            <p className="text-[#1F2523] text-sm font-bold">{name}</p>
            <span className="text-[#4D5C57] text-xs font-medium">
              {description}
            </span>
          </div>
        </div>

        <div className="flex items-center">
          <span className="text-[#4D5C57] text-xs">R$</span>
          <p className="text-[#1F2523] text-sm font-semibold">
            {formatCurrency(amount)}
          </p>
        </div>
      </div>
    </li>
  )
}
