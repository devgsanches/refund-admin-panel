type IRefundResponse = {
  id: string
  name: string
  amount: number
  category: ICategoryEnum
  filepath?: string
  user: {
    name: string
  }
}

type IRefundItem = {
  id?: string
  name: string
  amount: number
  category: ICategoryEnum
  filepath?: string
}

type IRefundPaginationResponse = {
  refunds: IRefundResponse[]
  pagination: {
    page: number
    perPage: number
    totalRecords: number
    totalPages: number
  }
}
