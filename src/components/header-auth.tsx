'use client'
import { NavbarItem, Button, Avatar, Popover, PopoverTrigger, PopoverContent } from '@heroui/react'
import { useSession } from 'next-auth/react'
import React from 'react'
import * as actions from '@/actions'

export default function HeaderAuth() {
  const session = useSession()
  if (session.status === 'loading') {
    return null
  } else if (session?.data?.user) {
    return (
      <Popover placement="left">
        <PopoverTrigger>
          <Avatar isBordered radius="lg" src={session.data.user.image || ''} />
        </PopoverTrigger>
        <PopoverContent>
          <div className="px-1 py-2">
            <form action={actions.signOut}>
              <Button type="submit" variant="light" color="danger">
                Sign Out
              </Button>
            </form>
          </div>
        </PopoverContent>
      </Popover>
    )
  } else {
    return (
      <>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" variant="light">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <form action={actions.signIn}>
            <Button type="submit" color="primary" variant="shadow">
              Sign Up
            </Button>
          </form>
        </NavbarItem>
      </>
    )
  }
}
