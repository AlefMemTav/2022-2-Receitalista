import { useState } from 'react'
import Input from "../Input/Input"
import SubmitButton from "../Button/SubmitButton"

import classes from './Form.module.css'
import axios from '../../api/axios';

function ProfileForm(props) {
  const [account, setAccount] = useState({email:props.user.email, value: props.user.price_per_hour});

  const submit = async (e) => {
    e.preventDefault()
    console.log(account);

    if(!account.email){
      alert("O campo Trocar email não pode estar vazio!");
    }

    else {
      await axios.put("/user/update", {name: null, email: account.email, price_per_hour: account.value, password: null },{headers: { "Authorization": `Bearer ${localStorage.getItem('acess_token')}`} })
      .then(response => {
        console.log(response);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  function handleChange(e) {
    setAccount({ ...account, [e.target.name]: e.target.value })
  }

  

  return (
    <form onSubmit={submit} className={classes.form}>

      <Input
        type="email"
        text="Trocar email"
        name="email"
        placeholder="Insira o novo email"
        handleOnChange={handleChange}
        value={account.newEmail ? account.newEmail : account.email}
      />

      <Input
        type="number"
        min="1"
        text="Alterar mão de obra"
        name="value"
        placeholder="Insira novo valor da mão de obra"
        handleOnChange={handleChange}
        value={account.newValue ? account.newValue : account.value}
      />

      <SubmitButton text="Enviar" />
    </form>

  )
}

export default ProfileForm