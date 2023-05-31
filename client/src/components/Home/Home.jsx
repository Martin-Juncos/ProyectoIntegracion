import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Cards, SearchBar} from '../index'
import style from './Home.module.css'
import { getUserByNme, getUsers } from '../../redux/actions'

export default function Home() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    const [search, setSearch] = useState('')

    const handlerChange = (name) => {
        setSearch(name)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        dispatch(getUserByNme(search))
    }

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])


    return (
        <div className={style.container} >
            <SearchBar handlerChange={handlerChange} handlerSubmit={handlerSubmit} />
            <Cards users={users} />
        </div>
    )
}