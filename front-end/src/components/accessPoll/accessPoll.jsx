import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormGroup, Label, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "./accessPoll.css";
import api from "../../defaults/api";
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
          console.log(element);
          if(element.cpf === cpf){
            navigate('/')
          }else{
            api.post('Voter/'+radio, {
              cpf
            })
            .then(({data})=>{
                console.log(data);
                navigate("/resultPoll",{state:{
                    data, poll:state.data
                }})
            })
          }
  
        });  
      }else{
        api.post('Voter/'+radio, {
          cpf
        })
        .then(({data})=>{
            console.log(data);
            navigate("/resultPoll",{state:{
                data
            }}) 
        })  
      }
      
    })

    
}

  return (
    <main className="main">
      <div className="form">
        <div>
          <h1 className="display-3">{name}</h1>
          <p>Encerramento: {final_date}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {candidates[0].map((candidate) => {
            return (
              <div className="radio">
                <FormGroup check>
                  <Label check>
                    <input
                      key={candidate.id}
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
              </div>
            );
          })}
          <FormGroup>
            <Label for="cpf">Seu cpf:</Label>
            <input
              type="text"
              {...register("cpf")}
              id="input"
              name="cpf"
              placeholder="Digite um cpf"
            />
          </FormGroup>
          <input id="btn" type="submit" value="Votar" />
        </form>
      </div>
    </main>
  );
}
