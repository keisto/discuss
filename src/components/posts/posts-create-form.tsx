'use client'

import { Input, Button, Textarea, Popover, PopoverContent, PopoverTrigger, Form } from '@heroui/react'
import * as actions from '@/actions'
import FormButton from '../common/form-button'
import { useActionState } from 'react'

interface Props {
  slug: string
}

export default function PostCreatForm({ slug }: Props) {
  const [formState, action, isPending] = useActionState(actions.createPost.bind(null, slug), { errors: {} })

  return (
    <Popover placement="left-start">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
              isInvalid={!!formState.errors.title}
              errorMessage={formState.errors.title?.join(', ')}
            ></Input>
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Content"
              isInvalid={!!formState.errors.content}
              errorMessage={formState.errors.content?.join(', ')}
            ></Textarea>

            {formState.errors._form ? (
              <div className="px-4 py-2 bg-rose-200 border border-rose-400 text-rose-700 rounded-lg">
                {formState.errors._form?.join(', ')}
              </div>
            ) : null}

            <FormButton isLoading={isPending}>Create</FormButton>
          </div>
        </Form>
      </PopoverContent>
    </Popover>
  )
}
