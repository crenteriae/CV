import Heading from "./heading"
import Experiencia from "./expitem"
import Proyecto from "./project"

export default function LeftPane(){
    const hybris = ["Asistente del desarrollo de una plataforma de comercio electrónico SAP Commerce",
                    "Seguimiento del manual de capacitación de SAP"]
    const trad = ["Encargado de la traducción de fichas técnicas dirigidas a clientes internacionales",
                "Actualización de base de datos interna"]
    return(
        <>
            <Heading 
                text="Experiencia"
            />
            <Experiencia 
                titulo="Hybris Developer Intern"
                comp="Collins Aerospace"
                fecha="Septiembre 2023 - Actual"
                items={hybris}
            />
            <Experiencia 
                titulo="Traductor"
                comp="Procesadora y Empacadora de Carnes del Norte S.A. de C.V."
                fecha="Junio 2021 - Diciembre 2021"
                items={trad}
            />
            <Heading 
                text="Proyectos"
            />
            <Proyecto
                titulo="Fox Coding"
                comp="CETYS Universidad"
                items={["Fox Coding es el equipo de programación de CETYS Universidad. Participo activamente como contribuidor a sus actividades."]}
            />
            <Proyecto
                titulo="Base de datos"
                comp="CETYS Universidad"
                items={["Diseño e implementación de una solución de base de datos para un servicio de entregas utilizando Azure Databases, SQL Server y C# .NET Winforms."]}
            />
        </>
    )
}