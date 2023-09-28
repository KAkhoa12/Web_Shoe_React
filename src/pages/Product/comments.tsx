import React, { useState } from 'react'
import ImgTest from "../../assets/images/name_shoe/Adidas/Adidas-4D-FUSIO-4tr2/giay-4d-fusio-fy3609-king-shoes-sneaker-real-hcm-1-1634377536.jpg"
import { AlertCircleOutline, SendOutline, ArrowRedoOutline } from 'react-ionicons'
import { ICommentsContent, ICommentsContentChild, IProduct } from '../../interfaces/interfaces'
import useFetch from '../../hooks/useFetch'
import useAuth from '../../hooks/useAuth'
import { UpdateProductById } from '../../apis/Product'
import imgUser from "../../assets/images/user.png"

interface IComments {
    product?: IProduct
    hasChange: () => void;
}



const Comments = ({ ...props }: IComments): JSX.Element => {
    const [content, setContent] = React.useState<string>('');
    const [contentChild, setContentChild] = React.useState<any>({
        index: -1,
        userNameRecomment: ''
    });
    const { profile } = useAuth()
    const [isContentChild, setIsContentChild] = React.useState<string>('');
    const [updateProduct, callupdateProduct] = useFetch();
    const [listComments, setListComments] = useState<ICommentsContent[]>([]);


    const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
        setIsContentChild('')
        setContentChild({
            index: -1,
            userNameRecomment: ''
        })
    }

    const handleChangeContentChild = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsContentChild(e.target.value)
        setContent('')
    }

    const handleGetInfoContentChild = (index: number, userNameRecomment: string | undefined): void => {
        setContentChild(
            {
                index: index,
                userNameRecomment: userNameRecomment
            }
        )
        setContent('')
    }
    const handleSubmitContentChild = (): void => {
        setIsContentChild("")
        setContentChild({
            index: -1,
            userNameRecomment: ''
        })


        if (props.product && props.product.comments && isContentChild !== '') {
            const newCommentChild = {
                userId: profile?._id,
                username: profile?.userName,
                userRecommend: contentChild.userNameRecomment,
                content: isContentChild,
            };
            if (listComments[contentChild.index].commentChild === null) {
                const newCommentChildInnit: ICommentsContentChild = {
                    content: '',
                    userRecommend: "",
                    userId: "",
                    username: ""
                }
                listComments[contentChild.index].commentChild = [newCommentChildInnit]
            }
            console.log(newCommentChild)
            listComments[contentChild.index].commentChild?.push(newCommentChild)
            const requestData: IProduct = {
                ...props.product,
                comments: [...listComments]
            }
            callupdateProduct(
                async () => {
                    try {
                        await UpdateProductById(requestData);
                        props.hasChange();
                        console.log("Thêm thành công");
                    } catch (error) {
                        console.log(error);
                    }
                }
            )
        }
    }

    const handleSubmitContent = (): void => {
        setContent('');
        setContentChild({
            index: -1,
            userNameRecomment: ''
        })
        if (props.product && props.product.comments && content !== '') {
            const newComment = {
                userId: profile?._id,
                username: profile?.userName,
                content: content,
            };

            const requestData: IProduct = {
                ...props.product,
                comments: [
                    ...listComments,
                    {
                        userId: profile?._id,
                        username: profile?.userName,
                        content: content,
                    }
                ],
            }

            setListComments(prevComments => [...(prevComments || []), newComment]);

            callupdateProduct(
                async () => {
                    try {
                        await UpdateProductById(requestData);
                        props.hasChange();
                        console.log("Thêm thành công");
                    } catch (error) {
                        console.log(error);
                    }
                }
            )
        }
    }
    const handleKeyPressEnter = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
            if(contentChild.index !== -1){
                handleSubmitContentChild()
            }else{
                handleSubmitContent()
            }
        }
    };
    React.useEffect(() => {
        if (props.product?.comments) {
            setListComments(props.product.comments);
        }
    }, [props.product]);
    return (
        <div
            style={{
                position: "relative",
            }}
        >
            <div
                
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    height: "500px",
                    overflowY: "scroll",
                    paddingBottom:"70px"
                }}
            >

                {
                    listComments.length === 0    ? (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "25px",
                                fontWeight: "bold",
                                height:"100%"
                            }}
                        >
                            Chưa có bình luận nào cho sản phẩm này
                        </div>
                    ) : (
                        listComments?.map((item: ICommentsContent, index: number) => (
                            <div
                                key={index}

                            >
                                <div

                                >
                                    <div
                                        style={{
                                            padding: "10px",
                                            margin: "5px",
                                            borderRadius: "5px",
                                            display: "inline-flex",
                                        }}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                            }}
                                        >
                                            <img src={imgUser} style={{ height: "50px", width: "50px", borderRadius: "50%" }} alt="" />
                                        </div>
                                        <div
                                            style={{
                                                fontSize: "20px",
                                                marginLeft: "5px",
                                                display: "flex",
                                                borderRadius: "3px",
                                                alignItems: "flex-start",
                                                gap: "10px",
                                                flexDirection: "column",
                                                backgroundColor: "#f0f0f0",
                                                padding: "10px"
                                            }}
                                        >
                                            <span style={{ fontSize: "22px", fontWeight: "bold", color: "#f7484a" }}>{item?.username}</span>
                                            <div style={{

                                            }}>
                                                {item.content}
                                                <span className='setting-comments-report'>
                                                    <AlertCircleOutline
                                                        color={'#000000'}
                                                    />
                                                </span>
                                                <span
                                                    onClick={(): void => handleGetInfoContentChild(index, item.username)}
                                                    className='setting-comments-report'
                                                >
                                                    <ArrowRedoOutline
                                                        color={'#000000'}
                                                    />
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    {
                                        contentChild.index === index && (
                                            <div >
                                                <span
                                                    style={{
                                                        marginLeft: "70px",
                                                        fontSize: "18px",
                                                        fontWeight: "bold",
                                                        color: "#f7484a"
                                                    }}
                                                >
                                                    Phản hồi về {contentChild.userNameRecomment}
                                                </span>
                                                <div
                                                    style={{
                                                        display: "flex",
                                                        gap: "10px",
                                                        margin: "0 70px"
                                                    }}
                                                    onKeyDown={handleKeyPressEnter}
                                                >
                                                    <input
                                                        value={isContentChild}
                                                        type='text'
                                                        style={{ width: "100%", fontSize: "22px", height: "35px", padding: "0 10px" }}
                                                        placeholder='Nhập bình luận tại đây'
                                                        onChange={handleChangeContentChild}
                                                    />
                                                    <button
                                                        onClick={handleSubmitContentChild}
                                                        style={{ border: "none", }}><SendOutline color={'#000000'} />
                                                    </button>

                                                </div>
                                            </div>

                                        )
                                    }

                                </div>
                                {
                                    item?.commentChild !== undefined ? (
                                        item?.commentChild?.filter((r: ICommentsContentChild) => r.content !== "").map((childComment: ICommentsContentChild, childIndex: number) => (
                                            <div key={childIndex} style={{ marginLeft: "70px" }}>
                                                <div
                                                    style={{
                                                        padding: "10px",
                                                        margin: "5px",
                                                        borderRadius: "5px",
                                                        display: "inline-flex",
                                                    }}
                                                >
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                        }}
                                                    >
                                                        <img src={imgUser} style={{ height: "50px", width: "50px", borderRadius: "50%" }} alt="" />
                                                    </div>
                                                    <div
                                                        style={{
                                                            fontSize: "20px",
                                                            marginLeft: "5px",
                                                            display: "flex",
                                                            borderRadius: "3px",
                                                            alignItems: "flex-start",
                                                            gap: "10px",
                                                            flexDirection: "column",
                                                            backgroundColor: "#f0f0f0",
                                                            padding: "10px"
                                                        }}
                                                    >
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "10px"
                                                            }}
                                                        >
                                                            <span style={{ fontSize: "22px", fontWeight: "bold", color: "#f7484a" }}>
                                                                {childComment?.username}
                                                            </span>
                                                            <span>phản hồi</span>
                                                            <span style={{ fontSize: "17px", fontWeight: "bold", color: "#f7484a" }}>
                                                                {childComment?.userRecommend}
                                                            </span>

                                                        </div>
                                                        <div style={{

                                                        }}>
                                                            {childComment.content}
                                                            <span className='setting-comments-report'>
                                                                <AlertCircleOutline
                                                                    color={'#000000'}
                                                                />
                                                            </span>
                                                            <span
                                                                onClick={(): void => handleGetInfoContentChild(index, childComment.username)}
                                                                className='setting-comments-report'
                                                            >
                                                                <ArrowRedoOutline
                                                                    color={'#000000'}
                                                                />
                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        null
                                    )
                                }

                            </div>
                        ))
                    )
                }

            </div>
            <div 
                onKeyDown={handleKeyPressEnter}
            style={{
                width: "100%",
                display: "flex",
                gap: "10px",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0"
            }}>
                <input
                    value={content}
                    type='text'
                    style={{ width: "100%", fontSize: "22px", height: "35px", padding: "0 10px" }}
                    placeholder='Nhập bình luận tại đây'
                    onChange={handleChangeContent}
                />
                <button
                    onClick={handleSubmitContent}
                    style={{ border: "none", }}><SendOutline color={'#000000'} /></button>
            </div>
        </div>
    )
}
export default Comments
