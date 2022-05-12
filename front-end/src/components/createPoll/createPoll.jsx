import {useForm} from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { FormGroup, Label } from 'reactstrap';
import api from '../../defaults/api';
import './createPoll.css'

export function CreatePoll(){

    const { register, handleSubmit }= useForm()
    const navigate = useNavigate()


    function onSubmit({name, access_id, final_date}){
        api.post('/Poll',{
            name, final_date, access_id
        }).then(({ data })=>{
            navigate("/registerCandidate",{state:{
                poll:data.poll
            }})
        })
        
    }

    return(
        <main className="main">
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for='name'>Nome da enquete:</Label><br/>
                        <input type="text" id='input' name="name" {...register('name')} placeholder='Digite um nome' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='access_id'>Id de acesso:</Label><br/>
                        <input type="password" id='input' name="access_id" {...register('access_id')} placeholder='Digite uma senha' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='final_date'>Data de encerramento:</Label><br/>
                        <input type="date" id='input' name='final_date' {...register('final_date')} />
                    </FormGroup>
                    <input id='btn' type="submit" value="Criar Enquete" />
                </form>
            </div>
            <div className='title'>               
                    <h1 className="display-3">Criando <br/> Enquete</h1>
                    <h3 className='lead'>Eleições Nadic</h3>
            </div>
        </main>
    )
}