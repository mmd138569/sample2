'use client';

import {useFormState} from "react-dom";
import * as actions from '@/actions'

function SnippetCreatepage(){
   const [formState,action]= useFormState(actions.createSnippet,{message:''});
    return (
      <form action={action}>
          <h3 className='font-bold m-3'>Create a Snippet</h3>
          <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                  <label className='w-12' htmlFor='title'>title</label>
                  <input name='title' id='title' className='border rounded p-2 w-full'/>
              </div>
              <div className='flex gap-4'>
                  <label className='w-12' htmlFor='code'>code</label>
                  <textarea name='code' id='code' className='border rounded p-2 w-full'/>
              </div>
              {
                  formState.message ?<div className='my-2 p-2 bg-red-200 rounded'>{formState.message}</div>:null
              }
              <button type='submit' className='rounded p-2 bg-blue-200'>
                  create
              </button>
          </div>
      </form>
    );
}
export default SnippetCreatepage;