import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs'
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

createServer({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return[
        {
          id: 1,
          title: 'Futebol',
          amount: 10,
          type: 'deposity',
          category: 'lazer',
          createdAt: new Date()
        }
      ]
    })
  }
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
