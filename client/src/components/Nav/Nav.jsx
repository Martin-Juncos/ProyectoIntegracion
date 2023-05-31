import { Link } from 'react-router-dom'
import style from './Nav.module.css'
export default function Nav() {
    return (
        <div className={style.container} >
            <Link to='/home' >Home</Link>
            <Link to='/form' >Form</Link>
        </div>
    )
}