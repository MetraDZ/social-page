import React from 'react'
import profile_pic from '../images/profile-pic.jpg'

export default function Info () {
    return (
        <div className='info-container'>
            <img src={profile_pic} alt=''/>
            <h1>Dzidzoiev Artem</h1>
            <h3>Fullstack Developer</h3>
            <h5>dzidzoiev.com</h5>
            <div className='contacts'>
                <button className='email'><i class="fa-solid fa-envelope"></i>Email</button>
                <button className='linkedin'><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}