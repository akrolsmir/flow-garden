import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { Playground } from '@/components/playground'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="p-8">
      <Playground />
    </main>
  )
}
