/* eslint-disable react/prop-types */
import {GrLocation} from 'react-icons/gr'

const OfficeCards = ({place,location,img}) => {
    return ( <>
    
    <div className='pl-[30px] flex flex-col gap-[50px]'>
        <div>
            <div className='w-[250px] h-[250px] md:w-[590px] md:h-[590px]'><img src={img} alt="" /></div>
            <div className='-mt-[50px] md:-mt-[120px] flex flex-col gap-[5px] hover:text-[#5135ff]' >
                <div className='flex gap-[10px]'>
                    <div ><GrLocation className='text-[24px] text-gray-300 '/></div>
                    <div className='text-[24px]  font-bold -mt-[5px] hover:text-[#5135ff]'>{place}</div>
                </div>
                <div className='text-[16px] text-[#626262] ml-[32px] hover:text-[#5135ff]'>{location}</div>
            </div>
        </div>
        
    </div>
    
    </> );
}
 
export default  OfficeCards;