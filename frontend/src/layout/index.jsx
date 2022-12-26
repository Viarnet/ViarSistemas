import { Outlet } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Auth/AuthContext";
import { Login } from "../pages/Login";
import SideMenu from "../components/SideMenu";
import { Loading } from "../components/Loading";

export function Layout (){
    const auth = useContext(AuthContext);
    
    if(auth.loading){
        return <Loading />
    }

    if(auth.user){
        return (
            <>
                <SideMenu />
            </>
        )
    }else return <Login />

}