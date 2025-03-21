import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

interface Props {
    params: {id: number}
}

const UserDetailPage = ({ params: {id} } : Props) => {
    if(id > 10) notFound()
    return (
        <Link href={`./${id}/photos`}>
            User Photos
        </Link>
    )
}

export default UserDetailPage