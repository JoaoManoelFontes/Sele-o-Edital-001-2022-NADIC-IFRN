import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import api from '../../defaults/api';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Main, Result, Title } from './styled';

export function ResultPoll(){

    const { state } = useLocation();
    let counter = 0;
    const [voters, setVoters] = useState([])
    console.log(state);
    useEffect(()=>{
        api.get('/Candidate/'+state.resultPoll.poll.poll.access_id)
        .then(({data})=>{            
            setVoters(data.candidates)
        })
        
      },[])
    return(
        <Main>
            <Title>
                <h1 className='display-3'> Resultados: {state.resultPoll.poll.poll.name} <br/> </h1> 
                <p className='lead'>Encerra em: {state.resultPoll.poll.poll.final_date}</p>
            </Title>
            <Result>
                {voters.map(element => { 
                    if(element.voters.length>counter){
                        counter = element.voters.length
                    }

                  return(
                        <ListGroup>
                            <ListGroupItem key={element.id}>{element.name} <br/>
                             Total de votos:<br/> {element.voters.length} Eleitor (es)</ListGroupItem>
                        </ListGroup>
                        )
                })}
                <Link to='/'><Button outline color="secondary" >Home</Button></Link>
            </Result>
        </Main>
    )
}