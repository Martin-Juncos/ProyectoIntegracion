import style from './Card.module.css'
import {Link} from 'react-router-dom'

export default function Card(props) {
    const {id, name, email, phone} = props


    return (
        <div key={id} className={style.container} >
            <Link to= {`/detail/${id}`} >
            <h3>{name}</h3>
            </Link>
            <h5>{email}</h5>
            <h5>{phone}</h5>
        </div>
    )
}