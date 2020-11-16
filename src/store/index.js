import { createStore } from 'vuex'

export default createStore({
  state: {
    articulos: [
      {
          id: 0,
          nombre: 'Iphone 8 ',
          imagen: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1564083513793',
          imagen2: 'https://c0.wallpaperflare.com/preview/699/948/962/space-gray-iphone-8-plus-on-brown-case.jpg',
          descripcion: {
              fecha: 'Lanzamiento: Septiembre 2017',
              peso: 'PESO:202g',
              espesor: 'ESPESOR:7.5mm',
              memoria: 'MEMORIA:64GB',
              pantalla: 'PANTALLA:5.5″1080×1920 pixels',
              camara: '1CAMARA:12MP 2160p',
              RAM: 'MEMORIA RAM:3GB',
              procesador:'PROCESADOR:Apple A11 Bionic',
              bateria: 'BATERIA:2691mAhLi-Ion'
          },
          precio: 80000
      },
      {
          id: 1,
          nombre: 'iPhone X',
          imagen: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992',
          imagen2: 'https://www.dhresource.com/0x0s/f2-albu-g4-M01-5D-2B-rBVaEFmg8wCAQv5oAAB0IeTfpFc659.jpg/full-protective-case-for-iphone-x-tpu-acrylic.jpg',
          descripcion: {
              fecha: 'Lanzamiento Noviembre 2017',
              peso: 'Peso 174 gramos',
              espesor: 'Espesor  7.7mm ',
              memoria: 'Memoria interna 64/256GB No Expandible',
              pantalla: 'Pantalla de 5.8″',
              camara: 'Camara Principal 12MP',
              RAM: 'Memoria Ram 3GB',
              procesador:'procesador Apple A11 (6 núcleos)',
              bateria: 'Bateria 2716mAh Li-Ion'
          },
          precio: 140000
      },
      {
          id: 2,
          nombre: 'iPhone 11',
          imagen: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144418',
          imagen2: 'https://cdn.shopify.com/s/files/1/0289/7061/4843/products/XR9DHD.jpg?v=1596039826',
          descripcion: {
              fecha: 'Lanzamiento septiembre 2019',
              peso: 'Peso 194 g',
              espesor: 'Espesor  8,3 mm ',
              memoria: 'Memoria interna 128 GB',
              pantalla: 'Pantalla de 6,1"',
              camara: 'Camara Principal 12MP',
              RAM: 'Memoria Ram 4 GB',
              procesador:'procesador Chip A13 Bionic',
              bateria: 'Carga rápida 18W (cargador no incluido)'
          },
          precio: 190000
      }
  ]
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].cantidad ++
    },
    reiniciar(state){
      state.frutas.forEach((elemento)=>{
        elemento.cantidad=0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
