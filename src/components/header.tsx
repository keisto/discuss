import Link from 'next/link'
import { Navbar, NavbarBrand, NavbarItem, NavbarContent } from '@heroui/react'
import React, { Suspense } from 'react'
import HeaderAuth from './header-auth'
import SearchInput from './search-input'

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
          <Suspense>
            <SearchInput />
          </Suspense>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  )
}
