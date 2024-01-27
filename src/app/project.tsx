import Icon from "./pic"

export default function Proyecto({titulo, comp, items} : {titulo:string, comp:string, items: string[]}){
    return(
        <div className="my-2 w-11/12">
            <h2 className="font-sans italic font-bold">{titulo}</h2>
            <h3 className="font-sans italic mb-1">{comp}</h3>
            <ul className="font-sans text-sm mt-1 list-disc">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}