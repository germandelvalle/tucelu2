<template>
    <div>
        <menu class="menu">

        <form id="formulario" class="menu__form" action="show_data.html">

            
            <section>
                <h2 style="margin-bottom: 50px;">
                    Registrate
                </h2>
            </section>
            


            <label for="firstname">Nombre:</label><input type="text" name="firstname" placeholder="Ingrese su nombre aqui">
            <label for="lastname">Apellido:</label><input type="text" name="lastname" placeholder="Ingrese su apellido aqui">
            <label for="email">Direccion e-mail:</label><input type="email" name="email">
            <label for="city">Ciudad:</label><input type="text" name="city">
            <label for="zipcode">Codigo Postal:</label><input type="number" name="zipcode">
            <label for="birthdate">Fecha de nacimiento (mm/dd/yyyy):</label><input type="date" name="birthdate">
            
            <label>Genero</label>  
            <section style="margin-bottom: 20px;">
                <input type="radio" name="gender" value="hombre" checked="">Hombre
                <input type="radio" name="gender" value="mujer">Mujer
                <input type="radio" name="gender" value="otro">Otro
            </section>

            
            <label>Estudios:</label>
            <section style="margin-bottom: 20px;">
                <input type="checkbox" name="conocimientos" value="primario">Primarios
                <input type="checkbox" name="conocimientos" value="secundario">Secundarios
                <input type="checkbox" name="conocimientos" value="terciarios">Terciarios
                <input type="checkbox" name="conocimientos" value="universitarios">Universitarios
                <input type="checkbox" name="conocimientos" value="otro">Otro
            </section>

            <router-link class="btn btn-light" to="/showdata">Enviar</router-link>
            <p>Al pulsar "Enviar" acepta los terminos y condiciones</p>
        </form>
    </menu>
    </div>
</template>

<script>
export default {
    name: 'Signup'
}
</script>