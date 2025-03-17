'use client'
import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, Button, Callout, Text } from "@radix-ui/themes";
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
import { useRouter } from "next/navigation";
import { zodResolver } from '@hookform/resolvers/zod'
import { createIssueSchema } from "@/app/validationSchemas";
import { z } from 'zod'
import Loading from "@/app/loading";
 
type IssueForm = z.infer<typeof createIssueSchema>


const NewIssuePage = () => {

  const {register, control, handleSubmit, formState: { errors }} = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  })

  const router = useRouter()

  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmitting(true)
      await axios.post('/api/issues', data)
      router.push('/issues')
    } catch (error) {
      setIsSubmitting(false)
      setError('An unexpected error occurred.')
    }
  })

  return (
    <div className="p-6 max-w-xl">
      {error && (
        <Callout.Root className="mb-5" color="red">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form 
        className='space-y-3' 
        onSubmit={onSubmit}>
          <TextField.Root placeholder="Title" {...register("title")}>
          </TextField.Root>
          {errors.title && <Text color="red" as="p">{errors.title.message}</Text>}
          <Controller 
            name="description"
            control={control} 
            render={({field}) => <SimpleMDE placeholder="Description" {...field}/>}/>
          
          {errors.description && <Text  color="red" as="p">{errors.description.message?.toLocaleLowerCase()}</Text>}
          <Button disabled={isSubmitting}>Submit New Issue {isSubmitting && <Loading />}</Button>
      </form>
    </div> 
  )
}

export default NewIssuePage