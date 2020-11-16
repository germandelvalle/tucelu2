<template>
    <div>
        <article class="menu__article">
        <img class="menu__article--image" :src="producto.imagen" alt="">
        <section class="menu__article--description">

            <h2>{{producto.nombre}}</h2>
            <ul>
                <li>{{producto.descripcion.fecha}}</li>
                <li>{{producto.descripcion.peso}}</li> 
                <li>{{producto.descripcion.espesor}}</li> 
                <li>{{producto.descripcion.memoria}}</li> 
                <li>{{producto.descripcion.pantalla}}</li> 
                <li>{{producto.descripcion.camara}}</li> 
                <li>{{producto.descripcion.RAM}}</li> 
                <li>{{producto.descripcion.procesador}}</li>
                <li>{{producto.descripcion.bateria}}</li>  
            </ul>
            <h3>$ {{producto.precio}}</h3>
            <button class="buyButtom">Aniadir al carrito</button>


        </section>
        
        </article>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Product',
    computed: {
    ...mapState(['articulos'])
    },
    data(){
        return{
            producto:{},
            
        }
    },
    methods:{
        getProducto(){
            for(let i=0;i<this.articulos.length;i++){
                let ide = this.$route.params.id
                if(this.articulos[i].id == ide){
                    this.producto=this.articulos[i]
                }
            }
            
        }
    },
    beforeMount(){
        this.getProducto()
    }
}
</script>