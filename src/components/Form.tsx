import { FormEvent, useRef, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: '', age: 0 };
  // const [person, setPerson] = useState({ name: '', age: '' });
  const { register, handleSubmit } = useForm();
  console.log(register('name'));

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   // if (nameRef.current != null) person.name = nameRef.current.value;
  //   // if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
  //   // console.log(person);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        {/* <input ref={nameRef} id='name' type='text' className='form-control' /> */}
        <input
          // onChange={event => setPerson({ ...person, name: event.target.value })}
          // value={person.name}
          {...register('name')}
          id='name'
          type='text'
          className='form-control'
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        {/* <input ref={ageRef} id='age' type='number' className='form-control' /> */}
        <input
          // onChange={event => setPerson({ ...person, age: event.target.value })}
          // value={person.age}
          {...register('age')}
          id='age'
          type='number'
          className='form-control'
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
