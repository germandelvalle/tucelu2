<template>
    <div>
        <article class="menu__products--items">
        <img :src="articulo.imagen2" alt="/">
        <section class="menu--items__description">
            <h2>{{articulo.nombre}}</h2>

            <router-link class="menu--items__description--more" :producto="articulo" :to="{name:'Product', params:{id: articulo.id}}">ver mas</router-link>

        </section>
    </article>
    </div>
</template>

<script>
export default {
    name: 'Article',
    props: ['articulo']
}
</script>