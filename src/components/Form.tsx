import React, { useState } from 'react';

type FormProps = {
  type: 'new' | 'returning';
  name?: string;
  setName?: (s: string) => void;
  email?: string;
  setEmail?: (s: string) => void;
  pass?: string;
  setPass?: (s: string) => void;
};


function Form(props: FormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  async function submit(event) {
    event.preventDefault();

    setIsLoading(true);
    const url = props.type === 'new' ? 'http://localhost:3000/users' : 'http://localhost:3000/users/logon';
    
    const data: any = {
        email: props.email,
        password: props.pass
    }

    if (props.type === 'new') {
        data.name = props.name;
    }
    
    const body = JSON.stringify({ user: data }) 
    const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body
    });

    const status = res.status;
    const payload = await res.json();

    console.log({ payload });

    switch(status) {
      case 200: {
        break;
      };
      case 201: {
        break;
      };
      case 401: {
        break;
      };
      default: {
        break;
      };
    }


  }
  return (
    <form onSubmit={submit}>
      {props.type === 'new' && (
        <fieldset>
          <label>Name</label>
          <input
            type="text"
            placeholder="Name"
            value={props.name}
            onChange={(e) => props?.setName && props.setName(e.target.value)}
          />
        </fieldset>
      )}
      <fieldset>
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            value={props.email}
            onChange={(e) => props?.setEmail && props.setEmail(e.target.value)}
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={props.pass}
            onChange={(e) => props?.setPass && props.setPass(e.target.value)}
          />
        </fieldset>

        <button type="submit">Log In</button>
    </form>
  );
}

export default Form;