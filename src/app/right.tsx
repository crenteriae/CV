import Heading from "./heading"
import Logro from "./logro"
import Lenguaje from "./lenguaje"
import Educacion from "./education"

export default function RightPane(){
    return(
        <>
            <Heading
                text="Logros"
            />
            <Logro
                titulo="MediHacks"
                text="Junto con dos de mis compañeros de clase, ganamos el segundo lugar en el concurso MediHacks 2023. Logramos esto a través del desarrollo de Equilibrium, una aplicación móvil programada en React Native."
            />
            <Logro
                titulo="Beca"
                text="Debido a mi rendimiento sobresaliente en el exámen de admisión de CETYS Universidad (obteniendo la calificación más alta de mi generación), disfruto de una beca del 100% para mis estudios en esta institución."
            />
            <Heading
                text="Lenguajes"
            />
            <Lenguaje
                lenguaje="Inglés"
                prof="Nativo/Bilingüe"
            />
            <Lenguaje
                lenguaje="Español"
                prof="Nativo/Bilingüe"
            />
            <Heading
                text="Educación"
            />
            <Educacion
                titulo="Licenciatura en Administración"
                uni="City University of Seattle"
                fecha="Agosto 2022 - Junio 2025"
            />
            <Educacion
                titulo="Ingeniería en Ciencias Computacionales"
                uni="CETYS Universidad"
                fecha="Agosto 2021 - Junio 2025"
            />
        </>
    )
}