import disney from '../assets/Images/disney.png'
import marvel from '../assets/Images/marvel.png'
import nationalG from '../assets/Images/nationalG.png'
import pixar from '../assets/Images/pixar.png'
import starwar from '../assets/Images/starwar.png'

import disneyV from '../assets/Videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import nationalGeographicV from '../assets/Videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'


const Production = () => {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starwarV
        },
        {
            id:5,
            image:nationalG,
            video:nationalGeographicV
        },

    ]
  return (
    <div className='flex gap-5 p-5 px-5 md:px-15'>
        {productionHouseList.map((item)=>(
            <div key={item.id} className='border-[2px] rounded-lg border-gray-400 overflow-hidden relative hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800'>

                <video src={item.video} autoPlay loop playsInline className='absolute left-0 top-0 opacity-0 rounded-lg z-0 hover:opacity-50'/>
                <img src={item.image} className='w-full z-[1]'/>
                
            </div>
        ))}
    </div>
  )
}

export default Production
