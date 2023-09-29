import server from './axios'
import { IUser } from '../interfaces/interfaces'
export const GetAllUser = async () : Promise<any> => {
  try {
    const { data } = await server.get('/User/GetAllUser')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const GetInfoUser = async () : Promise<any> => {
  try {
    const { data } = await server.get('/User/GetInfoUser')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}


export const GetAllUserByRoleName =async ({ rolename }: {rolename: string }): Promise<any> => {
  try {
    const { data } = await server.get(`/User/GetAllUsersByRoleName?roleName=${rolename}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const GetAllUserById =async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.get(`/User/GetUsersById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const CreateUser = async (
  {gmail,password,phoneNumber,roleName,userName,isDelete}:IUser): Promise<void> => {
  try {
    await server.post('/User/CreateUser', {
      gmail,
      password,
      phoneNumber,
      roleName,
      userName,
      isDelete
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const UpdateUserById =async (
  {_id,gmail,password,phoneNumber,roleName,userName,isDelete}:IUser): Promise<any> => {
  try {
    await server.put(`/User/UpdateUserById?_id=${_id}`, {
      _id,
      gmail,
      password,
      phoneNumber,
      roleName,
      userName,
      isDelete
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}


export const RemoveUserById = async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.put(`/User/RemoveUserById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const LogoutUser = async () : Promise<any> => {
  try {
    const { data } = await server.get('/User/LogoutUser')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}
