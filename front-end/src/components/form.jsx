import React from 'react';
import {useForm} from 'react-hook-form';
import api from '../defaults/api';
import { Button } from 'reactstrap';
import './form.css';

export function Form(){

    const { register, handleSubmit }= useForm()

    const onSubmit = ({access_id}) =>{
        api.get('Poll/'+access_id)
        .then(( {data} )=>{
            console.log(data);
        })
    }


    return (
        <div className='form'>
            <Button color='success'><h3>Criar Eleição</h3></Button>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input" type="text" name="access_id" {...register('access_id')} placeholder='digite o id de acesso' />
                <input type="submit" value="Votar em uma existente" />
            </form>
        </div>
    )
}