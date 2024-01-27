export default function Heading({text} : {text:string}){
    return(
        <div style={{width: '97%'}} className="pt-3 border-b-2 w-full">
            <h1 className="text-2xl font-sans font-bold my-2">{text}</h1>
        </div>
    )
}