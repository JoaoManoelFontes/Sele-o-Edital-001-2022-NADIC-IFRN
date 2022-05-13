import {useForm} from 'react-hook-form';
import api from '../../defaults/api';
import { useNavigate } from 'react-router-dom';
import { Button, FormGroup } from 'reactstrap';
import { verifyDate } from '../../defaults/date';
import { Link } from 'react-router-dom';
import './form.css';

export function Form(){

    const { register, handleSubmit }= useForm()
    const navigate = useNavigate()

    const onSubmit = ({access_id}) =>{
        api.get('Poll/'+access_id)
        .then(({data})=>{

            if(verifyDate(data.poll.final_date)){

                navigate("/accessPoll",{state:{
                    data
                }}) 

            }else{
                console.log("A enquete se encerrou em "+ data.poll.final_date);
            }
        })
    }


    return (
        <div className='form'>
            <Link to="/createPoll"><Button id='btn' color='secondary'>
                <h3>Criar Enquete</h3>
            </Button></Link>
        
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                <input type="text" id='input' name="access_id" {...register('access_id')} placeholder='digite o id de acesso' />
                </FormGroup>
                <input id='btn' type="submit" value="Votar em uma existente" />
                
            </form>
        </div>
    )
}