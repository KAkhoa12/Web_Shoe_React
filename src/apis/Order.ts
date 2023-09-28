import server from './axios'
import { IOrder } from '../interfaces/interfaces'
export const GetAllOrder = async (): Promise<any> => {
    try {
        const { data } = await server.get('/Order/GetAllOrder')
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}

export const GetAllOrderByUserId = async ({ uid }: { uid: string }): Promise<any> => {
    try {
        const { data } = await server.get(`/Order/GetUsersById?UserId=${uid}`)
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}

export const CreateOrder = async (
    { allTotal, dateCreateOrder, productsOrder, userId, isDelete }: IOrder): Promise<void> => {
    try {
        await server.post('/Order/CreateOrder', {
            allTotal,
            dateCreateOrder,
            productsOrder,
            userId,
            isDelete
        })
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}

export const UpdateOrder = async (
    {_id, allTotal, dateCreateOrder, productsOrder, userId, isDelete}: IOrder): Promise<any> => {
    try {
        await server.put(`/Order/UpdateOrder?_id=${_id}`, {
            _id,
            allTotal,
            dateCreateOrder,
            productsOrder,
            userId,
            isDelete
        })
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}


export const RemoveOrder = async ({ _id }: { _id: string }): Promise<any> => {
    try {
        const { data } = await server.put(`/Order/RemoveOrder?_id=${_id}`)
        return data
    } catch (error: any) {
        const message = error?.response?.data?.message ?? error.message
        throw new Error(message)
    }
}
