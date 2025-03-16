import React from 'react'


interface Props {
  params: {id: any, photoId: number}
}

const PhotosPage = ({ params: { photoId } }: Props) => {
  return (
    <>
      <h1>Photo No. {photoId} </h1>
    </>
  )
}

export default PhotosPage