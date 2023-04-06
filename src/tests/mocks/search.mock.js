export const searchMock={
    isloading:false,
    error:null,
    searchForm:{
        name:"",
        categoryId:"",
        min:"",
        max:"",
    },
    searched:{search:[{
        id:1,
        name:"test product",
        price:"1099",
        quantity:"20",
        expiryDate: new Date(),
        bonus:"200",
        images:["https://res.cloudinary.com/dmyztchh9/image/upload/v1681027701/ntare-website/undraw_web_developer_re_h7ie_cks4xa.svg"],
        categoryId:"2"

    }]}
}

export const noResultMock={
    isloading:false,
    error:null,
    searchForm:{
        name:"",
        categoryId:"",
        min:"",
        max:"",
    },
    searched:{search:{message:"no match found"}}
}