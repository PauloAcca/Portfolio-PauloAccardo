import '../../public/css/formulario.css'
import { useForm } from '@formspree/react';
export const Formulario = ()=>{

    // ----- VALIDACIONES BOOTSTRAP
    const validations = (e)=>{
        // Ejemplo de JavaScript inicial para deshabilitar el envío de formularios si hay campos no válidos

        (function () {
            'use strict'
        
            // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
            var forms = document.querySelectorAll('.needs-validation')
        
            // Bucle sobre ellos y evitar el envío
            Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
        
                form.classList.add('was-validated')
                }, false)
            })
            })()
    }

    
    // ----------- ENVIO FORMULARIO

    

    return (
        <section className="form-container ">
            <form className="row needs-validation" noValidate action="https://formspree.io/f/maygqznr" method="POST">
                <div className="form-group col-6 mt-4">
                    <label className='form-label text-light' htmlFor="nameInput">Name</label>
                    <input required type="text" name="name" className='form-control inputForm' id='nameInput'/>
                    <div className='valid-feedback'> Nice!</div>
                    <div div className='invalid-feedback'> Something wents wrong</div>
                </div>

                <div className="form-group col-6 mt-4">
                    <label htmlFor="surnameInput" className='form-label text-light'>Surname</label>
                    <input  type="text" className='form-control inputForm' id='surnameInput' name="surname" required/>
                    <div className='valid-feedback'> Nice!</div>
                    <div className='invalid-feedback'> Something wents wrong</div>
                </div>

                <div className="form-group col-6 mt-4">
                    <label htmlFor="emailInput" className='form-label text-light labelInput'>Email</label>
                    <input  type="email" className='form-control inputForm' id='emailInput' name="email" required/>
                    <div className='valid-feedback'> Nice!</div>
                    <div className='invalid-feedback'> Something wents wrong</div>
                </div>

                <div className="form-group">
                    <label htmlFor="textInput" className='form-label text-light labelInput'>Text</label>
                    <textarea  type="text" className='form-control inputForm pb-5 pt-3' id='textInput' placeholder='Write something' name="message" required/>
                </div>
                <div className='col-6'><button className="form-submit-btn btn btn-warning mt-3 col-2" onClick={validations} type="submit">Submit</button></div>
            </form>
        </section>
    )
}
