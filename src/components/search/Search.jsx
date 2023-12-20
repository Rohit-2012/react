
import { useContext } from 'react'
import style from './Search.module.css'
import {Context} from '../GlobalContext'

const Search = () => {
 const {searchParams, handleInputChange, handleSearch} = useContext(Context)
  return (
    <div className={style.search_container}>
      <input type="text" value={searchParams} placeholder='Enter movie name...' role='search' onChange={handleInputChange}/>
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
