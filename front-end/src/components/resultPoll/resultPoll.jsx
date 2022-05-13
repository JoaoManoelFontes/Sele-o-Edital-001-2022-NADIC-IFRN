import React, { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import api from '../../defaults/api';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import './resultPoll.css'

export function ResultPoll(){

    const { state } = useLocation();
    console.log();
    let counter = 0;
    const [voters, setVoters] = useState([])

    useEffect(()=>{
        api.get('/Candidate/'+state.resultPoll.poll.poll.access_id)
        .then(({data})=>{            
            setVoters(data.candidates)
        })
        
      },[])
    return(
        <main className='main'>
            <div className='title'>
                <h1 className='display-3'> Resultados: {state.resultPoll.poll.poll.name} <br/> </h1> 
                <p className='lead'>Encerra em: {state.resultPoll.poll.poll.final_date}</p>
            </div>
            <div className='form'>
                {voters.map(element => { 
                    if(element.voters.length>counter){
                        counter = element.voters.length
                    }

                  return(
                        <ListGroup>
                            <ListGroupItem key={element.id}>{element.name} <br/>
                             Total te votos:<br/> {element.voters.length} Eleitores</ListGroupItem>
                        </ListGroup>
                        )
                })}
                <Link to='/'><Button outline color="secondary" >Home</Button></Link>
            </div>
        </main>
    )
}