import * as z from 'zod'
export const formSchema = z.object({
    username: z.string().min(2, {
        message: 'Username must be at least 2 characters.',
    }),
})

export const FormSchemaCheckbox = z.object({
    mobile: z.boolean().default(false).optional(),
})

export const FormSchemaDatePicker = z.object({
    dob: z.date({
        required_error: 'A date of birth is required.',
    }),
})
