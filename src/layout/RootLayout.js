import React from 'react'
import MainNavigation from './MainNavigation'
import { Outlet } from 'react-router-dom'
import { userDataLoader } from '../config/auth';

const RootLayout = () => {

  // const data = userDataLoader();
  // console.log('data: ', data);

  return (
    <>
      <MainNavigation />
      {/* RootLayout의 children들이 Outlet으로 렌더링됨 */}
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout