import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import style from './Cards.module.css'

export default function Cards() {

const users = useSelector(state => state.users)
     
    return (
        <div className={style.container} >
            {
                users.map(user => {
                    return <Card 
                    key = {user.id}
                    id = {user.id}
                    name = {user.name}
                    email = {user.email}
                    phone = {user.phone}
                    />
                })
            }
        </div>
    )
}