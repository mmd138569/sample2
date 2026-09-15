import {db} from '@/db'
import {notFound} from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPageProps {
    params:{
        id:string;
    };
}

export default async function SnippetEditPage(props: SnippetEditPageProps){
    // you should await to until the Props get the value if we remove the async and await the id is NaN
    const Props=await props.params;
    const id= parseInt(Props.id);
    const snippet =await db.snippet.findFirst({
        where:{id:id}
    });
    if(!snippet){
       return notFound();
    }
    return(
        <SnippetEditForm Snippet={snippet}/>
    );
}