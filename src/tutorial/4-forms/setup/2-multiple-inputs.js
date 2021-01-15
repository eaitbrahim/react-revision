import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
  const [person, setPerson] = useState({firstName: '', age: '', email:''});
  const [people, setPeople] = useState([]);

  const {firstName, email, age} = person;
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setPerson(prevPerson => ({...prevPerson, [name]: value}));
  };
  const handleSubmit =(e) =>{
    e.preventDefault();
    if(firstName && email && age){
    const newPerson = {...person, id: new Date().getTime().toString()};
    setPeople(prevPeople => ([...prevPeople, newPerson]));
    setPerson({firstName: '', age: '', email:''});}
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={age}
              onChange={e => handleChange(e)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
