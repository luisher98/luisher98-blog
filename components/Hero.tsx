'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import Aurora from './Aurora'
import PC3D from './PC3D'

export default function Hero() {
  return (
    <div className="relative isolate flex h-[80vh] items-center bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 lg:w-1/2 lg:flex-shrink-0">
          <motion.div
            className="relative mt-4 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Aurora text="< Luis Hernández />" size="hero" />
          </motion.div>
          <motion.p
            className="text-muted-foreground mt-2 text-lg leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {siteMetadata.description}
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/blog" className="apple-button">
              Explore Blog Posts
            </Link>
            <Link href="/about" className="text-foreground text-sm leading-6 font-semibold">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <PC3D width={500} height={500} className="rounded-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
