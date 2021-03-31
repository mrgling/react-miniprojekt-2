export interface Product {
    name: string
    url: string
    description: string
    price: number
    img: string
}

export const mockedProducts: Product[] = [ 
    {
        name:'Soltält', 
        url: 'soltalt',
        description: 'Ett härligt tält med ananasmönster passar perfekt för att söka skydd från solen en varm sommardag. Plats för minst tre marsvin.',
        price: 459,
        img: 'https://i.imgur.com/7pIdBXDl.jpg'
    },
    {
        name: 'Hö',
        url: 'ho',
        description: 'Marsvinets bästa vän! Hö är en viktig del av marsvinets diet, och går dessutom utmärkt att gömma sig i och sova under. En bal motsvarar 120 liter prima ängshö.',
        price: 99,
        img: 'https://i.imgur.com/x24LGfa.jpg'
    },
    {
        name:'Myskorg kiwi', 
        url: 'myskorg-kiwi',
        description: 'Stilfull myskorg i mjukaste fleece, formad som en kiwiskiva. FRUKTansvärt fin!',
        price: 399,
        img: 'https://i.etsystatic.com/7165241/r/il/178e41/579811693/il_794xN.579811693_ne72.jpg'},
    
    {
        name: 'Lektunnel',
        url: 'tunnel',
        description: 'En flexibel tunnel att springa runt i.',
        price: 199,
        img: 'https://www.omlet.us/images/originals/Guinea-pig-tunnel-playpen-run.jpg'
    },
    {
        name:'Marsvinsrustning', 
        url: 'rustning',
        description: 'Exklusiv handgjord ringbrynja med matchande hjälm. En självklar accessoar till medeltidsveckan!',
        price: 199999,
        img: 'https://i.imgur.com/DRInboh.jpg'},
    
    {
        name: 'Fluffig myskorg',
        url: 'myskorg',
        description: 'Vem vill inte sjunka ner i en rosa myskorg dekorerad med fluffiga enhörningar?',
        price: 299,
        img: 'https://cdn.shopify.com/s/files/1/1338/9237/products/guineapigwheekly-5_1024x.jpg?v=1602972185'
    },
    {
        name:'Tomteluva', 
        url: 'tomteluva',
        description: 'Nu är det kallt ute och risk för snuva. Låt ditt marsvin värma sig med denna luva',
        price: 99,
        img: 'https://ae01.alicdn.com/kf/HTB1YMrFcn0ATuJjSZFEq6yp2FXar.jpg_q50.jpg'},
    
    {
        name: 'Korv',
        url: 'korv',
        description: 'OBS ej gjord av marsvin!',
        price: 5,
        img: 'https://productimages.biltema.com/v1/image/imagebyfilename/49-388_xxl_1.jpg'
    }

]