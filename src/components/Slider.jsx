import { useEffect, useRef, useState } from "react"
import GlobalApi from "../Services/GlobalApi"
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'


const screenWidth = window.innerWidth
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
function Slider() {

    const [movieList, setMovieList] = useState([])

    const elementRef = useRef();

    useEffect(()=>{
        getTrendingMovies();
    },[])

    const getTrendingMovies = ()=>{
        GlobalApi.getTrendingVideos.then(resp=>{
            setMovieList(resp.data.results)
        }).catch(error =>{
          console.error("Error while fetching data", error)
        })
    }

    const sliderRight = (element)=>{
      element.scrollLeft += screenWidth - 500;
    }
    const sliderLeft = (element)=>{
      element.scrollLeft -= screenWidth - 500;
    }

  return (
    <div className="ml-5 ">
      <HiChevronLeft className="hidden md:block text-white absolute text-[40px] mx-3 mt-[165px] cursor-pointer" onClick={()=>sliderLeft(elementRef.current)}/>

      <HiChevronRight className="hidden md:block text-white absolute text-[40px] mx-3 mt-[165px] cursor-pointer right-0" onClick={()=>sliderRight(elementRef.current)}/>

        <div className="flex overflow-x-auto w-full px-1 py-4 scrollbar-none scroll-smooth" ref={elementRef}>
        {movieList.map((item)=>(
          <img key={item.id} src={IMAGE_BASE_URL+item.backdrop_path} className="sm:min-w-[800px] min-w-[330px] sm:h-[350px] h-[200px] object-cover object-left-top mr-5 rounded-md hover:border-[3px] border-white transition-all duration-100 ease-in-out"/>
        ))}
      </div>
    </div>
  )
}

export default Slider
