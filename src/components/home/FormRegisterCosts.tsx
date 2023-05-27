import { useEffect, useState } from 'react';
import  { Field, Formik }  from 'formik';
import {Alert, MenuItem, Select} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  {  DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


import { registerAmount } from "../../hooks/useRegiter";
import './styles.css'
import { createOperation } from '../../hooks/operations/createOperation';
import ApiRequest from '../../api/apiConect';

const initialValues: registerAmount = {
    total: 0,
    description:'',
    fechaDeOperacion: Date.now(),
    kindOfMove:1
}

const validationSchema = Yup.object().shape({
    total: Yup.number().min(2).required('Amount field is required'),
    description : Yup.string().required('Field description is required'),
    kindOfMove: Yup.number().required()
});

interface moves {
    
    name: string;
    IDKindOfMove: number; 
}

export const FormREgisterCosts = () =>{
    
    const [movesState, setMovesState ] = useState([]);

    const fetchGetMoves = async() => {
        const resp = await ApiRequest.get('/list/moves');
        console.log(resp.data)
        setMovesState(resp.data.moves);

    }
    
       useEffect( ()=> {
        fetchGetMoves();
       }, []);
    return (
        <section className='margin-top-section' >
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    const token =  sessionStorage.getItem('token');
                    const valuesSend = { ...values, token  }
                    createOperation( valuesSend )
                                .then( data => console.log(data))
                                .catch(error => console.log(error));
                }}>

                {( formik ) => (
                    <form className='form-amount' onSubmit={formik.handleSubmit} >
                        <div className='form-group' >
                            <Field className='input-login'  type='number' placeholder='Total' name='total' label='total'  />
                            {
                                (formik.errors.total && formik.touched.total ) ? <Alert severity='error' style={{ width:'100%' }} >
                                                        { (formik.errors.total && formik.touched.total)  ? formik.errors.total : null }
                                                    </Alert> : null 
                            }

                        </div>
                        <div className='form-group' >
                            <Field className='input-login' type="text"  placeholder="Description" name='description' label='description' />
                            {
                                (formik.errors.description && formik.touched.description) ? <Alert severity='error' style={{ width: '100%' }} >
                                { (formik.errors.description && formik.touched.description) ? formik.errors.description : null }   
                            </Alert> : null
                            }

                        </div>
                        <div className='form-group' >

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker 
                                    className='date-picker-amount'
                                    label='Fecha del gasto'
                                    format='DD/MM/YYYY'
                                    onChange={ (value: any) => {
                                        console.log( value )
                                        formik.setFieldValue('fechaDeOperacion', value)
                                    } }
                                    value={dayjs(formik.values.fechaDeOperacion)}
                                    slotProps={{
                                        textField:{
                                            variant:'outlined',
                                            name:'fechaDeOperacion'
                                        }
                                    }}
                                    />
                            </LocalizationProvider>
                        </div>
                        <div className='form-gorup'  >
                            <Select className='select-item' name='kindOfMove' onChange={ formik.handleChange } value={ formik.values.kindOfMove } >
                               { 

                                movesState.map( (move: moves) => {
                                    return <MenuItem value={1} key={move.IDKindOfMove} > {move.name} </MenuItem> 
                                })

                               }

                            </Select>
                        </div>

                    <button type="submit" className='btn-submit-amount'>Submit</button>
                </form>
                )}
            </Formik>
        </section>
    )
}