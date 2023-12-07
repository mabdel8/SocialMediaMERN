import React from 'react'
import { MoreHorizontal } from 'lucide-react'

const MyGroups = () => {
  return (
      <div className="relative bg-white shadow-md bg-clip-border rounded-xl py-2 px-6 mt-6 mr-2">
          <div className='flex flex-row justify-between mb-10'>
              <p className="font-sans text-lg antialiased font-normal leading-relaxed text-inherit">My Groups</p>
              <MoreHorizontal size={20} />
          </div>
          <div>
              <GroupObject urlObj={"https://ui-avatars.com/api/?background=7F00FF&color=fff&name=moe+Abd"} groupName={"Coding Study Group"} story />
              <GroupObject urlObj={"https://ui-avatars.com/api/?background=9F2B68&color=fff&name=Allan+Po"} groupName={"Study session"} />
              <GroupObject urlObj={"https://ui-avatars.com/api/?background=E30B5C&color=fff&name=Jeremy+Lin"} groupName={"Calculus Study"} />
              <GroupObject urlObj={"https://techcrunch.com/wp-content/uploads/2015/04/codecode.jpg?w=680"} groupName={"Coding Tutor"} story />
          </div>

    </div>
  )
}

export function GroupObject({urlObj, groupName, story}){
    return (
        <div className="flex flex-row mt-4 items-center gap-2">
            <img
                src={urlObj}
                alt=""
                className={`w-10 h-10 rounded-full ${story && "border-2 border-green-500"}`}
            />
            <p className='font-sans text-sm antialiased font-bold leading-relaxed text-inherit'>{ groupName }</p>
        </div>
    )
}

export default MyGroups