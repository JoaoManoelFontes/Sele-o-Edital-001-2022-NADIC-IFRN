import {useForm} from 'react-hook-form';
import api from '../../defaults/api';
import { useNavigate } from 'react-router-dom';
import { Button, Input, FormGroup } from 'reactstrap';
import './form.css';

export function Form(){

    const { register, handleSubmit }= useForm()
    const navigate = useNavigate()

    const onSubmit = ({access_id}) =>{
        api.get('Poll/'+access_id)
        .then(({data})=>{
            console.log(data);
            navigate("/accessPoll",{state:{
                data
            }}) 
        })
    }


    return (
        <div className='form'>
            <Button id='btn' color='secondary'><h3>Criar Enquete</h3></Button>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                <input type="text" id='input' name="access_id" {...register('access_id')} placeholder='digite o id de acesso' />
                <Input id='btn' type="submit" value="Votar em uma existente" />
                </FormGroup>
            </form>
        </div>
    )
}