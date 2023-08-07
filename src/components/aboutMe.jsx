import '../../public/css/aboutMe.css'
import React from 'react';

export const AboutMe = ()=>{

    return (
        <React.Fragment>
            <div className='text-light containerAbout  '>
                <div className='aboutInfo well '>
                    <h2>About Me</h2>
                    <p className='lead mainText'>
                        I began my journey in the world of programming at the beginning of 2021, 
                        where I also started my university degree in computer science, which I am still pursuing. 
                        During the pandemic, I managed to study different things related to web programming, 
                        and to this day I am still learning.
                    </p>
                    <p className='font-weight-bold'><strong>I am currently looking to broaden my knowledge in the professional field.</strong></p>
                    <p className='contactText'> If you want to get in touch with me, write to me at paulo.matias.accardo@gmail.com.</p>
                </div>
                
                <div className='containerImg'>
                    <div className="card">
                        <div className="card-info">
                            <img className='img-fluid' src="public./img./imagen-perfil.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}