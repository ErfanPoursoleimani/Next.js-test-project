import Image from 'next/image'
import Link from 'next/link'
import React, { Suspense } from 'react'


const PhotosPage = () => {
    interface Photo {
        url: any,
        id: any,
    }
    const photos: Photo[] = [
        {id: 1, url: 'https://picsum.photos/270/180'},
        {id: 2, url: 'https://picsum.photos/270/180'},
        {id: 3, url: 'https://picsum.photos/270/180'},
        {id: 4, url: 'https://picsum.photos/270/180'},
    ]
  return (
    <>
        <h1>User Photos</h1>
        <ul className='flex flex-wrap'>
            <Suspense fallback={'@/app/loading'}>
                {photos.map(photo => (
                    <li key={photo.id}>
                        <Link href={`./photos/${photo.id}`}>
                            <Image 
                             src={photo.url}
                             alt='Users photo' 
                             width={270} 
                             height={180}
                             quality={100}
                             priority 
                            />
                        </Link>
                    </li>
                ))}
            </Suspense>
        </ul>
    </>
  )
}

export default PhotosPage