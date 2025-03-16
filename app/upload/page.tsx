'use client'
import React, { useState } from 'react'
import { CldUploadWidget, CldImage} from 'next-cloudinary'




const UploadPage = () => {

  return (
    <>
      <CldUploadWidget 
        uploadPreset='myNextApp'
        options={{
          sources: ['local']
        }}
        >
          {({open}) => <button className='btn btn-primary' onClick={() => open()}>Upload</button>}
      </CldUploadWidget>
    </>
  )
}

export default UploadPage