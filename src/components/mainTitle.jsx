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
                <p className='text-light saludo2'>To my Portfolio</p>
                <button className='btn btn-primary'>summary</button>
            </div>
            
            
            <div class="container">
                    <div class="container_terminal"></div>
                    <div class="terminal_toolbar">
                        <div class="butt">
                            <button class="btns btns-color"></button>
                            <button class="btns"></button>
                            <button class="btns"></button>
                        </div>
                        <p class="user">pauloAcc@admin: ~</p>
                    </div>
                    <div class="terminal_body">
                        <div class="terminal_promt">
                            <span class="terminal_user">pauloAcc@admin:</span>
                            <span class="terminal_location">~</span>
                            <span class="terminal_bling">$ </span>
                            <span class="terminal_cursor"></span>
                        </div>
                    </div>
            </div>
            
        </body>
    )
}