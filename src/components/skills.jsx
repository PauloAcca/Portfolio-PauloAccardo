import '../../public/css/skills.css'
export const Skills = ()=>{

    return (
        <section className='mainContainerSkills'>
            <div className='containerSkills'>
                <p className='titleSkills'>Front end development</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills html'></div>
                        <p>Html</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills css'></div>
                        <p>Css</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills javascript'></div>
                        <p>Java Script</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills jquery'></div>
                        <p>Jquery</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills reactjs'></div>
                        <p>React.js</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills redux'></div>
                        <p>Redux</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills bootstrap'></div>
                        <p>BootStrap</p>
                    </div>
                </div>
            </div>
            <div className='containerSkills'> 
                <p className='titleSkills'>Back end development</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills nodejs'></div>
                        <p>Node.js</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills mysql'></div>
                        <p>MySql</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills sequalize'></div>
                        <p>Sequalize</p>
                    </div>
                </div>
            </div>
            <div className='containerSkills'>
                <p className='titleSkills'>Tools</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills github'></div>
                        <p>GitHub</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills git'></div>
                        <p>Git</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills postman'></div>
                        <p>PostMan</p>
                    </div>
                </div>
            </div>
            <div className='containerSkills'>
                <p className='titleSkills'>Soft Skills</p>
                <div className='iconsSkills'>
                    <div className='divSkills icons'>
                        <div className='divImgsSkills'><i class="fas fa-phone-alt text-warning"></i></div>
                        <p>Comunicación efectiva</p>
                    </div>
                    <div className='divSkills icons'>
                        <div className='divImgsSkills'><i class="fas fa-users text-warning"></i></div>
                        <p>Trabajo en equipo</p>
                    </div>
                    <div className='divSkills icons'>
                        <div className='divImgsSkills'><i class="fas fa-user-cog text-warning"></i></div>
                        <p>Resolución de problemas</p>
                    </div>
                    <div className='divSkills icons'>
                        <div className='divImgsSkills'><i class="fas fa-user-check text-warning"></i></div>
                        <p>Adaptabilidad </p>
                    </div>
                    <div className='divSkills icons'>
                        <div className='divImgsSkills'><i class="far fa-clock text-warning"></i></div>
                        <p>Gestión del tiempo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}