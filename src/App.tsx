/**@jsx jsx */
import { css, jsx, Global } from '@emotion/react'
import React, { useState } from 'react'

import { Navbar } from './components/Navbar'
import { SectionLeft } from './components/SectionLeft'
import { SectionRight } from './components/SectionRight'

import background1 from './img/background1.jpg'

const App: React.FC = () => {

  return (
    <div 
    className="App"
    css={css`
      background: url(${background1});
      background-size: cover;
      height: 100vh;
    `}
    >
     <Navbar />
     <div className="flex-section">
     <SectionLeft />
     <SectionRight />
     </div>
     <Global 
     styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');

        * {
        font-family: 'Teko', sans-serif;
        margin: 0;
        padding: 0;
        }

        body {
          background: #000;
        }

     `} />
    </div>
  )
}

export default App
