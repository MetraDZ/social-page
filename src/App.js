import React from 'react'

import About from './components/About'
import Info from './components/Info'
import Interests from './components/Interests'
import Social from './components/Social'

export default function App () {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Social />
        </div>
    )
}