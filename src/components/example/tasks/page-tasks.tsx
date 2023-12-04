'use client'

import { promises as fs } from 'fs'
import path from 'path'
import { z } from 'zod'
import { cwd } from 'node:process'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { UserNav } from './components/user-nav'
import { Task, taskSchema } from './schema/schema'
import { useEffect, useState } from 'react'

// Simulate a database read for tasks.
async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), 'components/examples/tasks/data/tasks.json'),
    )
    const tasks = JSON.parse(data.toString())
    return z.array(taskSchema).parse(tasks)
}

export default function TaskPage() {
    const [dataTasks, setDataTasks] = useState<Task[] | null>(null)

    useEffect(() => {
        const fetchGetDataTasks = async () => {
            const tasks = await getTasks()
            setDataTasks(tasks)
        }
        //fetch simulation client-side
        fetchGetDataTasks()
    }, [])

    return (
        <>
            <div className="md:hidden">
                {/* <Image
                    src="/examples/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                /> */}
            </div>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">
                            Welcome back!
                        </h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav />
                    </div>
                </div>
                {dataTasks && <DataTable data={dataTasks} columns={columns} />}
            </div>
        </>
    )
}
