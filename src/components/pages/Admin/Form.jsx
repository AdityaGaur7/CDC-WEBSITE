import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navi = useNavigate();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const setAdmin = (e) => {
    e.preventDefault();
    // console.log(user, password);
    if(user==='adgaur027@gmail.com' &&  password === '123')
    navi('/admin/addcerti');
  else navi('/error');
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="p-8 rounded h-1/2 shadow-md w-40 md:w-1/2 lg:w-1/3 text-center mx-auto" style={{height:'50vh'}}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Username"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            onClick={setAdmin}
            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
