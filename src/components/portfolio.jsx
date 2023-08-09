import '../../public/css/portfolio.css'
import { ProjectCard } from './projectCard'

export const Portfolio = ()=>{

    


    return (
        <section className='mainContainerProjects'>
            <div className="neon">
                My Projects
            </div>
            <div>
                <section className='containerProjects'>
                    <ProjectCard/>
                </section>
            </div>     
        </section>
    )
}