import axios from 'axios';
import { useState, useRef } from 'react';

const backendURL = import.meta.env.VITE_BACKEND_URL;

const AddProduct = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [file, setFile] = useState(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const [message, setMessage] = useState(false);
  const timeoutRef = useRef(null);

  const addToStore = async (e) => {
    e.preventDefault();

    if (timeoutRef) {
      clearTimeout(timeoutRef.current);
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('category', category);
    formData.append('price', price);
    formData.append('quantity', quantity);
    formData.append('unit', unit);
    fileInputRef.current.value = null;
    setName('');
    setCategory('');
    setPrice('');
    setQuantity('');
    setUnit('');

    try {
      await axios
        .post(`${backendURL}/store/add`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'x-auth-token': localStorage.getItem('token'),
          },
        })
        .then(() => {
          setSuccess(true);
          setMessage(true);

          timeoutRef.current = setTimeout(() => {
            setMessage(false);
          }, 3000);
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
      setSuccess(false);
      setMessage(true);

      timeoutRef.current = setTimeout(() => {
        setMessage(false);
      }, 3000);
    }
  };

  const renderMessage = () => {
    return (
      <p
        className={`text-center transition-opacity duration-500 ease-in shake ${
          success ? 'text-green-500 opacity-100' : 'text-red-500 opacity-100'
        }`}
      >
        {success ? 'Product added successfully' : 'Error adding product'}
      </p>
    );
  };

  return (
    <form
      encType='multipart/form-data'
      className='max-w-[400px] w-full rounded-xl overflow-hidden shadow-lg items-center flex justify-center bg-zinc-900 cursor-pointer'
      onSubmit={addToStore}
    >
      <div className='px-6 py-4 text-white '>
        <input
          className='text-slate-300 p-3 rounded-md bg-zinc-900 shadow-sm  shadow-zinc-100 w-full text-base my-2 '
          type='file'
          ref={fileInputRef}
          name='productImage'
          onChange={(e) => {
            setFile(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
        <input
          className='text-slate-300 p-3 rounded-md bg-zinc-900 shadow-sm shadow-zinc-100 w-full text-base my-2'
          type='text'
          placeholder='Product Name'
          value={name}
          name='name'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className='text-slate-300 p-3 rounded-md bg-zinc-900 shadow-sm shadow-zinc-100 w-full text-base my-2'
          type='text'
          name='category'
          placeholder='Product Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className='flex justify-between gap-2'>
          <input
            type='text'
            placeholder='Price'
            className='text-slate-300 p-3 rounded-md bg-zinc-900 shadow-sm shadow-zinc-100 w-[100px] text-base my-2'
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type='text'
            placeholder='Quantity'
            className='text-slate-300 p-3 rounded-md bg-zinc-900 shadow-sm shadow-zinc-100 w-[100px] text-base my-2'
            value={quantity}
            name='quantity'
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            type='text'
            placeholder='Kg / litre'
            className='text-slate-300 p-3 rounded-md bg-zinc-900 shadow-sm shadow-zinc-100 w-[100px] text-base my-2'
            name='unit'
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>

        <div className='w-full'>
          <button
            className='text-white shadow-inner shadow-zinc-700 rounded-xl p-3 border-b-1 w-full border-zinc-700 border active:scale-[0.9] bg-zinc-900 my-2'
            type='submit'
          >
            Add to Store
          </button>
          <div className='p-2 '>{message ? renderMessage() : null}</div>
        </div>
      </div>
    </form>
  );
};

export default AddProduct;
