import { Metadata } from 'next'
import { NextResponse } from 'next/server'
import React from 'react'

const ProductPage = () => {
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage

export async function generateMetadata(): Promise<Metadata> {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    return {
        title: "product.title",
        description: "..."
    }

}