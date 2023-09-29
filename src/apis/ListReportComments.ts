import server from './axios'
import { IListReportComments } from '../interfaces/interfaces'

export const PostReportComment = async (
  {childIndex,commentReport,idProduct,idUserIsReport,idUserReport,index}:IListReportComments): Promise<void> => {
  try {
    await server.post('/ListReportComments/PostReportComment', {childIndex,commentReport,idProduct,idUserIsReport,idUserReport,index})
  } catch (error: any) {
    const message = error?.response?.data?.message ?? error.message
    throw new Error(message)
  }
}
