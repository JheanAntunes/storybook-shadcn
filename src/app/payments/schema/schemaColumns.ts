// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
import * as z from 'zod'
export type TypePayment = z.infer<typeof schemaColumn>
export type TypePayments = TypePayment[]

export const schemaColumn = z.object({
  id: z.string(),
  amount: z.number(),
  status: z.enum(['pending', 'processing', 'success', 'failed']),
  email: z.string().email('Por favor, email invalid'),
})

export const schemaColumns = z.array(schemaColumn)
