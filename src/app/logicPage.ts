import { payments } from './payments/data/dataPayments'
import { TypePayment, schemaColumns } from './payments/schema/schemaColumns'
async function getData(): Promise<TypePayment[]> {
  // Fetch data from your API here.
  return payments
}
export const logicPagePayments = async () => {
  const data = await getData()
  const validatedColumns = schemaColumns.safeParse(data)
  if (!validatedColumns.success) throw new Error('DemoPage data invalid')

  return {
    data: validatedColumns.data,
  }
}
