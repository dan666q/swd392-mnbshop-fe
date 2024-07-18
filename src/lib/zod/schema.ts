import { ERROR_MESSAGES, phoneRegex } from '@/constants'
import { differenceInYears } from 'date-fns'

import { z } from 'zod'

export const editProfileTemplateSchema = z.object({
  fullName: z
    .string()
    .min(5, { message: ERROR_MESSAGES.EM1 })
    .max(40, { message: ERROR_MESSAGES.EM1 })
    .refine((value) => isNaN(Number(value)), { message: ERROR_MESSAGES.EM1 }),
  email: z.string({ required_error: ERROR_MESSAGES.EM1 }).email(),
  address: z
    .string({ required_error: ERROR_MESSAGES.EM1 })
    .min(3, { message: ERROR_MESSAGES.EM1 })
    .max(80, { message: ERROR_MESSAGES.EM1 }),
  gender: z.enum(['Male', 'Female'], { required_error: ERROR_MESSAGES.EM1 }),
  dob: z
    .string({ required_error: ERROR_MESSAGES.EM1 })
    .refine((dob) => differenceInYears(new Date(), new Date(dob)) >= 18, {
      message: 'User must be at least 18 years old',
    }),
  phone: z.string({ required_error: ERROR_MESSAGES.EM1 }).regex(phoneRegex, { message: ERROR_MESSAGES.EM1 }),
  role: z.string().readonly(),
  username: z.string().readonly(),
})

export const productSchema = z.object({
  productName: z.string().min(1, 'Product name is required'),
  brandId: z.number(),
  productDescription: z.string().min(1, 'Product description is required'),
  productImg: z.string().url('Product image must be a valid URL'),
  productPrice: z.number().min(0, 'Product price must be a positive number or zero'),
  quantity: z.number().int().min(0, 'Quantity must be a non-negative integer'),
  byAge: z.number().int().min(0, 'Age must be a non-negative integer'),
  isPreOrder: z.boolean().optional(),
  preOrderAmount: z.number().optional(),
  isPromote: z.boolean(),
  isDisable: z.boolean(),
  discount: z.number().min(0, 'Discount must be a non-negative number'),
})

export const accountSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  image: z.string().min(1, 'Image is required'),
  phone: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Address is required'),
  gender: z.boolean(),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  roleId: z.number(),
})

export const createAccountSchema = z.object({
  username: z.string(),
  password: z.string(),
  fullName: z.string(),
  dateOfBirth: z.string(),
  gender: z.boolean(),
  address: z.string(),
  phone: z.string(),
  image: z.string().default('https://greekherald.com.au/wp-content/uploads/2020/07/default-avatar.png'),
  status: z.string(),
  isDisable: z.boolean().default(false),
  email: z.string(),
})

export const signUpSchema = z
  .object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirmPassword: z.string(),
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    dateOfBirth: z.string(),
    gender: z.string(),
    address: z.string(),
    phone: z.string().regex(/^\d{10}$/, 'Invalid phone number'),
    email: z.string().email('Invalid email address'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const brandSchema = z.object({
  brandName: z.string().min(1, 'Brand name is required'),
  brandImg: z.string().min(1, 'Brand image is required'),
  madeIn: z.string().min(1, 'Made in is required'),
  description: z.string().min(1, 'Description is required'),
})

export const promotionSchema = z.object({
  promotionName: z.string().min(1, 'Promotion name is required'),
  startAt: z.date(),
  endAt: z.date(),
  status: z.boolean().optional(),
  promote: z.number().min(0).max(100),
  promotionImg: z.string().url('Invalid URL'),
})
