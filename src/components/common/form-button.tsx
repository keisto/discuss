'use client'

import { Button } from '@heroui/react'

interface Props {
  children: React.ReactNode
  isLoading: boolean
}

export default function FormButton({ children, isLoading }: Props) {
  return (
    <Button fullWidth type="submit" isLoading={isLoading}>
      {children}
    </Button>
  )
}
