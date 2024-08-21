import Imagenes from "./imagen"


const Contenido = () => {

    let imagenes = [1,2,3,4,5,6,7,8,9];


    return (

        <main>
            <h1>"GALERIA DE IMAGENES"</h1>
            <div>

                {
                    imagenes.map((imagen) => (  // De esta forma renderizamos //
                        <Imagenes />
                    ))
                }                              // aqui estructura de repetición //

            </div>
        </main>


    )
}

export default Contenido