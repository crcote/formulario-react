import Registro from "./components/Registro";
import { useState } from "react";
function App() {
  const [error, setError] = useState();
  const [errorMail, setErrorMail] = useState();
  const [errorPassword, setErrorPassword] = useState(); //Los estados se inicializan en undefined para que se evite mostrar el menaje de registro exitoso antes de que el formulario sea valido

  return (
    <>
      <div className="BodyBox d-flex justify-content-center mt-5">
        <div className="PrincipalBox d-grid border border-3 border-dark rounded-4 p-4">
          <Registro
            setError={setError}
            error={error}
            setErrorMail={setErrorMail}
            errorMail={errorMail}
            setErrorPassword={setErrorPassword}
            errorPassword={errorPassword}
          />
        </div>
      </div>
    </>
  );
}

export default App;
