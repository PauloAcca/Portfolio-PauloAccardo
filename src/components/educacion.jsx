import '../../public/css/educacion.css'
export const Educacion = ()=>{

    return (
        <section className='containerPrincipal'>
            <div className='barraLateral'></div>
            <div className='containerEstudios text-warning'>
                <div className='containerEstudio'> 
                    <p className='tituloEstudio text-light blockquote'>Lic. Ciencia de la Computacion (UBA) </p>
                    <p className='anoEstudio blockquote-footer'>2020 - Actualidad</p>
                    <p className='descripcionEstudio text-muted'></p>
                    <link rel="stylesheet" href="" />
                    <div className='barrita'></div>
                </div> 
                <div className='containerEstudio'> 
                    <p className='tituloEstudio text-light blockquote'>Desarrollador Web Full Stack (Digital House)</p>
                    <p className='anoEstudio blockquote-footer'>Diciembre 2022 - Junio 2023</p>
                    <p className='descripcionEstudio'>Curso intensivo en que aprendimos a utilizar diferentes herramientas tanto de Front End como Back End</p>
                    <link rel="stylesheet" href="" />
                    <div className='barrita'></div>
                </div> 
                <div className='containerEstudio'> 
                    <p className='tituloEstudio text-light blockquote'>Escuela secundaria (Cardenal Copello)</p>
                    <p className='anoEstudio'>2014 - 2019</p>
                    <p className='descripcionEstudio text-muted'></p>
                    <link rel="stylesheet" href="" />
                    <div className='barrita'></div>
                </div> 
            </div>
            
        </section>
    )
}