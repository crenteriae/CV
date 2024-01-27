import Icon from "./pic"

export default function Experiencia({titulo, comp, fecha, items} : {titulo:string, comp:string, fecha:string, items: string[]}){
    return(
        <div className="my-2">
            <h2 className="font-sans italic font-bold">{titulo}</h2>
            <h3 className="font-sans italic mb-1">{comp}</h3>
            <div className="flex flex-row">
                <div  className="flex flex-row items-end w-4/12">
                    <Icon
                        url="/fecha.png"
                        altText="Fecha"
                        size={20}
                    />
                    <p className="font-sans text-sm ml-1">{fecha}</p>
                </div>
                <div  className="flex flex-row items-end">
                    <Icon
                        url="/pin.png"
                        altText="Localización"
                        size={20}
                    />
                    <p className="font-sans text-sm">Mexicali, Baja California</p>
                </div>
            </div>
            <ul className="font-sans text-sm mt-1 list-disc">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}