export interface LoginResponse {
  status: boolean
  data: {
    fullName: string
    token: string
    email: string
    id: number
  }
}
