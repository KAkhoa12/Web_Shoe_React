import React, { createContext, useCallback, useEffect, useState } from 'react';
import server from '../apis/axios';
import { IUser } from '../interfaces/interfaces';
import useFetch from '../hooks/useFetch';
import { GetInfoUser } from '../apis/User';

export interface IAuthContext {
    profile?: IUser;
    setProfile?: React.Dispatch<React.SetStateAction<any>>;
}

export const AuthContextWrap = createContext<IAuthContext>({
  profile: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setProfile:()=>{}
});

export default function AuthProvider({ children }: any): JSX.Element {
  const [profile, setProfile] = useState<IUser | undefined>(undefined);
  const [getInfoUser,callGetInfoUser] = useFetch();
  const contextValue: IAuthContext = {
    profile,
    setProfile
  };
  useEffect(()=>{
    callGetInfoUser(GetInfoUser)
  },[])
  useEffect(()=>{
    setProfile(getInfoUser?.payload)
  },[getInfoUser?.loading])
  return (
    <AuthContextWrap.Provider value={contextValue}>
      {children}
    </AuthContextWrap.Provider>
  );
}