import { DatePickerWithRange } from '../../../ui/demo/date-picker-with-ranger-demo'
import { Card, CardContent } from '../../../ui/card'
import { Label } from '../../../ui/label'

export function DemoDatePicker() {
    return (
        <Card>
            <CardContent className="pt-6">
                <div className="space-y-2">
                    <Label htmlFor="date" className="shrink-0">
                        Pick a date
                    </Label>
                    <DatePickerWithRange className="[&>button]:w-[260px]" />
                </div>
            </CardContent>
        </Card>
    )
}
