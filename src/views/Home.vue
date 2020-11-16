<template>
  <div class="menu__products">

    <!-- <Cabecera></Cabecera>
    <lista></lista> -->
    <Article
    v-for="articulo of articulos" :key="articulo.id"
    :articulo="articulo"
    ></Article>
  </div>
</template>

<script>
// @ is an alias to /src
// import Cabecera from '../components/Cabecera'
// import Lista from '../components/Lista.vue'
import Article from '@/components/Articulo'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components:{
    Article
  },
  computed: {
    ...mapState(['articulos'])
  },

}
</script>
