'use client'

import { Input, Button, Textarea, Popover, PopoverContent, PopoverTrigger } from '@heroui/react'
import { useActionState } from 'react'
import * as actions from '@/actions'

export default function TopicCreateForm() {
  const [formState, action] = useActionState(actions.createTopic, {
    errors: {},
  })

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action} className="flex flex-col gap-4 p-4 w-80">
          <h3 className="text-lg">Create a Topic</h3>
          <Input
            name="topic"
            label="Topic"
            labelPlacement="outside"
            placeholder="Topic"
            isInvalid={!!formState.errors.topic}
            errorMessage={formState.errors.topic?.join(', ')}
          ></Input>
          <Textarea
            name="description"
            label="Description"
            labelPlacement="outside"
            placeholder="Describe your topic"
            isInvalid={!!formState.errors.description}
            errorMessage={formState.errors.description?.join(', ')}
          />

          {formState.errors._form ? (
            <div className="px-4 py-2 bg-rose-200 border border-rose-400 text-rose-700 rounded-lg">
              {formState.errors._form?.join(', ')}
            </div>
          ) : null}

          <Button type="submit" color="primary">
            Submit
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  )
}
