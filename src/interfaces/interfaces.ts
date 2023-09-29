export interface IUser {
    _id?: string,
    userName?: string,
    gmail?: string,
    password?: string,
    phoneNumber?: string,
    roleName?: string,
    isDelete?: number
}

export interface ICart {
    id?: string,
    userId: string,
    cartProducts: [
        {
            productId: string,
            productImages: string,
            productType: string,
            productTypeAnother?: string,
            quantity: number,
            total: number
        }
    ],
    allTotal: number
}

export interface IOrder {
    _id: string,
    userId: string,
    productsOrder: [
        {
            productId: string,
            productImages: string,
            productType: string,
            productTypeAnother: string,
            quantity: number,
            total: number
        }
    ],
    dateCreateOrder: string,
    allTotal: number,
    isDelete?: number
}

export interface IProduct {
    _id: string,
    proName: string,
    proTypeName: string,
    producer: string,
    star: number,
    description: string,
    images: [
        {
            typeName: string,
            urlCloud: [
                string
            ],
            urlLocal: [
                string
            ]
        }
    ],
    price: number,
    isDelete: number,
    numberOfComments: number,
    comments?: ICommentsContent[]
}
export interface ICommentsContent {
    userId?: string,
    username?: string,
    content: string,
    commentChild?: ICommentsContentChild[] | null
}

export interface ICommentsContentChild {
    userId?: string,
    username?: string,
    content: string,
    userRecommend: string
}
export interface IProductType {
    _id: string,
    proTypeName: string,
    isDelete: number,
    producer?: string[]
}

export interface IChildrenNavbar {
    name: string
    icons?: string
    path: string
}

export interface INavbar {
    name: string
    icon?: JSX.Element
    path: string
    children?: IChildrenNavbar[]
}

export interface IBrand {
    _id: string,
    brandName: string,
    brandImage: string,
    isDelete: number
}

export interface IListReportComments {
    _id?: string,
    idProduct?: string,
    idUserReport?: string,
    idUserIsReport?: string,
    commentReport: string,
    index: number,
    childIndex: number
}