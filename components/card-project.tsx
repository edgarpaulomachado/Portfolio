'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'

interface CardProjectProps {
  title: string
  description: string
  image: string
  github?: string
  demo?: string
}

export default function CardProject({
  title,
  description,
  image,
  github,
  demo,
}: CardProjectProps) {
  return (
    <Card className="md:w-130 sm:w-90 bg-[#09090A] md:rounded-2xl sm:rounded-xl border border-[#212125] overflow-hidden transition-all duration-300 hover:border-[#FF1493] hover:shadow-lg hover:shadow-[#ff149330]">

      <CardHeader className="p-0">
        <div className="relative w-full md:h-65 sm:h-50">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>

      <CardContent className="md:p-6 sm:p-3">
        <h3 className="md:text-xl sm:text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="text-gray-400 mt-3 md:text-sm sm:text-xs leading-relaxed">
          {description}
        </p>

        <div className="flex gap-3 mt-6">

          {demo && (
            <Button asChild>
              <Link href={demo} target="_blank">
                Live Demo
              </Link>
            </Button>
          )}

          {github && (
            <Button
              asChild
              className="bg-[#ff149154] text-[#FF1493] hover:bg-[#ff149330]"
            >
              <Link href={github} target="_blank">
                GitHub
              </Link>
            </Button>
          )}

        </div>
      </CardContent>

    </Card>
  )
}