'use client'

import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Aurora from './Aurora'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      // Show header when scrolled past 300px (adjust this value as needed)
      setIsVisible(scrollY > 300)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  let headerClass =
    'w-full bg-white dark:bg-gray-950 transition-all duration-300 fixed top-0 left-0 right-0 z-50'

  // Add visibility classes
  if (!isVisible) {
    headerClass += ' -translate-y-full opacity-0'
  } else {
    headerClass += ' translate-y-0 opacity-100'
  }

  return (
    <header className={headerClass}>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="flex items-center justify-between py-10">
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              <Aurora text="< Luis Hernández />" size="header" />
            </div>
          </Link>
          <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
            <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
              {headerNavLinks
                .filter((link) => link.href !== '/')
                .map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
                  >
                    {link.title}
                  </Link>
                ))}
            </div>
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
