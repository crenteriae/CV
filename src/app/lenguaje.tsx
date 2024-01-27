export default function Lenguaje({lenguaje, prof} : {lenguaje:string, prof:string}){
    return(
        <div className="flex flex-row my-1">
            <p className="w-3/12 font-sans text-sm italic font-bold">{lenguaje}</p>
            <p className="font-sans text-sm">{prof}</p>
        </div>
    )
}