import {db} from '@/db'
import {notFound} from "next/navigation";
import Link from "next/link";
import * as actions from '@/actions'

interface ShowPagesProps{
    params:{
        id:string
    }
}
export default async function SnippetSHowPages(props:ShowPagesProps){
    await new Promise(resolve=>setTimeout(resolve,2000))
    const Params = await props.params;
    if (!/^\d+$/.test(Params.id)) {
        return notFound();
    }
    const Snippet=await db.snippet.findFirst({
       where:{id: parseInt(Params.id)}
    });
    if(!Snippet){
       return notFound();
    }
    const deleteSnippetAction= actions.deleteSnippet.bind(null,Snippet.id);

    return (
        <div>
            <div className="flex m-4 justify-between items-center">
                <h1 className="text-xl font-bold">
                    {Snippet.title}
                </h1>
                <div className='flex gap-4'>
                    <Link href={`/snippet/${Snippet.id}/edit`} className="p-2 border rounded gap-2 border-gray-300">Edit</Link>
                    <form action={deleteSnippetAction}>
                        <button className="p-2 border rounded border-gray-300">Delete</button>
                    </form>
                </div>
            </div>
            <pre className="p-3 border rounded border-gray-200 bg-gray-200">
                <code>
                    {Snippet.code}
                </code>
            </pre>
        </div>
    );
}
