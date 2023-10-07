import Registro from "./components/Registro"
import { useState } from "react"
function App() {
  
  const [error, setError] = useState();
  const [errorMail, setErrorMail] = useState();
  const [errorPassword, setErrorPassword] = useState (); //Los estados se inicializan en undefined para que se evite mostrar el menaje de registro exitoso antes de que el formulario sea valido
  
  return (
    <>
      <Registro 
        setError={setError} 
        error={error} 
        setErrorMail={setErrorMail} 
        errorMail={errorMail} 
        setErrorPassword={setErrorPassword} 
        errorPassword={errorPassword}
      />      
    </>
  )
}

export default App
