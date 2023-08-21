import '../../public/css/projectCard.css'
import { useSelector } from "react-redux"
export const ProjectCard = ()=>{

    const projects = useSelector((state)=>state.proyect)
    return (
        <div className='container containerCards'>
                {/* PROYECTO DIGITAL HOUSE */}
               <div className="cardProject" key = {projects[0].id}>
                    <div className="img"><div className='imageCard gangapadel'  alt="" /></div>
                    <span>{projects[0].title}</span>
                    <p className="info">{projects[0].description}</p>
                    <div className="share">
                        <div className='container containerIcons'>
                            {/* css de iconos esta en css skills */}
                            <div className='iconProject html'></div>
                            <div className='iconProject css'></div>
                            <div className='iconProject reactjs'></div>
                            <div className='iconProject nodejs'></div>
                        </div>
                    </div>
                    <button><a href="">Demo</a></button>
                </div>
                {/* . */}
                {/* PROYECTO BLOG FILTRO */}
                <div className="cardProject" key = {projects[1].id}>
                    <div className="img"><div className='imageCard blogFilter'  alt="" /></div>
                    <span>{projects[1].title}</span>
                    <p className="info">{projects[1].description}</p>
                    <div className="share">
                        <div className='container containerIcons'>
                            {/* css de iconos esta en css skills */}
                            <div className='iconProject html'></div>
                            <div className='iconProject css'></div>
                            <div className='iconProject reactjs'></div>
                            <div className='iconProject redux'></div>
                            <div className='iconProject bootstrap'></div>
                        </div>
                    </div>
                    <button><a href="https://blogfilter-pauloaccardo.netlify.app/">Demo</a></button>
                </div>
                {/* . */}
        </div>
        
    )
}