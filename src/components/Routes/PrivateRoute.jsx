import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export default function PrivateRoute({children, redirectTo = "/"}) {

    // const {isLoggedIn, isRefreshing} = useSelector((state) => state.auth)

  return (
    <div>PrivateRoute</div>
  )
}
