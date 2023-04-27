import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from "../../Components/axios"
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      const randomIndex = Math.floor(Math.random() * response.data.results.length);
      console.log(response.data.results[randomIndex])

      setMovie(response.data.results[randomIndex])
    })
  
    
  }, [])
   
  const onPlayMovie=()=>{

  }

  const onShowList=()=>{
    
  }
  
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:''}</h1>
            <div className='banner_buttons'>
                <button onClick={onPlayMovie} className='button'>
                  Play
                  </button>
                <button onClick={onShowList} className='button'>My List</button>
            </div>
            <h1 className='description'>{movie?movie.overview:''}</h1>

        </div>
        <div className="fade_bottom">
          
        </div>

    </div>
  )
}

export default Banner