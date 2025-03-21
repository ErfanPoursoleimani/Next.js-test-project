'use client'
import Loading from "@/app/loading";
import { createIssueSchema } from "@/app/validationSchemas";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import axios from 'axios';
import delay from "delay";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from 'react-hook-form';
import dynamic from "next/dynamic";
import { z } from 'zod';
 
type IssueForm = z.infer<typeof createIssueSchema>

const SimpleMDE = dynamic(
  () => import('react-simplemde-editor'),
  {ssr: false})

const NewIssuePage = async () => {
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