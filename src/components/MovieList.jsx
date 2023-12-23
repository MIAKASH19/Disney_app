import { useEffect, useRef, useState } from 'react'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'
import GlobalApi from '../Services/GlobalApi'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

// eslint-disable-next-line react/prop-types
const MovieList = ({genre, index_}) => {

    const [movieList, setMovieList] = useState([])
    const elementRef = useRef(null)

    useEffect(()=>{
        getMovieByGenreId()
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genre).then((resp)=>{
            setMovieList(resp.data.results);
        })
    }

    const slideRight=((element)=>{
        element.scrollLeft += 800;
    })
    const slideLeft=((element)=>{
        element.scrollLeft -= 800;
    })
  return (
    <div>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} className={`text-[50px] text-white z-10 cursor-pointer hidden md:block absolute ${index_%3==0? 'mt-[55px]':'mt-[150px]'}`} />

        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className={`text-[50px] text-white z-10 cursor-pointer hidden md:block absolute right-[25px] ${index_%3==0? 'mt-[55px]':'mt-[150px]'}`} />
        
            <div className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth' ref={elementRef}>
                {movieList.map((item)=>(
                <>
                {index_%3==0? <HrMovieCard key={item.id} movie={item}/> : <MovieCard key={item.id} movie={item}/>}
                </>
            ))}
        </div>
        
    </div>
  )
}

export default MovieList
