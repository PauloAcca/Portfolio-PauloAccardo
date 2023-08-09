import '../../public/css/educacion.css'
export const Educacion = ()=>{

    return (
        <section className='containerPrincipal'>
            <div className='barraLateral'></div>
            <div className='containerEstudios text-warning'>
                <div className='containerEstudio'> 
                    <p className='tituloEstudio text-light blockquote'>Lic. Computer Science (UBA) </p>
                    <p className='anoEstudio blockquote-footer'>2020 - currently</p>
                    <p className='descripcionEstudio text-muted'></p>
                    <link rel="stylesheet" href="" />
                    <div className='barrita'></div>
                </div> 
                <div className='containerEstudio'> 
                    <p className='tituloEstudio text-light blockquote'>Web Developer Full Stack (Digital House)</p>
                    <p className='anoEstudio blockquote-footer'>December 2022 - June 2023</p>
                    <p className='descripcionEstudio'>Intensive course in which we learned to use different tools, both Front End and Back End</p>
                    <link rel="stylesheet" href="" />
                    <div className='barrita'></div>
                </div> 
                <div className='containerEstudio'> 
                    <p className='tituloEstudio text-light blockquote'>high school (Cardenal Copello)</p>
                    <p className='anoEstudio'>2014 - 2019</p>
                    <p className='descripcionEstudio text-muted'></p>
                    <link rel="stylesheet" href="" />
                    <div className='barrita'></div>
                </div> 
            </div>
            
        </section>
    )
}