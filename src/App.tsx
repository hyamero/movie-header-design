/**@jsx jsx */
import { css, jsx, Global } from '@emotion/react'
import React, { useState } from 'react'

import background from './img/background.jpg'
import titlecard from './img/title-card.jpg'
import logo from './img/Marvel_Logo.png'
import scene0 from './img/scene0.jpg'
import scene1 from './img/scene1.jpg'
import scene2 from './img/scene2.jpg'


const App: React.FC = () => {

  return (
    <div 
    className="App"
    css={css`
      
    `}
    >
     <span></span>
     <Global 
     styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');

        * {
        font-family: 'Teko', sans-serif;
        }

     `} />
    </div>
  )
}

export default App
