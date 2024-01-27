import Image from "next/image";

export default function Pic({url, altText, size} : {url:string, altText:string, size:number}) {
    return(
        <div style={{ position: "relative", width: `${size}px`, height: `${size}px` }}>
            <Image
                src={url}
                alt={altText}
                fill
                style={{ objectFit: "contain" }}
            />
        </div>
    )
}