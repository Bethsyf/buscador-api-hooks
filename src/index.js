import React from 'react';
import ReactDOM from 'react-dom/client';
import 'antd/dist/antd.css';
import CategoriesApp from './components/categoriesApp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoriesApp/>    
  </React.StrictMode>
);