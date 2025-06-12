'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import { FaEye } from 'react-icons/fa'

const BlogPreviewCard = ({
  image,
  href,
  title,
  description,
  page_views_count,
}: {
  image: string
  href: string
  title: string
  description: string
  page_views_count: number
}) => {
  return (
    <ScrollAnimation animateIn="animate__fadeIn" className="h-full">
      <div className="max-w-[750px] mx-auto h-full rounded-xl shadow-md shadow-slate-100">
        <div
          className={`relative h-full flex w-full max-w-[25.5rem] flex-col rounded-xl bg-primary-200 bg-clip-border text-slate-900 shadow-2xl`}
        >
          <div className="relative mx-4 mt-4 overflow-hidden shadow-lg text-slate-100 rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
            <Image
              width={400}
              height={250}
              src={
                image ||
                'https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }
              alt="ui/ux review check"
              className="w-[400px] h-[250px] object-cover"
            />
            <p
              className={`absolute flex items-center gap-2 p-2 text-xs font-bold bg-primary-700 rounded-lg top-2 right-2 text-slate-100`}
            >
              <FaEye size={14} />
              {page_views_count}
            </p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal">
                {title}
              </h5>
            </div>
            <p className="block font-sans text-base antialiased font-light leading-relaxed">
              {description}
            </p>
          </div>
          <div className="p-6 pt-3 mt-auto">
            <Link
              href={href}
              target="_blank"
              className={`block w-full select-none rounded-lg bg-primary-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
            >
              Read
            </Link>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export default BlogPreviewCard
