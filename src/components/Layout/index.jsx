import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from "react-router";
import { currentUser } from "../../redux/auth/operations";
import Loading from "../Loading";

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const token = useSelector(state=>state.auth.token);
  const dispatch = useDispatch();
  useEffect(()=>{
    (
      async()=>{
        try{
          await dispatch(currentUser(token));
        }catch(err){
          console.log(err);
        }finally{
          setIsLoading(false);
        }
      }
    )()
  },[])

  return (
    <div>
      {isLoading && <Loading/>}
      {!isLoading && <main>
        <Outlet />
      </main>}
    </div>
  );
};

export default Layout;
