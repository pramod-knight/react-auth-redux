import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import SpinLoader from '../loader/spin.loader';
import ProfilePage from '../../views/profile';
import SettingPage from '../../views/setting';
import PageNotFound from '../../views/page404';


export default function ProtectedRoute() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <Routes>
          <Route
            path={`/profile`}
            element={<ProfilePage />}
            />
          <Route
            path={`/setting`}
            element={<SettingPage />}
            />
          <Route
            path={`/404`}
            element={<PageNotFound />}
            />
        </Routes>
      </Suspense>
    </>
  )
}
