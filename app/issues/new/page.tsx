'use client'
import React from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { TextField, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <>
        <div className='p-6 max-w-xl space-y-3'>
            <TextField.Root placeholder="Title">
            </TextField.Root>
            <SimpleMDE placeholder="Description" />
            <Button>Submit New Issue</Button>
        </div>
    </> 
  )
}

export default NewIssuePage