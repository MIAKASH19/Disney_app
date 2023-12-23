
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
// eslint-disable-next-line react/prop-types
const MovieCard = ({movie}) => {
  return (
    <>
      <img src={IMAGE_BASE_URL+movie.poster_path} className="w-[120px] md:w-[210px] rounded-lg hover:border-[3px] border-gray-300 hover:scale-110 transition-all duration-150 ease-in cursor-pointer" />
    </>
  )
}

export default MovieCard
