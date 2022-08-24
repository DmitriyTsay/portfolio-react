import React from 'react'

import {HiOutlineBadgeCheck} from 'react-icons/hi';

const Backend = () => {
  return (
    <div className='skills__window'>
    <h3>Backend Development</h3>
    <div style={{display: 'flex', alignItems:'center',}}>
        <HiOutlineBadgeCheck />
        <p> NodeJS</p>
    </div>
    <div style={{display: 'flex', alignItems:'center',}}>
        <HiOutlineBadgeCheck />
        <p> Express</p>
    </div>
</div>
  )
}

export default Backend