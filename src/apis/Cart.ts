import server from './axios'
import { ICart } from '../interfaces/interfaces'
export const GetAllCart = async () : Promise<any> => {
  try {
    const { data } = await server.get('/Cart/GetAllCart')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const GetCartByUserId =async ({ uid }: {uid: string }): Promise<any> => {
  try {
    const { data } = await server.get(`/Cart/GetCartByUserId?UserId=${uid}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const CreateCart = async (
  {allTotal,cartProducts,userId}:ICart): Promise<void> => {
  try {
    await server.post('/Cart/CreateCart', {
      allTotal,
      cartProducts,
      userId
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const UpdateCartById =async (
  {allTotal,cartProducts,userId,id}:ICart): Promise<any> => {
  try {
    await server.put(`/Cart/UpdateCart?UserId=${userId}`, {
      id,
      allTotal,
      cartProducts,
      userId
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}


export const RemoveCartById = async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.put(`/Cart/RemoveCartById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}
