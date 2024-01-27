import Pic from "./pic"
export default function Educacion({titulo, uni, fecha} : {titulo:string, uni:string, fecha:string}){
    return(
        <div className="my-2">
            <h2 className="font-sans italic font-bold">{titulo}</h2>
            <h3 className="font-sans italic mb-1">{uni}</h3>
            <div className="flex flex-row">
                <div  className="flex flex-row items-end">
                    <Pic
                        url="/fecha.png"
                        altText="Fecha"
                        size={20}
                    />
                    <p className="font-sans text-sm ml-1">{fecha}</p>
                </div>
            </div>
        </div>
    )
}