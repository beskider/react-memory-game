import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Gameboard from './components/Gameboard/Gameboard'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
      <Gameboard />
    </React.StrictMode>
)