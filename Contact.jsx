import React from 'react'
import { useForm } from 'react-hook-form';
import  axios  from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      username : data.username,
      email : data.email,
      message : data.message
    }
    try {
      await axios.post('https://getform.io/f/awngmneb', userInfo);
      toast.success("Your message has been sent");
      
    }
    catch (error) {
      console.log(error);
      toast.error("Something went wrong")
      
    }
  }
  return (
    <>
      <div name = "Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-4'>Contact Me</h1>
        <p>Please fill out the form below to contact me</p>
        <div className='flex flex-col justify-center items-center shadow-md rounded-md mt-6 w-fit m-auto p-4 bg-gray-300 px-10'>
          <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}
            // method='POST'
          // action='https://getform.io/f/awngmneb'
          >
                <h1 className='text-xl font-bold mb-2'>Send Your Message</h1>
                <label htmlFor="">Full Name</label>
            <input {...register("username", { required: true })} className='outline-none p-2 px-5 rounded-md' name='username' type="text" />
            {errors.name && <span className='text-red-500'>This field is required</span>}
            <br />

                <label htmlFor="">Email Address</label>
            <input {...register("email", { required: true })} className='outline-none py-2 px-5 rounded-md' name='email' type="email" />
            {errors.email && <span className='text-red-500'>This field is required</span>}
            <br />

                <label htmlFor="">Message</label>
            <textarea {...register("message", {required: true })} className='rounded-md outline-none p-4' name='message' placeholder='Type your message here' id=""></textarea>
            {errors.message && <span className='text-red-500'>This field is required</span>}
            <br />
                <div>
                <button className='bg-black text-white p-1 px-4 rounded-md hover:bg-slate-700 duration-200'>Send</button>
                </div>
            </form>
        </div>
      </div>
      <hr />
    </>
  )
}

export default Contact
