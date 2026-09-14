import {redirect} from "next/navigation";
import {db} from '@/db'

function snippetCreatepage(){
    async  function createsnippet(formData:FormData){
        'use server'

        const title =formData.get('title') as string;
        const code =formData.get('code') as string;

        const Snippet=await db.snippet.create({
            data:{
                title:title,
                code:code
            }
        });
        console.log(Snippet);
        redirect('/');
    }
    return (
      <form action={createsnippet}>
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
              <button type='submit' className='rounded p-2 bg-blue-200'>
                  create
              </button>
          </div>
      </form>
    );
}
export default snippetCreatepage;