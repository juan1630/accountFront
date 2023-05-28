import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import ApiRequest from '../api/apiConect';
import  { useDispatch } from 'react-redux';
import  { onRegister } from '../store/authReducer/authSlice'

export const LoginPage = () => {

    const dispatch = useDispatch();

    const initialValuesFormik = {
        email: '',
        password: ''
    }

    const validationSchemaYup = yup.object({
        email: yup
                .string()
                .email('Ingresa un email ')
                .required('El email es requerido'),
        password: yup
                    .string()
                    .required('La contrasena es requerida')
                    .min(6, 'Debe de ser mas de 6 caracteres')
    });

    const formik = useFormik({
        initialValues: initialValuesFormik,
        validationSchema: validationSchemaYup,
        onSubmit: async(values) => {
            console.log( values );
            try {
               const resp = await ApiRequest.post('/auth', values)
                if( resp.status === 200 ){
                    sessionStorage.setItem('token' , resp.data.token);
                    dispatch( onRegister(resp.data));
                }

            }catch(error) {

                console.log(error)
            }

        }
    })
    return (
        <>
        <div className="main-login" >
            <header className="header-login" >
                <h1 className="title-login" >Login</h1>
                <p className="p-login" > Inicia sesión con tu email </p>
            </header>
                <section className="section-login" >
                    
                    <form onSubmit={formik.handleSubmit} className='form-login' >
                        
                        <div className='input-card-login' >
                            <TextField label="user" type='email' value={ formik.values.email } placeholder='email' name='email' onChange={formik.handleChange } fullWidth />
                        </div>
                        <div className='input-card-login' >
                            <TextField label='password' type='password' placeholder='password' value={formik.values.password}  name='password' onChange={formik.handleChange } fullWidth />
                        </div>
                        <div className="button-container-login">
                            <Button className="buton-login" type='submit'  > Enviar  </Button>
                        </div>
                    </form>
                </section>
                <footer className="footer-login" > 
                    <p> No tienes una centa?  <Link className='p-login-footer' to='/auth/register' > Aqui!! </Link>  </p>
                </footer>
            </div>
        </>
)};
