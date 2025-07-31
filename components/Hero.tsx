"use client"

import { motion } from "framer-motion"
import siteMetadata from '@/data/siteMetadata'
import Aurora from './Aurora'
import PC3D from './PC3D'

export default function Hero() {
  return (
    <div className="relative isolate bg-white dark:bg-gray-950 h-[80vh] flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-4xl lg:mx-0 lg:flex-shrink-0 lg:w-1/2">
          <motion.div
            className="mt-4 mb-2 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Aurora text="< Luis Hernández />" size="hero" />
          </motion.div>
          <motion.p
            className="mt-2 text-lg leading-8 text-muted-foreground"
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
            <a
              href="/blog"
              className="apple-button"
            >
              Explore Blog Posts
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-foreground"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto mt-16 lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <PC3D 
              width={500} 
              height={500} 
              className="rounded-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}