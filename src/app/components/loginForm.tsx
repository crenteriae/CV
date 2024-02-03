import { useState } from "react"
import Link from "next/link"

// import 'bootstrap/dist/css/bootstrap.min.css'

export default function LoginForm() {
    const [password, setPassword] = useState("")
    const [type, setType] = useState('password')

    const handleToggle = () => {
        if(type==='password'){
            setType('text')
        } else {
            setType('password')
        }
    }
    return(
        <div className="mx-3">
            <form className="font-sans p-2">
                <div className="form-group mb-2">
                <label htmlFor="exampleInputEmail1">Correo electrónico</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Correo electrónico"></input>
                <small id="emailHelp" className="form-text text-muted">Tu correo no será compartido con nadie.</small>
                </div>
                {/* --------------------------- */}
                <div className="form-group">
                <label htmlFor="exampleInputPassword1">Contraseña</label>
                <input className="form-control" id="exampleInputPassword1" placeholder="Contraseña"
                    type={type}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className="form-group form-check mb-2">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"
                    onChange={handleToggle}></input>
                <label className="form-check-label" htmlFor="exampleCheck1">Mostrar contraseña</label>
                </div>
                {/* ----------------------------- */}
                <Link href={"/cv"}>
                <button type="submit" className="btn bg-slate-300 hover:bg-slate-400 w-full">Ingresar</button>
                </Link>
            </form>
        </div>
    )
}