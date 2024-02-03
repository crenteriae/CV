import Image from "next/image"
import Pic from "./pic"

export default function Header(){
    return(
        <div className="flex flex-row">
            <div>
                <Image
                    src="/1691777148810.jpeg"
                    width={180}
                    height={180}
                    alt="César Rentería"
                    style={{ minWidth: "100px" }}  
                />
            </div>
            <div className="ml-5 font-sans">
                <h1 className="text-4xl font-bold">César Alejandro Rentería Estrada</h1>
                <p>Programador</p>
                <div className="flex mt-5 flex-row flex-wrap">
                    <div  className="flex flex-row items-end mr-5">
                        <Pic 
                            url="/email.png"
                            altText="E-Mail"
                            size={18}
                        />
                        <p className="ml-1 text-base">crenteriaejr@gmail.com</p>
                    </div>
                    <div  className="flex flex-row items-end mr-5">
                        <Pic 
                            url="/telefono.png"
                            altText="Teléfono"
                            size={20}
                        />
                        <p className="ml-1 text-base">686-147-5332</p>
                    </div>
                    <div  className="flex flex-row items-end mr-5">
                        <Pic 
                            url="/direccion.png"
                            altText="Dirección"
                            size={20}
                        />
                        <p className="ml-1 text-base">Mexicali, Baja California</p>
                    </div>
                    <div  className="flex flex-row items-end mr-5">
                        <Pic 
                            url="/linkedin.png"
                            altText="LinkedIn"
                            size={20}
                        />
                        <a href="https://www.linkedin.com/in/c%C3%A9sar-renter%C3%ADa-861848285/" rel="noreferrer">
                            <p className="ml-1 text-base">césar-rentería-861848285</p>
                        </a>
                    </div>
                    <div  className="flex flex-row items-end">
                        <Pic 
                            url="/github.png"
                            altText="GitHub"
                            size={20}
                        />
                        <a href="https://github.com/crenteriae" rel="noreferrer">
                            <p className="ml-1 text-base">crenteriae</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}