import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux'
import { LoginUser } from '../redux/slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import background from '../background.png'
const Login = () => {
  const {isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  useEffect(()=>{
    if(isAuth){
      navigate('/')
    }
  },[isAuth])
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: {  } } = useForm();
  const onSubmit = (data) => {
    dispatch(LoginUser(data))
  };
  return (
    <div className='background'>
      <img src={background}/>
    <div className='login'>
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="email" placeholder="email" {...register("email", {})} />
    <input type="password" placeholder="password" {...register("password", {})} />
    <input type="submit" />
  </form>
  </div>
  </div>
  )
}

export default Login