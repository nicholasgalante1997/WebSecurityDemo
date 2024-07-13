import React, { useState } from 'react';
import Form from './Form';

function Switch({ current, set }: any) {
  return (
    <div id="switch">
      <span onClick={() => set('new')} data-active={current === 'new'}>
        New User Form
      </span>
      <span
        onClick={() => set('returning')}
        data-active={current === 'returning'}
      >
        Returning User Form
      </span>
    </div>
  );
}

function Login() {
  const [type, setType] = useState<'new' | 'returning'>('new');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="login">
      <h1>{type === 'new' ? 'Sign Up' : 'Sign In'}</h1>
      <Form
        email={email}
        setEmail={setEmail}
        name={name}
        setName={setName}
        pass={pass}
        setPass={setPass}
        type={type}
      />
      <Switch current={type} set={setType} />
    </div>
  );
}

export default Login;
