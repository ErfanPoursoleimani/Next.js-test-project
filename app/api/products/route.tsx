import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import { prisma } from "@/prisma/client";

// GET THE DATA

export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
}

// CREATE DATA

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(newProduct, {status: 201})
}

// EDIT THE DATA

/* export async function PUT(request: NextRequest, {params: {id}}: {params: {id: number}}) {
    const body = await request.json()
    const validation = schema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const product = await prisma.product.findUnique({
        where: {
            name: body.name
        }
    })
    if(!product)
        return NextResponse.json({error: "Product not found"}, {status: 404})
    const updatedProduct = await prisma.product.findUnique({
        where: {
            name: product.name
        },
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(updatedProduct)
}

// DELETE

export async function DELETE(request: NextRequest, {params: {id}}: {params: {id: number}}) {
    const product = await prisma.product.findUnique({
        where: {
            name: body.name
        }
    })
    if(!product)
        return NextResponse.json({error: "Product does not exist"}, {status: 404})

    const deletedProduct = await prisma.product.delete({
        where: {
            id: product.id
        }
    })
    return NextResponse.json(deletedProduct)
} */