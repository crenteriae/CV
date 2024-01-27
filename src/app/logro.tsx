export default function Logro({titulo, text} : {titulo:string, text:string}){
    return(
        <div className="my-2">
            <h2 className="font-sans italic font-bold">{titulo}</h2>
            <p className="font-sans text-sm">{text}</p>
        </div>
    )
}