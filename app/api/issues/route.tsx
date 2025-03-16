import { NextRequest, NextResponse } from "next/server"
import createIssueSchema from "./schema"
import { prisma } from '@/prisma/client'


export function GET(resquest: NextRequest) {
    const issues = prisma.issue.findMany()
    return NextResponse.json(issues)
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400})

    const issue = await prisma.issue.findUnique({
        where: {
            title: body.title
        }
    })
    if(issue)
        return NextResponse.json({error: "User already exists"}, {status: 400})

    const newIssue = prisma.issue.create({
        data: {
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newIssue, {status: 201})
}


