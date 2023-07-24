import Image from 'next/image'
import man from '../public/man.jpeg'

function Avatar ({ url, online }) {
  return (
    <div className='flex relative'>
      <img src={url} className='h-12 w-12 bg-cover rounded-full' alt='' />
      {online ? (
        <div className='w-4 h-4 flex rounded-full justify-center items-center bg-white absolute left-7'>
          <div className='h-[10px] w-[10px] bg-green-500 rounded-full' />
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Avatar