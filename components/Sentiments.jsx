import React from 'react'
import { BsFillEmojiAngryFill, BsEmojiSunglasses, BsEmojiLaughingFill } from 'react-icons/bs'
import { FaSadCry, FaRegLaughSquint } from 'react-icons/fa'
import { RiEmotionSadFill } from 'react-icons/ri'
import { GiLoveSong } from 'react-icons/gi'
import {MdTrackChanges} from "react-icons/md"
import Audio from './Audio'
const Sentiments = () => {
  return (
    <div className='overflow-hidden'>
      <h1 className='text-center justify-center font-bold text-4xl'>Sentiments</h1>
      <div className='py-5'>
        <div className='flex flex-row justify-evenly cursor-pointer'>
          <span className='text-4xl text-red-400 m-1'>
            <BsFillEmojiAngryFill />
          </span>
          <span className='text-4xl text-yellow-400 m-1'>
            <BsEmojiSunglasses />
          </span>
          <span className='text-4xl text-yellow-400 m-1'>
            <BsEmojiLaughingFill />
          </span>
          <span className='text-4xl text-yellow-400 m-1'>
            <FaSadCry />
          </span>
          <span className='text-4xl text-yellow-400 m-1'>
            <FaRegLaughSquint />
          </span>
          <span className='text-4xl text-yellow-400 m-1'>
            <RiEmotionSadFill />
          </span>

        </div>
        <div>
          <h1 className='py-2 text-3xl text-center font-bold'>Songs</h1>
          <div>
            <ul className='py-5'>
              <l1 className='flex flex-row align-center'>
                <GiLoveSong />
                Stitches
              </l1>
              <li className='flex flex-row align-center'>
                <GiLoveSong />
                All Time Low
              </li>
              <li className='flex flex-row align-center'>
                <GiLoveSong />
                Thats Hilarious
              </li>
              <li className='flex flex-row align-center'>
                <MdTrackChanges />
                Stitches
              </li>
            </ul>
          </div>
        </div>
        <div className='w-[20vw]'>
          <Audio />

        </div>
      </div>

    </div>
  )
}

export default Sentiments