import Formulario from "./Formulario"
import SocialButton from "./SocialButton";
import Alert from "./Alert";

function Registro({error,setError,setErrorMail,errorMail,setErrorPassword,errorPassword}) {

    return (
    <>
        <h2 style={{textAlign: "center"}}>Crea una cuenta</h2>
        <SocialButton primerIcono="fa-facebook" segundoIcono="fa-github"  tercerIcono="fa-instagram"/>
        <p> O usa tu email para registrarte </p>
        <Formulario setError={setError} setErrorMail={setErrorMail} setErrorPassword={setErrorPassword} />
    </>
    )
}

export default Registro