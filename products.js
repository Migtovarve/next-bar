import product1 from './public/imgs/Rectangle12.png';
import product2 from './public/imgs/Rectangle13.png';
import product3 from './public/imgs/Rectangle14.png';
import product4 from './public/imgs/Rectangle15.png';

const categories = ['Whisky','Ron','Vinos','Destilados','Licores','Otros','Ofertas',]

const product = [{
  "id": "73f8fa77-03c2-4cbc-a6c6-64a161ac2c69",
  "name": "Licor 0",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 501
}, {
  "id": "1317e128-4ba7-46f1-9ed7-5f3241049c4c",
  "name": "Licor 1",
  "image": product2,
  "price": 99.99,
  "category": "VINOS",
  "relevance": 500
}, {
  "id": "3fd9dd20-2ed8-4d79-ace7-b538716a66ab",
  "name": "Licor 2",
  "image": product3,
  "price": 99.99,
  "category": "LICORES",
  "relevance": 502
}, {
  "id": "7044aab6-bb3f-48c0-87d7-ffaa55922e51",
  "name": "Licor 1",
  "image": product4,
  "price": 99.99,
  "category": "WHISKY",
  "relevance": 88
}, {
  "id": "484b7ba3-114e-4263-8bda-869b81e19218",
  "name": "Licor 3",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 96
}, {
  "id": "27bc0929-4722-4453-bf73-7bb6f513dd53",
  "name": "Licor 1",
  "image": product2,
  "price": 99.99,
  "category": "VINOS",
  "relevance": 35
}, {
  "id": "48abdd1b-a0c7-424b-981b-7d3a9cc2edb2",
  "name": "Licor 1",
  "image": product3,
  "price": 99.99,
  "category": "LICORES",
  "relevance": 64
}, {
  "id": "97737124-0265-4ed9-9ac3-21c035cfc048",
  "name": "Licor 1",
  "image": product4,
  "price": 80.99,
  "category": "WHISKY",
  "relevance": 19
}, {
  "id": "9664a53a-c688-4cff-8920-c09b94e07669",
  "name": "Licor 4",
  "image": product1,
  "price": 10.99,
  "category": "RON",
  "relevance": 2
}, {
  "id": "1ec99273-f19e-45a3-9d92-5561ed9be24e",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 98
}, {
  "id": "518ab564-b57e-420b-a672-7a3d5a99f9d5",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 15
}, {
  "id": "5e12fd73-744b-4760-8287-85eec2f0a41f",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 89
}, {
  "id": "6068aa08-603e-4974-99b5-647541cbea69",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 86
}, {
  "id": "c13d0423-5ade-449d-9ceb-dd141ef42d33",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 79
}, {
  "id": "53f3d543-11a1-4ddb-8748-e56ca54080e7",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 14
}, {
  "id": "c085bbc4-c6a9-476d-b5b8-1813c3183b7c",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 40
}, {
  "id": "3af40ca8-d66d-494c-9a50-3a4ef6cd3a6b",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 77
}, {
  "id": "bdd9e04a-900c-452a-9adc-8191f7db3a0a",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 6
}, {
  "id": "397ba9d8-c205-4e75-a888-43a0d0d04ed6",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 34
}, {
  "id": "1c274df9-9c07-44f7-832a-cfd7aeba4fac",
  "name": "Licor 1",
  "image": product1,
  "price": 99.99,
  "category": "RON",
  "relevance": 69
},{
  "id": "s68vvdf9-9c07-44f7-832a-cfd7aeba4fac",
  "name": "Licor 1",
  "image": product3,
  "price": 99.99,
  "category": "DESTILADOS",
  "relevance": 69
},{
  "id": "26sc9df9-9c07-44f7-832a-cfd7aeba4fac",
  "name": "Licor 1",
  "image": product4,
  "price": 99.99,
  "category": "OTROS",
  "relevance": 69
}

]

export const sortRelevance = () =>{

      product.sort((a,b)=>{
        if ( a.relevance > b.relevance ){
          return 1
        }
        if(a.relevance < b.relevance) {
          return -1
        }
        return 0
      })

  return product
}

export const sortPriceMenorMayor = () =>{

        product.sort((a,b)=>{
        if ( a.price > b.price ){
          return -1
        }
        if(a.price < b.price) {
          return 1
        }
        return 0
      })
      return product

}

export const sortPriceMayorMenor = () =>{

        product.sort((a,b)=>{
        if ( a.price > b.price ){
          return 1
        }
        if(a.price < b.price) {
          return -1
        }
        return 0
      })
      return product

}

export const sortByName = () =>{

    product.sort((a,b)=>{
    if ( a.name > b.name ){
      return 1
    }
    if(a.name < b.name) {
      return -1
    }
    return 0
  })
  return product
}

export const getProductByID = (id)=>{
  const producto = product.filter((e)=>{
    return e.id === id
  })
  return producto
}

export const getCategories = () =>{
  return categories
}

export const getProducts = () =>{
  return product
}
