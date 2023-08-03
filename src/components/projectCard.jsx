import '../../public/css/projectCard.css'
import { useSelector } from "react-redux"
export const ProjectCard = ()=>{

    const projects = useSelector((state)=>state.proyect)

    return (
        <div className='container containerCards'>
           {projects.map(project => (
               <div class="cardProject" key = {project.id}>
                    <div class="img"><img className='img-fluid imageCard' src={project.img} alt="" /></div>
                    <span>{project.title}</span>
                    <p class="info">{project.description}</p>
                    <div class="share">
                        <div className='container containerIcons'>
                            {project.tec.map(tecnos => (
                                <div><img className='img-fluid iconProject' src={tecnos} alt="" /></div>
                            ))}
                        </div>
                    </div>
                    <button>Demo</button>
                </div>
            ))} 
        </div>
        
    )
}



{/* <div class="containerCard" key = {project.id}>
                    <div><img className='img-fluid imageCard' src={project.img} alt="" /></div>
                    <div class="card__content">
                        <p class="card__title">{project.title}</p>
                        <p class="card__description text-secondary">{project.description}</p>
                        <div className='container containerIcons'>
                            {project.tec.map(tecnos => (
                                <div><img className='img-fluid iconProject' src={tecnos} alt="" /></div>
                            ))}
                        </div>
                    </div>
                </div>  */}