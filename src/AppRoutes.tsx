import {  Routes, Route, Navigate  } from 'react-router-dom';
import { LoginPage } from './auth/login';
import { RegisterPage } from './auth/Register';
import {  useSelector, useDispatch} from 'react-redux'
import { HomePage } from './pages/HomePage';
import { onRegister } from './store/authReducer/authSlice';

export const AppRoutes = () => {
    const dispatch = useDispatch();
    const { authenticated } = useSelector( (state:any) => state.auth );
    if(!authenticated) {
       const tokenSession = sessionStorage.getItem('token');
        if( tokenSession ) {
            dispatch( onRegister( tokenSession ));
        }
    }
    return(<Routes>
        
        {
            ( !authenticated ) ? (

                <>
                <Route path='/auth/login' element={ <LoginPage/> } />
                <Route path='/auth/register' element={ <RegisterPage /> } />
                <Route path='/*' element={<Navigate to='/auth/login' />}  />
                </>
            ):(
                <>
                    <Route path='/home' element={ <HomePage />  } />
                    <Route path='/*' element={ <Navigate to='/home' /> } />
                </>
                ) 
            }
            {/* Esta linea lo que hace es redirigirnos a la ruta que le especificamos
            
        */}
        <Route path='/auth/*' element={ <Navigate to='/login' /> } />
        
    </Routes>)
};