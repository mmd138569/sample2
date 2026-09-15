'use client';

import type {snippet} from '@/generated/prisma/client';
import {Editor} from "@monaco-editor/react";
import {useState} from "react";
import * as actions from '@/actions'

interface SnippetEditFormProps{
    Snippet: snippet;
}

export default function SnippetEditForm({Snippet}: SnippetEditFormProps){
    const [code,setCode]=useState(Snippet.code);
    const handleEditorChange = (value: string="") => {
        setCode(value);
    };
    const editSnippetAction=actions.editSnippet.bind(null,Snippet.id,code)
    return(
        <div>
            <Editor
               height='40vh'
               options={{minimap:{enabled:false}}}
               onChange={handleEditorChange}
               theme="vs-dark"
               language='JavaScript'
               defaultValue={Snippet.code}/>
            <form action={editSnippetAction}>
                <button type='submit' className='p-2 border rounded'>
                    Save
                </button>
            </form>
        </div>);
}