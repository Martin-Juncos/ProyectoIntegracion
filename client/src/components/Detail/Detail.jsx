import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import style from './Detail.module.css'
import {getUserById} from '../../redux/actions'

export default function Detail() {
    const {id} = useParams()
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(()=>{
        dispatch(getUserById(id))
    }, [dispatch, id])

    return (
        <div className={style.container} >
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
            <h3>{user.phone}</h3>
        </div>
    )
}