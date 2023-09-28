import server from './axios'
import { IProductType } from '../interfaces/interfaces'
export const GetAllProductType = async () : Promise<any> => {
  try {
    const { data } = await server.get('/ProductType/GetAllProductType')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}



export const GetProductTypeById =async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.get(`/ProductType/GetProductTypeById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const CreateProductType = async (
  {proTypeName,producer,isDelete}:IProductType): Promise<void> => {
  try {
    await server.post('/ProductType/GetAllProductType', {
      proTypeName,
      producer,
      isDelete
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const UpdateProductTypeById =async (
  {_id,proTypeName,producer,isDelete}:IProductType): Promise<any> => {
  try {
    await server.put(`/ProductType/UpdateProductTypeById?_id=${_id}`, {
      _id,
      proTypeName,
      producer,
      isDelete
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}


export const RemoveProductTypeById = async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.put(`/ProductType/RemoveProductTypeById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}
