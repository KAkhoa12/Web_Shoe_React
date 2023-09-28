import server from './axios'
import { IProduct } from '../interfaces/interfaces'
export const GetAllProduct = async (): Promise<any> => {
    try {
        const { data } = await server.get('/Product/GetAllProduct')
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}
export const GetAllProductByType = async ({ typeName }: { typeName: string }): Promise<any> => {
    try {
        const { data } = await server.get(`/Product/GetAllProductByType?typeName=${typeName}`)
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}
export const GetAllAllProductByProducer = async ({ producer }: { producer: string }): Promise<any> => {
    try {
        const { data } = await server.get(`/Product/GetAllAllProductByProducer?producer=${producer}`)
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}
export const GetProductsById = async ({ _id }: { _id: string | undefined }): Promise<any> => {
    try {
        const { data } = await server.get(`/Product/GetProductsById?_id=${_id}`)
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}

export const CreateProduct = async (
    {
        comments,
        description,
        images,
        numberOfComments,
        price,
        proName,
        proTypeName,
        producer,
        star,
        isDelete
    }: IProduct): Promise<void> => {
    try {
        await server.post('/Product/CreateProduct', {
            comments,
            description,
            images,
            numberOfComments,
            price,
            proName,
            proTypeName,
            producer,
            star,
            isDelete
        })
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}

export const UpdateProductById = async (
    {  comments,
        _id,
        description,
        images,
        numberOfComments,
        price,
        proName,
        proTypeName,
        producer,
        star,
        isDelete }: IProduct): Promise<any> => {
    try {
        await server.put(`/Product/UpdateProductById?_id=${_id}`, {
            _id,
            comments,
            description,
            images,
            numberOfComments,
            price,
            proName,
            proTypeName,
            producer,
            star,
            isDelete
        })
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}
export const RemoveUserById = async ({ _id }: { _id: string }): Promise<any> => {
    try {
        const { data } = await server.put(`/Product/ProductById?_id=${_id}`)
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}
