import {useLocation} from 'react-router-dom';
import { FormGroup, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import api from '../../defaults/api';
import { Main, FormDiv, Input, Title } from './styled';


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
        <Main>
            
            <FormDiv>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for='name'>Nome do Candidato</Label><br/>
                        <Input type="text" name="name" {...register('name')} placeholder='Digite um nome' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='cpf'>Cpf:</Label><br/>
                        <Input type="text" name="cpf" {...register('cpf')} placeholder='Digite um cpf' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='address'>Endereço:</Label><br/>
                        <Input type="text" id='input' name="address" {...register('address')} placeholder='Digite um endereço' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='birthday'>Data de nascimento:</Label><br/>
                        <Input type="date" name='birthday' {...register('birthday')} />
                    </FormGroup>
                    <input id='btn' type="submit" value="Cadastrar" />
                </form>
            </FormDiv>
            <Title>
                <h1 className='display-3'>Cadastrando <br/> Candidatos</h1>
                <h3 className='lead'>
                    Nome: {state.poll.name} <br/> Id de acesso: {access_id} <br/> Encerramento: {final_date} </h3>
                <Link to='/'><Button  color="secondary" >Home</Button></Link>
            </Title>
            
        </Main>
        
    )
}