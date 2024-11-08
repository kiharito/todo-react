// import React from 'react';
import logo from './todo-app-logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="flex justify-between h-14 items-center px-4">
        <img src={logo} className="size-24 h-6" alt="logo" />
        <p>kihara</p>
      </div>
      <div className='max-w-xl mx-auto'>
        <div>
          <h1 className="text-3xl">Register New Task</h1>
          <input className='rounded h-12 w-96' placeholder='Enter your task'></input>
          <button>Register</button>
        </div>
        <div className='max-w-xl'>
          <h1 className="text-3xl">Tasks</h1>
          <ul className='flex'>
            <li className='w-24 text-center'>Todo</li>
            <li className='w-24 text-center'>Done</li>
            <li className='w-24 text-center'>All</li>
          </ul>
          <ul>
            <li className='flex'>
              <p>ベンチプレス</p><button>Complete</button>
            </li>
            <li className='flex'>
              <p>ベンチプレス</p><button>Complete</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
