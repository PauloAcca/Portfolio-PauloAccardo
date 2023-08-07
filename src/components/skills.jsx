import '../../public/css/skills.css'
export const Skills = ()=>{

    return (
        <section className='mainContainerSkills'>
            <div className='containerSkills'>
                <p className='titleSkills'>Front end development</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconHtml.png" alt="" /></div>
                        <p>Html</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconCss.png" alt="" /></div>
                        <p>Css</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconJs.png" alt="" /></div>
                        <p>Java Script</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconjquery.png" alt="" /></div>
                        <p>Jquery</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconReact.png" alt="" /></div>
                        <p>React.js</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconRedux.png" alt="" /></div>
                        <p>Redux</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconBootStrap.png" alt="" /></div>
                        <p>BootStrap</p>
                    </div>
                </div>
            </div>
            <div className='containerSkills'> 
                <p className='titleSkills'>Back end development</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconNode.png" alt="" /></div>
                        <p>Node.js</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconMySqlWorkBench.png" alt="" /></div>
                        <p>MySql</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconSequalize.png" alt="" /></div>
                        <p>Sequalize</p>
                    </div>
                </div>
            </div>
            <div className='containerSkills'>
                <p className='titleSkills'>Tools</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconGitHub.png" alt="" /></div>
                        <p>GitHub</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><img src="../../public/img/icons/iconGit.png" alt="" /></div>
                        <p>Git</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills post'></div>
                        <p>PostMan</p>
                    </div>
                </div>
            </div>
            <div className='containerSkills'>
                <p className='titleSkills'>Soft Skills</p>
                <div className='iconsSkills'>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><i class="fas fa-phone-alt text-warning"></i></div>
                        <p>Comunicación efectiva</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><i class="fas fa-users text-warning"></i></div>
                        <p>Trabajo en equipo</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><i class="fas fa-user-cog text-warning"></i></div>
                        <p>Resolución de problemas</p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><i class="fas fa-user-check text-warning"></i></div>
                        <p>Adaptabilidad </p>
                    </div>
                    <div className='divSkills'>
                        <div className='divImgsSkills'><i class="far fa-clock text-warning"></i></div>
                        <p>Gestión del tiempo</p>
                    </div>
                </div>
            </div>
        </section>
    )
}