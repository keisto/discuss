import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarItem, NavbarContent, Input } from '@heroui/react'
import React from 'react'
import HeaderAuth from './header-auth'

export default async function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Discuss
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <Input />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}
