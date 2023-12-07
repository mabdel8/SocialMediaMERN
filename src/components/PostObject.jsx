import React from "react";
import { Heart, MessageCircle, Bookmark, SendHorizonal } from "lucide-react";
import { GroupObject } from "./MyGroups";

const PostObject = ({ text, author, objurl, objname, likes }) => {
  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
      <div className="p-6">
        <GroupObject urlObj={objurl} groupName={objname} />
        <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit mb-5 ml-4 mt-1">
          {text}
        </p>
        <div className="flex justify-between">
          <div className=" pt-0">
            {/* <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-indigo-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              type="button"
            >
              Like
            </button> */}
            <div className="flex flex-row justify-between gap-4 items-center">
              <div className="flex flex-row items-center gap-2">
                <Heart size={20} /> <span>{likes}</span>
              </div>
              <MessageCircle size={20} />
              <Bookmark size={20} />
            </div>
          </div>
        </div>
              <form action="" className="flex flex-row items-center gap-2">
                  <img
    src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true%27"
    alt=""
    className="w-8 h-8 rounded-full"
  />
          <div className="w-full mb-1 border border-gray-200 rounded-lg bg-gray-50 shadow-md bg-clip-border mt-2 flex flex-row">
            <div className="px-4 py-2 bg-white rounded-lg w-full">
              <label htmlFor="post" className="sr-only">
                What's on your mind...
              </label>
              <div className="flex flex-row gap-4 ">
                <span></span>
                <textarea
                  id="post"
                  rows="1"
                  className="resize-none outline-none w-full px-0  text-gray-900 mt-2 bg-white border-0 block font-sans text-base antialiased font-light leading-relaxed text-inherit"
                  placeholder={`Add A Comment...`}
                                  required
                ></textarea>
              </div>
            </div>
            <div className="flex items-center px-3 py-2 bg-white justify-end rounded-lg">
              <SendHorizonal size={20} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostObject;
