'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { FormSchemaCheckbox } from '../../../schema/schemaForm'
import { Button } from '../button'
import { Checkbox } from '../checkbox'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from '../form'
import { toast } from '../use-toast'

export function CheckboxReactHookFormSingle() {
    const form = useForm<z.infer<typeof FormSchemaCheckbox>>({
        resolver: zodResolver(FormSchemaCheckbox),
        defaultValues: {
            mobile: true,
        },
    })

    function onSubmit(data: z.infer<typeof FormSchemaCheckbox>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Use different settings for my mobile devices
                                </FormLabel>
                                <FormDescription>
                                    You can manage your mobile notifications in
                                    the <Link href="#">mobile settings</Link>{' '}
                                    page.
                                </FormDescription>
                            </div>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
