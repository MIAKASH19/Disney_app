/* eslint-disable no-unused-vars */
import logo from '../assets/Images/logo.png'
import { HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv } from 'react-icons/hi2'
import { HiDotsVertical, HiPlus } from 'react-icons/hi'
import Headeritem from './Headeritem'
import { useState } from 'react'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return <div className='flex justify-between items-center p-5'>
  <div className='flex items-center gap-8'>
    <img src={logo} alt="logo_disney" className='w-[80px] object-cover md:w-[125px]'/>

    <div className='hidden md:flex gap-8 '>
        {menu.map((item)=>(
        <Headeritem key={item.name} name={item.name} Icon={item.icon}/>
        ))}
    </div>

    <div className='flex md:hidden gap-4'>
        {menu.map((item,index)=>index<3&&(
        <Headeritem key={item.name} name={""} Icon={item.icon}/>
        ))}
        <div className='md:hiddenn' onClick={()=> setToggle(!toggle)}>
            <Headeritem name={""} Icon={HiDotsVertical}/>
            {toggle ? <div className='absolute mt-3 border-gray-700 bg-black border-[1px] p-5 px-5 rounded-lg'>
                {menu.map((item,index)=>index>2&&(
                <Headeritem key={item.name} name={item.name} Icon={item.icon}/>
                ))}
            </div> : null}
        </div>
    </div>


  </div>

    <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
    className='w-[40px] rounded-full'/>
</div>
}

export default Header
