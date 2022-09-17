import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hearder from './componentes/heard'
import NotificationButton from './componentes/notificationbutton'
import SaveCard from './componentes/saveCards'

function App() {
  return (
    <>
   <Hearder/>
   <main>
      <section id="sales">
        <div className="dsmeta-container">
        <SaveCard/>
        
        </div>
      </section>
    </main>        
  
  
   </>
  )
}

export default App
