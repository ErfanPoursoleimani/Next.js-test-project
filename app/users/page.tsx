
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';
import React, { ReactNode, Suspense } from 'react';
import { sort } from 'fast-sort';
import { Metadata } from 'next';

interface Props {
    searchParams: {sortOrder: string}
}
const Page = async ({searchParams: { sortOrder }}: Props) => {
    
    // fetching data 

    const res = await fetch('https://jsonplaceholder.typicode.com/users', 
        { cache: "no-store", next: {revalidate: 10} }
    )
    interface User {
        name: String,
        email: String,
        href: Url,
        id: any
    }
    const users: User[] = await res.json()

    // adding href proprty to each user object,
    //  so that we can than use it in <Link href={user.href}> 

    users.map(user => {
        user["href"] = `./users/${user.id}`
    })

    // Sorting users array based on name propery  
    // using fast-sort library

    const sortedUsers = sort(users).asc([
        sortOrder == 'email'?
        u => u.email:
        u => u.name
        
      ]);
      

  return (
    <div>
        <h1 className='mb-5 flex space-x-3'>
            soring order: &nbsp;
            <Link href="./users?sortOrder=name">
                Name
            </Link>
            <Link href="./users?sortOrder=email">
                Email
            </Link>
        </h1>
        <ul>
            <Suspense fallback='@/app/loading'>
                {sortedUsers.map(user => (
                    <li key={user.id}>
                        <Link href={user.href}>
                            {user.name}-----{user.email}
                        </Link>
                    </li>
                ))}
            </Suspense>
        </ul>
    </div>
  )
}

export default Page

export const metadata: Metadata = {
    title: "users"
}