'use server'

import type { Topic } from '@prisma/client'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { auth } from '@/auth'
import { db } from '@/db'
import paths from '@/paths'
import { revalidatePath } from 'next/cache'

const createTopicSchema = z.object({
  topic: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, { message: 'Topic must be lowercase and contain only letters and hyphens' }),
  description: z.string().min(10),
})

interface CreateTopicFormState {
  errors: {
    topic?: string[]
    description?: string[]
    _form?: string[]
  }
}

export async function createTopic(formState: CreateTopicFormState, formData: FormData): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    topic: formData.get('topic'),
    description: formData.get('description'),
  })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    }
  }

  const session = await auth()

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You must be signed in to create a topic'],
      },
    }
  }

  let topic: Topic
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.topic,
        description: result.data.description,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error?.message || ''],
        },
      }
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      }
    }
  }

  revalidatePath('/')
  redirect(paths.topicsShow(topic.slug))
}
