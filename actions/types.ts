export interface LoginResponse {
  status: boolean
  data: {
    fullName: string
    token: string
    email: string
    id: number
  }
}

export interface ProfileResponse {
  status: boolean
  data: {
    fullName: string
    email: string
    id: number
  }
}
