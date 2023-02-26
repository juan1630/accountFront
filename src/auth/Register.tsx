import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link  } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { useFormik } from 'formik'

const initialValuesFormik = {
    nombre:"",
    email:"",
    password:'',
    edad: 0,
    genero : ""
}
export const RegisterPage =() => {

    const navigateRoute = useNavigate();
    const formik = useFormik({
        initialValues:initialValuesFormik,
        onSubmit:(values)=> {
            console.log(values);
        },

    })

    const onClickBack = () => navigateRoute('/auth/login');
    return(
        <div className="container-register main-login" >
            <div>
                <FontAwesomeIcon className='icon-back-button' icon={ faArrowLeft }  onClick={onClickBack} />
            </div>
            <header className="header-login" >
                <h1 className="title-login" >Crea un cuenta nueva</h1>
            </header>
            <section className="section-register" >
                <form className="form-register" onSubmit={ formik.handleSubmit } > 
                    
                    <TextField  onChange={ formik.handleChange } value={ formik.values.nombre }   type='text'  className='form-register-input' placeholder='Ingresa tu nombre' name='nombre' label='nombre' fullWidth /> 
                    <TextField  onChange={ formik.handleChange } value={ formik.values.email }  type='email'  className='form-register-input' placeholder='Ingresa tu email' name='email' fullWidth />
                    <TextField  onChange={ formik.handleChange } value={ formik.values.password }  type='text'  className='form-register-input' placeholder='Ingresa tu contrana' name='password' fullWidth />
                    <TextField  onChange={ formik.handleChange } value={ formik.values.edad }  type='number'  className='form-register-input' placeholder='Edad' name='edad' />
                    <TextField  onChange={ formik.handleChange } value={ formik.values.genero }  type='text'  className='form-register-input' placeholder='Genero' name='genero'  /> 
                    <div className="button-container-login">
                    <button type='submit' className="buton-login" > Enviar  </button>
                </div>
                </form>
            </section>
            <footer className="footer-register" >    
                <p> Ya tienes una cuenta, ingresa <Link to='/auth/login' >  Aqui!! </Link> </p>
            </footer>
        </div>
    );
}