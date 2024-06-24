import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

// interface FormData {
//   description: string;
//   amount: number;
//   category: CategoryEnum;
// }

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description must be at least 3 characters.' }),
  amount: z
    .number({ invalid_type_error: 'Amount is required.' })
    .min(5, { message: 'Amount must be at least 5.' }),
  category: z.enum(['groceries', 'utilities', 'entertainment'], {
    errorMap: () => ({ message: 'Please select a category.' }),
  }),
});

type FormData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    alert('Form submitted successfully.');
  };

  return (
    <form className='form' onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group mb-3'>
        <label htmlFor='description' className='form-label'>
          Description
        </label>
        <input
          {...register('description')}
          className='form-control'
          type='text'
          name='description'
          id='description'
        />
        {errors.description && (
          <p className='text-danger'>{errors.description.message}</p>
        )}
      </div>
      <div className='form-group mb-3'>
        <label htmlFor='amount' className='form-label'>
          Amount
        </label>
        <input
          {...register('amount', { valueAsNumber: true })}
          className='form-control mb-3'
          type='number'
          name='amount'
          id='amount'
        />
        {errors.amount && (
          <p className='text-danger'>{errors.amount.message}</p>
        )}
      </div>
      <div className='form-group mb-3'>
        <label htmlFor='category' className='form-label'>
          Category
        </label>
        <select
          {...register('category')}
          name='category'
          id='category'
          className='form-select'
        >
          <option value=''></option>
          <option value='groceries'>Groceries</option>
          <option value='utilities'>Utilities</option>
          <option value='entertainment'>Entertainment</option>
        </select>
        {errors.category && (
          <p className='text-danger'>{errors.category.message}</p>
        )}
      </div>
      <button disabled={!isValid} type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
