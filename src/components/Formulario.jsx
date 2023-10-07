import React from 'react'
import { useState } from 'react'

const Formulario = ({setError, setErrorPassword, setErrorMail}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')


    const onSubmit= (event) => {
        event.preventDefault()
        validateEmail();
        validatePassword();
        validateRegister();
    };
    const validateEmail= () => {
        if ( !(email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)) ){
            setErrorMail(true);
            return;
        }
        setErrorMail(false);
    }
    const validatePassword= () => {
        if (password != confirmPassword) {
            setErrorPassword(true);
            return;
        }
        setErrorPassword(false);
    }

    const validateRegister = () => {
        if (email == '' || name == '' || password == '' || confirmPassword ==''){
            setError(true);
            return;
        }
        setError(false);
    }

    return (
        <form onSubmit= {onSubmit}>
            <div className="form-group">
                <input
                className="form-control mb-3" 
                type="text"
                placeholder="Nombre" 
                value= {name}
                onChange= {(event) => setName(event.target.value)}
                />

                <input 
                className="form-control mb-3" 
                type="text"
                placeholder="tuemail@ejemplo.com" 
                value= {email}
                onChange= {(event) => setEmail(event.target.value)}
                />
                
                <input 
                className="form-control mb-3" 
                type="password"
                placeholder="Contraseña" 
                value= {password}
                onChange= {(event) => setPassword(event.target.value)}
                />

                <input 
                className="form-control mb-3" 
                type="password"
                placeholder="Confirma tu contraseña" 
                value= {confirmPassword}
                onChange= {(event) => setConfirmPassword(event.target.value)}
                />
                
                <button className="btn btn-success col-12" type="submit"> Registrarse </button>
            </div>
            
        </form>

    )

}

export default Formulario;