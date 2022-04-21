import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import Game from './components/Game/Game'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <React.StrictMode>
      <Game />
    </React.StrictMode>
)