import '../../public/css/mainTitle.css'
export const MainTitle = ()=>{



    return (
        <body className='presentationContainer'>
            <header className='palabras'>
                <div className='name'>
                    <div className='containerName'>
                        <h1 className='text-light presentacion'>Hello 👋, I'm</h1> 
                        <div className='VueltaContainer'>
                            <ul className='nameVuelta'>
                                <li className='presentacion1 '>Paulo Accardo</li>
                                <li className='presentacion2 '>Front End Developer</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </header>
            <div className='bienvenida'>
                <ul className='lightEffectW'>
                    <li className='saludo1'>W</li>
                    <li className='saludo1'>E</li>
                    <li className='saludo1'>L</li>
                    <li className='saludo1'>C</li>
                    <li className='saludo1'>O</li>
                    <li className='saludo1'>M</li>
                    <li className='saludo1'>E</li>
                </ul>
            <h1 className='text-light saludo2'>To <br />my Portfolio</h1>
            </div>
            
            <div className='imageTitle'><img src="../../public/img/titleImage.png" alt="" /></div>
        </body>
    )
}