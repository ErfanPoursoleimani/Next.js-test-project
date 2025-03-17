import { NextRequest, NextResponse } from "next/server";
import { createIssueSchema } from '@/app/validationSchemas'
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest){
    const users = await prisma.issue.findMany()
    return NextResponse.json(users)
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const issue = await prisma.issue.findUnique({
        where: {
            title: body.title,
            description: body.description
        }
    })
    if(issue)
        return NextResponse.json({error: "User already exists"}, {status: 400})
    const newUser = await prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })
    return NextResponse.json(newUser, {status: 201})
}

export async function PUT(request: NextRequest) {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400})
    
    const issue = await prisma.issue.findUnique({
        where: {
            title: body.title
        }
    })
    if(!issue)
        return NextResponse.json({error: 'Issue not found'}, {status: 404})

    const updatedUser = await prisma.issue.update({
        where: {
            title: body.title
        },
        data: {
            title: body.title,
            description: body.description
        }
    })
    return NextResponse.json(updatedUser)
}

export async function DELETE(request: NextRequest) {
    const body = await request.json()
    const issue = await prisma.issue.findUnique({
        where: {
            title: body.title
        }
    })
    if(!issue)
        return NextResponse.json({error: 'Issue not found'}, {status: 404})

    const deletedIssue = await prisma.issue.delete({
        where: {
            title: issue.title
        }
    })
    return NextResponse.json(deletedIssue)
}