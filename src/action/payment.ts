'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const paymentAction = async () => {
  cookies().set('paid', 'true')
  redirect('/paid?paid=true&name=João')
}
