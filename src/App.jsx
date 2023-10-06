import Registro from "./components/Registro"
import { useState } from "react"
function App() {
  
  const [error, setError] = useState(false);
  const [errorMail, setErrorMail] = useState(false);
  const [errorPassword, setErrorPassword] = useState (false);
  
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
