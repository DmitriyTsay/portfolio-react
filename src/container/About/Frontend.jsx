import React from 'react'

import {HiOutlineBadgeCheck} from 'react-icons/hi';

const Frontend = () => {
  return (
    <div className='skills__window'>
        <h3>Frontend Development</h3>
        <div style={{display: 'flex', alignItems:'center',}}>
            <HiOutlineBadgeCheck />
            <p> HTML</p>
        </div>
        <div style={{display: 'flex', alignItems:'center',}}>
        </div>
        <div style={{display: 'flex', alignItems:'center',}}>
            <HiOutlineBadgeCheck />
            <p> CSS</p>
        </div>
        <div style={{display: 'flex', alignItems:'center',}}>
            <HiOutlineBadgeCheck />
            <p> SCSS</p>
        </div>
        <div style={{display: 'flex', alignItems:'center',}}>
            <HiOutlineBadgeCheck />
            <p> JavaScript</p>
        </div>
        <div style={{display: 'flex', alignItems:'center',}}>
        </div>
        <div style={{display: 'flex', alignItems:'center',}}>
            <HiOutlineBadgeCheck />
            <p> React</p>
        </div>
    </div>
  )
}

export default Frontend