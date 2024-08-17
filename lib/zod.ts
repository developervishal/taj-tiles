import { object, string } from 'zod'

export const signInSchema = object({
    username: string({ required_error: "username is required" }),
    password: string({ required_error: "password is required" })
        .min(6, 'password must be more than 6 characters')
})