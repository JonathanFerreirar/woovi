import * as z from 'zod'

import { cpfRegex } from '@/utils/regex'

const cleanNumber = (value: string) => value.replace(/\D/g, '')

export const formCardSchema = z.object({
  name: z
    .string({
      required_error: 'Nome é obrigatorio',
    })
    .min(4, { message: 'Digite um nome válido' }),

  cpf: z
    .string({})
    .min(11, { message: 'Digite um cpf válido' })
    .refine((value) => cpfRegex.test(value), {
      message: 'Digite um cpf válido',
    }),
  cardNumber: z.string().refine((value) => cleanNumber(value).length === 16, {
    message: 'Número de caracteres inválido',
  }),
  cvc: z
    .string()
    .max(4, { message: 'CVC inválido' })
    .refine(
      (value) =>
        cleanNumber(value).length >= 3 && cleanNumber(value).length <= 4,
      {
        message: 'CVC inválido',
      },
    ),

  expiration: z.string().refine((value) => cleanNumber(value).length === 4, {
    message: 'Data inválida',
  }),
})
