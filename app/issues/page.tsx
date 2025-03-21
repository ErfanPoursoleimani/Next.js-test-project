
import { Table } from '@radix-ui/themes'
import Link from '../components/Link'
import React from 'react'
import { prisma } from '@/prisma/client'
import IssueStatusBadge from './IssueStatusBadge'
import delay from 'delay'
import IssueActions from './IssueActions'

const IssuesPage = async () => {

  const issues = await prisma.issue.findMany()

  return (
    <>
      <IssueActions />
      <Table.Root variant='surface'>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className='hidden md:table-cell'>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map(issue => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <span className='md:hidden ml-4'>
                  <IssueStatusBadge status={issue.status}/>
                </span>
              </Table.Cell>
              <Table.Cell className='hidden md:table-cell'><IssueStatusBadge status={issue.status}/></Table.Cell>
              <Table.Cell className='hidden md:table-cell'>{issue.createdAt.toDateString()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  )
}

export default IssuesPage