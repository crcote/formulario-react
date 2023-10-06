import Formulario from "./Formulario"
import SocialButton from "./SocialButton";
import Alert from "./Alert";

function Registro({error,setError,setErrorMail,errorMail,setErrorPassword,errorPassword}) {

    return (
    <>
        <h2 style={{textAlign: "center"}}>Crea una cuenta</h2>
        <SocialButton />
        <p> O usa tu email para registrarte </p>
        <Formulario />
    </>
    )
}

export default Registro