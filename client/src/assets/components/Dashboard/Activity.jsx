import React from 'react'

function Activity() {
  return (
    <div>
      <div className="bg-base-100 md:flex flex-col p-4 rounded-xl shadow-md sm:w-full">
        <div className="flex gap-2 justify-between w-full items-center mb-3 sm:w-full">
          <div className="flex gap-3 items-center">
            <span className="material-symbols-outlined text-primary">
              timeline
            </span>
            <div className="font-bold">Activity</div>
          </div>
        </div>
        <div className="md:flex  flex-col gap-2">

          <div className="flex gap-2 shadow-md p-2">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s"
                alt=""
                className="w-[45px] rounded-full"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full flex-wrap">
              <div className='flex flex-col'>
                <span className="name font-semibold">IBM</span>
                <span className="time text-[12px]">New Job Listing</span>
              </div>
              <span className='link link-secondary link-hover text-sm p-2'>View</span>
            </div>
          </div>

          <div className="flex gap-2 shadow-md p-2">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s"
                alt=""
                className="w-[45px] rounded-full"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full flex-wrap">
              <div className='flex flex-col'>
                <span className="name font-semibold">Sally Bars</span>
                <span className="time text-[12px]">Shared a post</span>
              </div>
              <span className='link link-secondary link-hover text-sm p-2'>View</span>
            </div>
          </div>

          <div className="flex gap-2 shadow-md p-2">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s"
                alt=""
                className="w-[45px] rounded-full"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full flex-wrap">
              <div className='flex flex-col'>
                <span className="name font-semibold">Kami Garces</span>
                <span className="time text-[12px]">Earned a new certificate</span>
              </div>
              <span className='link link-secondary link-hover text-sm p-2'>View</span>
            </div>
          </div>

          <div className="flex gap-2 shadow-md p-2">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgD14vQ6I-UBiHTcwxZYnpSfLFJ2fclwS2A&s"
                alt=""
                className="w-[45px] rounded-full"
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full flex-wrap">
              <div className='flex flex-col'>
                <span className="name font-semibold">Netflix</span>
                <span className="time text-[12px]">New Job Listing</span>
              </div>
              <span className='link link-secondary link-hover text-sm p-2'>View</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Activity
