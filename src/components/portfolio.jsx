import '../../public/css/portfolio.css'
import { ProjectCard } from './projectCard'

export const Portfolio = ()=>{

    


    return (
        <section className='mainContainerProjects'>
            <h3 className='text-light '>My Projects</h3>
            <div>
                <section className='containerProjects'>
                    <ProjectCard/>
                </section>
            </div>     
        </section>
    )
}