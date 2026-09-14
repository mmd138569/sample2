interface SnippetEditPageProps {
    params:{
        id:string;
    };
}

export default async function SnippetEditPage(props: SnippetEditPageProps){
    // you should await to until the Props get the value if we remove the async and await the id is NaN
    const Props=await props.params;
    const id= parseInt(Props.id);
    return(
        <div>
            Editing snippet with id {id}
        </div>
    );
}