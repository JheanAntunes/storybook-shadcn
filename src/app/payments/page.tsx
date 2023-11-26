import { logicPagePayments } from '../logicPage'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'

export default async function DemoPage() {
  const { data } = await logicPagePayments()
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
