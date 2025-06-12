'use client'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Heading = ({ heading }: { heading: string }) => {
  return (
    <ScrollAnimation animateIn="animate__rubberBand">
      <h2 className="mb-10 text-6xl text-center text-primary-200">{heading}</h2>
    </ScrollAnimation>
  )
}

export default Heading
