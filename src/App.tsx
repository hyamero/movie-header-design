/**@jsx jsx */
import { css, jsx, Global } from '@emotion/react'

import React, { useState } from 'react'

const App: React.FC = () => {

  return (
    <div className="App">
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
