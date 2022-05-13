import {useLocation} from 'react-router-dom';
import { FormGroup, Label } from 'reactstrap';
import {useForm} from 'react-hook-form';
import './registerCandidate.css';
import api from '../../defaults/api';

export function RegisterCandidate(){

    const { register, handleSubmit }= useForm()
    const { state } = useLocation();
    const { access_id, final_date } = state.poll

    function onSubmit({name, cpf, address, birthday}){
        api.post('/Candidate',{
             name, cpf, address, birthday, access_id, final_date
        }).then(({ data })=>{
            window.location.reload(false);
        })
    }
    
    return(
        <main className='main'>
            <div className='form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for='name'>Nome do Candidato</Label><br/>
                        <input type="text" id='input' name="name" {...register('name')} placeholder='Digite um nome' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='cpf'>Cpf:</Label><br/>
                        <input type="text" id='input' name="cpf" {...register('cpf')} placeholder='Digite um cpf' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='address'>Endereço:</Label><br/>
                        <input type="text" id='input' name="address" {...register('address')} placeholder='Digite um endereço' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='birthday'>Data de nascimento:</Label><br/>
                        <input type="date" id='input' name='birthday' {...register('birthday')} />
                    </FormGroup>
                    <input id='btn' type="submit" value="Cadastrar" />
                </form>
            </div>
            <div className='title'>
                <h1 className='display-3'>Cadastrando <br/> Candidatos</h1>
                    <h3 className='lead'>Enquete: <br/>
                        Nome: {state.poll.name} <br/> Id de acesso: {access_id} <br/> Encerramento: {final_date} </h3>
            </div>
        </main>
        
    )
}