import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

function Registro({
  error,
  setError,
  setErrorMail,
  errorMail,
  setErrorPassword,
  errorPassword,
}) {
  return (
    <>
      <h2 className="text-white" style={{ textAlign: "center" }}>
        Crea una cuenta
      </h2>
      <SocialButton
        primerIcono="fa-facebook"
        segundoIcono="fa-github"
        tercerIcono="fa-instagram"
      />
      <p className="d-flex justify-content-center text-white">
        {" "}
        O usa tu email para registrarte{" "}
      </p>
      <Formulario
        setError={setError}
        setErrorMail={setErrorMail}
        setErrorPassword={setErrorPassword}
      />
      {error ? (
        <Alert message="Completa todos los campos" color="danger" />
      ) : null}
      {errorMail && !error ? (
        <Alert message="Formato mail incorrecto" color="danger" />
      ) : null}
      {errorPassword && !error ? (
        <Alert message="Contraseñas no coinciden" color="danger" />
      ) : null}
      {error == false && errorMail == false && errorPassword == false ? (
        <Alert message="Registro Exitoso" color="success" />
      ) : null}
    </>
  );
}

export default Registro;
