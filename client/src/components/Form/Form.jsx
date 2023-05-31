import axios from 'axios'
import { useState } from 'react'
import style from './Form.module.css'

export default function Form() {
    const validate = ({name, email, phone})=> {
        const errors = {}
        if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name)) setErrors(errors.name='El nombre tener sono letras y espacios')
        if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) setErrors(errors.email='El email debe ser un correo electronico')  
        if(!/^[0-9]+$/.test(phone)) setErrors(errors.phone='El telefono debe contener solo numeros')
        return errors
    }

    const [input, setInput] = useState({
        name: '',
        email: '',
        phone:''
    })

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone:''
    })

    const handlerChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setInput({
            ...input,
            [property] : value
        })
        setErrors(
            validate({
                ...input,
            [property] : value
            })
        )
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        axios.post('http://www.localhost:3001/user', input)
        .then(res => alert(`Se creo el usuariio ${input.name} en la BDD`))
        .catch(err => alert('No se pudo crear el usuario'))
    }

    return (
        <div className={style.container} >
            <form onSubmit={handlerSubmit} >
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" name='name' value={input.name} onChange={handlerChange}  />
                    <span>{errors.name && errors.name}</span>
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name='email' value={input.email} onChange={handlerChange} />
                    <span>{errors.email && errors.email}</span>
                </div>
                <div>
                    <label htmlFor="">Telefono: </label>
                    <input type="text" name='phone' value={input.phone} onChange={handlerChange} />
                    <span>{errors.phone && errors.phone}</span>
                </div>
                <button type='submit' >Enviar</button>
            </form>
        </div>
    )
}