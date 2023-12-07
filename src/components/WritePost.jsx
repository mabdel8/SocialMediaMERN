import React from 'react'
import { SendHorizonal } from 'lucide-react'

const WritePost = () => {
    const imagePlace = <img
    src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true%27"
    alt=""
    className="w-10 h-10 rounded-full"
  />
  return (
      <form action="">
          <div className='w-full mb-1 border border-gray-200 rounded-lg bg-gray-50 shadow-md bg-clip-border '>
              <div className='px-4 py-2 bg-white rounded-t-lg '>
                  <label htmlFor="post" className='sr-only'>What's on your mind...</label>
                  <div className='flex flex-row gap-4 '>
                      
                  <span>{ imagePlace }</span><textarea id="post" rows="4" className='resize-none outline-none w-full px-0  text-gray-900 mt-2 bg-white border-0 block font-sans text-base antialiased font-light leading-relaxed text-inherit' placeholder={`What's on your mind...`} required></textarea>
                  </div>
              </div>
              <div className='flex items-center px-3 py-2 bg-white justify-end rounded-lg'>
                  <SendHorizonal size={20} />
              </div>
          </div>
    </form>
  )
}

export default WritePost