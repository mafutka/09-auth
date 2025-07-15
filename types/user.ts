export interface User {
  username: string
  email: string
  password?: string
  avatar: string
}

export type RegisteredUser = Pick<User, "email" | "username">

export type CreateUserData = {
  email: string
  password: string
  name?: string
}

export interface SessionResponseData {
  success: true;
}

// export interface RegisterRequest {

//   username: string
//   email: string
//   password: string
// }

// export interface LoginRequest {
//   email: string
//   avatar: string
//   username: string
// }
