export interface IRefund {
  id: string
  name: string
  amount: string
  category: string
  createdAt: string
  updatedAt: string
  filePath: string
  user: {
    name: string
  }
  userId: string
}
