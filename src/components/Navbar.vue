<template>
    <header>
        <nav class="navbar navbar-expand-lg navbar-light position-sticky">
            <h1 class="navbar-brand w-50" href="#">TuCelu</h1>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav w-100 d-flex justify-content-around">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Acerca de</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contacto</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/signup">Registrate</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/locals">Sucursales</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>