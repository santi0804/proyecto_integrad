import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <headers className = 'encabezado'>
    <section className='logotipo'></section>

       <nav className='manu'>
          <a href=''enlace1></a>
          <a href=''enlace2></a>
          <a href=''enlace3></a>
          <a href=''enlace4></a>
          <a href=''enlace5></a>
        </nav>
    </headers>


    <div>

      <main>

        <h1 className='titulo-principal'>"GALERIA DE IMAGENES"</h1>
        <div>
          <img src="" alt="img-1" />
          <img src="" alt="img-2" />
          <img src="" alt="img-3" />
          <img src="" alt="img-4" />
          <img src="" alt="img-5" />
          <img src="" alt="img-6" />
          <img src="" alt="img-7" />
          <img src="" alt="img-8" />
          <img src="" alt="img-9" />
        </div>
      </main>
        

      <div>

        <section>
          <h2>Titulo contenido</h2>
        </section>

        <section>
          <h2>Titulo contenido</h2>
        </section>

      </div>

    </div>

  </StrictMode>,
)
