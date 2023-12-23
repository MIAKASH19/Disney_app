import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div className="">
      {GenresList.genere.map((item, index)=> index<=4&&(
            <div key={item.id} className="p-7 md:px-8  px-10 ">
                <h2 className='text-white text-[20px] font-bold'>{item.name}</h2>
                <MovieList genre={item.id} index_={index}/>
            </div>
      ))}
    </div>
  )
}

export default GenreMovieList
