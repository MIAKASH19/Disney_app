
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";

// eslint-disable-next-line react/prop-types
const HrMovieCard = ({movie}) => {
  return (
    <section className="hover:scale-110 transition-all duration-150 ease-in">
      <img src={IMAGE_BASE_URL+movie.backdrop_path} className="w-[120px] md:w-[210px] rounded-lg hover:border-[3px] border-gray-300  cursor-pointer" />
      <h2 className="w-[120px] md:w-[200px] mt-2">{movie.title}</h2>
    </section>
  )
}

export default HrMovieCard
