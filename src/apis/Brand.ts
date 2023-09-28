import server from './axios'
import { IBrand } from '../interfaces/interfaces'
export const GetAllBrand = async () : Promise<any> => {
  try {
    const { data } = await server.get('/Brand/GetAllBrand')
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}



export const GetBrandById =async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.get(`/Brand/GetBrandsById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const CreateBrand = async (
  {brandImage,brandName,isDelete}:IBrand): Promise<void> => {
  try {
    await server.post('/Brand/CreateBrand', {
      brandImage,
      brandName,
      isDelete
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}

export const UpdateBrandById =async (
  {_id,brandImage,brandName,isDelete}:IBrand): Promise<any> => {
  try {
    await server.put(`/Brand/UpdateBrandById?_id=${_id}`, {
      _id,
      brandImage,
      brandName,
      isDelete
    })
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}


export const RemoveBrandById = async ({ _id }: {_id: string }): Promise<any> => {
  try {
    const { data } = await server.put(`/Brand/RemoveBrandById?_id=${_id}`)
    return data
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}
