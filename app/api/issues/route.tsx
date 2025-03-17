import { NextRequest, NextResponse } from "next/server"
import { createIssueSchema } from "@/app/validationSchemas"
import { prisma } from '@/prisma/client'

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = createIssueSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.format(), {status: 400})

    const issue = await prisma.issue.findUnique({
        where: {
            title: body.title,
            description: body.description
        }
    })
    if(issue)
        return NextResponse.json({error: "Issue already exists"}, {status: 400})

    const newIssue = prisma.issue.create({
        data: {
            
            title: body.title,
            description: body.description
        }
    })

    return NextResponse.json(newIssue, {status: 201})
}


