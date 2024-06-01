import React from 'react';
import { useState } from 'react';
import {login} from '../../features/slices/authSlice'
import { useDispatch } from 'react-redux';

const Login = () => {

    const initialState = {
        name:"",
        password:"",
        image:""
    }

    const [values, setValues] = useState(initialState);

    const onChange = (e) => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };
    
    const dispatch = useDispatch()

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96">
        <div className="bg-gradient-to-r from-gray-300 to-gray-400 py-6 px-8 rounded-t-lg">
          <h3 className="text-red-600 text-2xl font-bold mb-4">Sign In</h3>
        </div>
        <div className="bg-white py-8 px-8 rounded-b-lg">
          <input
            type="text"
            name='name'
            value={values.name}
            onChange={onChange}
            placeholder="Name"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name='password'
            placeholder="Password"
            value={values.password}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />
            <input
            type="text"
            name='image'
            placeholder="Image url address"
            value={values.image}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
          />
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Remember Me</span>
          </label>
          <button 
          onClick={() => dispatch(login(values))}
          className="w-full bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold py-2 mt-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50">
            Sign In
            </button>
          <p className="text-center text-sm text-blue-gray-500 mt-6">
            Don't have an account?
            <a href="#signup" className="ml-1 font-semibold text-blue-gray-700">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
