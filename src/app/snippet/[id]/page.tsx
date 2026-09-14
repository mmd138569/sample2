import {db} from '@/db'
import {notFound} from "next/navigation";

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

    return (
        <div>
            {Snippet.title}
        </div>
    );
}
