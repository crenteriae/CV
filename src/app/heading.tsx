export default function Heading({text} : {text:string}){
    return(
        <div className="flex pt-3 border-b-2 mr-3">
            <h1 className="text-2xl font-sans font-bold my-2">{text}</h1>
        </div>
    )
}