import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormGroup, Label, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./accessPoll.css";
import api from "../../defaults/api"; 
import {Main, FormDiv, Input, Submit, Radio} from './styled';



export default function CreatePoll() {
  const { register, handleSubmit } = useForm();
  const { state } = useLocation();
  const { name, final_date } = state.data.poll;
  const [candidates, setCandidates] = useState([state.data.candidates]);
  const navigate = useNavigate();


  const onSubmit = ({cpf, radio}) =>{

    api.get('Voter/'+radio).then(({ data })=>{
      if(data.voters.length!=0){
        data.voters.forEach(element => {
          if(element.cpf === cpf){
            navigate('/')
          }else{
            api.post('Voter/'+radio, {
              cpf
            })
            .then(({data})=>{
              
                const resultPoll = {data, poll:state.data }
                navigate("/resultPoll",{state:{
                    resultPoll
                }})
            })
          }
  
        });  
      }else{
        api.post('Voter/'+radio, {
          cpf
        })
        .then(({data})=>{
          const resultPoll = {data, poll:state.data }
            navigate("/resultPoll",{state:{
                resultPoll
            }}) 
        })  
      }
      
    })

    
}

  return (
    <Main>
      <FormDiv>
        <div>
          <h1 className="display-3">{name}</h1>
          <p>Encerramento: {final_date}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {React.Children.toArray(candidates[0].map((candidate) => {
            return (
              <Radio>
                <FormGroup check>
                  <Label check>
                    <input
                      {...register("radio")}
                      type="radio"
                      id="radioInput"
                      value={candidate.id}
                      name="radio"
                    />
                    {candidate.name} <br />
                    Nascimento: {candidate.birthday} <br />
                    Endereço: {candidate.address}
                  </Label>
                </FormGroup>
                <hr />
              </Radio>
            );
          }))}
          <FormGroup>
            <Label for="cpf">Seu cpf:</Label>
            <Input
              type="text"
              {...register("cpf")}
              name="cpf"
              placeholder="Digite um cpf"
            />
          </FormGroup>
          <Submit type="submit" value="Votar" />
        </form>
      </FormDiv>
    </Main>
  );
}
