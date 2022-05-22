import {useForm} from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Form, FormGroup, Label } from 'reactstrap';
import api from '../../defaults/api';
import {Main, FormDiv, Input, Submit, Title} from './styled';

export function CreatePoll(){

    const { register, handleSubmit }= useForm()
    const navigate = useNavigate()


    function onSubmit({name, access_id, final_date}){
        api.get('/Poll/'+access_id).then(({ data })=>{
            if (data === false){
                api.post('/Poll',{
                    name, final_date, access_id
                }).then(({ data })=>{
                    navigate("/registerCandidate",{state:{
                        poll:data.poll
                    }})
                })
            }else{
                window.location.reload(false);    
                console.log("id de acesso já existente");
            }
        })
        
        
    }

    return(
        <Main>
            <FormDiv>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormGroup>
                        <Label for='name'>Nome da enquete:</Label><br/>
                        <Input type="text" name="name" {...register('name')} placeholder='Digite um nome' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='access_id'>Id de acesso:</Label><br/>
                        <Input type="password" name="access_id" {...register('access_id')} placeholder='Digite uma senha' />
                    </FormGroup>
                    <FormGroup>
                        <Label for='final_date'>Data de encerramento:</Label><br/>
                        <Input type="date" name='final_date' {...register('final_date')} />
                    </FormGroup>
                    <Submit type="submit" value="Criar Enquete" />
                </form>
            </FormDiv>
            <Title>               
                    <h1 className="display-3">Criando <br/> Enquete</h1>
                    <h3 className='lead'>Eleições Nadic</h3>
            </Title>
        </Main>
    )
}