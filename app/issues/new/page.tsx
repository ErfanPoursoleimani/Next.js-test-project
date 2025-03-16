
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { TextField, TextArea, Button } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <>
        <div className='p-6 max-w-xl space-y-3'>
            {/* <div className='flex flex-col'>
                <input className='p-1.5 mb-2  border-1 border-gray-400 rounded-md' type="text" placeholder='Title' />
                <input className='p-1.5 pb-7 mb-3.5  border-1 border-gray-400 rounded-md' type="text" placeholder='Description' />
                <SimpleMDE placeholder="Description" />
                <button className='rounded-md bg-black p-3 hover:cursor-pointer text-white' type='submit'>Submit New Issue</button>
            </div> */}
            <TextField.Root placeholder="Title">
            </TextField.Root>
            <TextArea placeholder="Reply to comment…" />
            <Button>Submit New Issue</Button>
        </div>
    </> 
  )
}

export default NewIssuePage