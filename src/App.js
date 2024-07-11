import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './config/route-config';

// 라우터 코드 따로 옮겨서 리펙토링 - route-config.js

const App = () => {
  
  return (
    <RouterProvider router={router} />
  );
};

export default App;
