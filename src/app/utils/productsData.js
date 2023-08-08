
//! Creating a JSON that will contain our data for products that we will use :)
//* From description we see that we need image,name of product, short description,price
//* rating (stars),but also it will be good to have id because of reacts key prop,
//* i will add also discount prop,and some filtering props

export const productData = [ 
  
    {
        id:1,
        title:'First',
        description:'This is short description',
        category:'Donuts',
        price:3.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
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
        Filtering:{Color:'blue',Useful:false},
        image:'/Coffee/1.webp',
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
        Filtering:{Color:'red',Useful:false},
        image:'/Coffee/3.webp',
        rating:'****',
        Instock:9,
 
     },
     {
        id:4,
        title:'Forth',
        description:'This is short description',
        category:'Donuts',
        price:6.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:"green",Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:5,
        title:'Forth',
        description:'This is short description',
        category:'Coffee',
        price:6.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:6,
        title:'Forth',
        description:'This is short description',
        category:'Donuts',
        price:16.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:7,
        title:'Forth',
        description:'This is short description',
        category:'Donuts',
        price:6.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:8,
        title:'Forth',
        description:'This is short description',
        category:'Donuts',
        price:56.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:9,
        title:'Forth',
        description:'This is short description',
        category:'Donuts',
        price:6.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:10,
        title:'Forth',
        description:'This is short description',
        category:'Biscuits',
        price:8.88,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:11,
        title:'Forth',
        description:'This is short description',
        category:'Coffee',
        price:16.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
        id:12,
        title:'Forth',
        description:'This is short description',
        category:'Donuts',
        price:46.99,
        isDiscounted:false,        
        discount:0,        
        Filtering:{Color:'purple',Useful:false},
        image:'/Coffee/4.webp',
        rating:'****',
        Instock:12,
 
     },
     {
      id:13,
      title:'Forth',
      description:'This is short description',
      category:'Donuts',
      price:46.99,
      isDiscounted:false,        
      discount:0,        
      Filtering:{Color:'purple',Useful:false},
      image:'/Coffee/4.webp',
      rating:'****',
      Instock:13,

   },

]

//! Creating category List that is for testing At the moment
export const categoryList = [
  
    {
        id:1,
        name:'',
        title:'All',
        img:'/Coffee/1.webp',
        
    },
    {
        id:2,
        name:'Coffee',
        title:'Coffee',
        img:'/Coffee/2.webp',
    },
    {
        id:3,
        name:'Donuts',
        title:'Donuts',
        img:'/Coffee/3.webp',
    },
    {
        id:4,
        name:'Biscuits',
        title:'Biscuits',
        img:'/Coffee/4.webp',
    },


]