
//! Creating a JSON that will contain our data for products that we will use :)
//* From description we see that we need image,name of product, short description,price
//* rating (stars),but also it will be good to have id because of reacts key prop,
//* i will add also discount prop,and some filtering props

export const productData = [ 
  
    {
        id:1,
        title:'First',
        description:'This is short description',
        category:'Donut',
        price:3.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:[{Color:'purple'},{Useful:false},],
        image:'/Coffee/1.webp',
        rating:'****',
        Instock:4,
 
     },
     {
        id:2,
        title:'Second',
        description:'This is short description',
        category:'Coffee',
        price:4.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:[{Color:'blue'},{Useful:false},],
        image:'/Coffee/2.webp',
        rating:'****',
        Instock:7,
 
     },
     {
        id:3,
        title:'Third',
        description:'This is short description',
        category:'Coffee',
        price:5.99,
        isDiscounted:true,        
        discount:20,        
        Filtering:[{Color:'purple'},{Useful:true},],
        image:'/Coffee/3.webp',
        rating:'****',
        Instock:9,
 
     },
     {
        id:4,
        title:'Forth',
        description:'This is short description',
        category:'Donut',
        price:6.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:[{Color:'purple'},{Useful:false},],
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },

]

//! Creating category List that is for testing At the moment
export const categoryList = [
    {
        id:1,
        title:'Donuts',
        img:'/Coffee/1.webp'
    },
    {
        id:2,
        title:'Coffe',
        img:'/Coffee/2.webp'
    },
    {
        id:3,
        title:'Cake',
        img:'/Coffee/3.webp'
    },
    {
        id:4,
        title:'Biscuits',
        img:'/Coffee/4.webp'
    },


]