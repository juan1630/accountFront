import {  Routes, Route, Navigate  } from 'react-router-dom';
import { LoginPage } from './auth/login';
import { RegisterPage } from './auth/Register';

export const AppRoutes = () => {
    return(<Routes>
        <>
            <Route path='/auth/login' element={ <LoginPage/> } />
            <Route path='/auth/register' element={ <RegisterPage /> } />
            <Route path='/auth/*' element={ <Navigate to='/login' /> } />
            {/* Esta linea lo que hace es redirigirnos a la ruta que le espeocificamos  */}
        </>
    </Routes>)
};