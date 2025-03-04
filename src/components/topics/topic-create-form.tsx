import { Input, Button, Textarea, Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import * as actions from '@/actions'

export default function TopicCreateForm() {
  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={actions.createTopic} className="flex flex-col gap-4 p-4 w-80">
          <h3 className="text-lg">Create a Topic</h3>
          <Input name="topic" label="Topic" labelPlacement="outside" placeholder="Topic"></Input>
          <Textarea name="description" label="Description" labelPlacement="outside" placeholder="Describe your topic" />
          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}
