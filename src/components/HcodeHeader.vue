<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand">
                <a href="#" class="link navbar-brand mr-auto">
                    <img src="./../assets/logo.svg" alt="Logo Hcode" class="img d-inline-block align-top" id="logo"> Futebol Clube
                </a>
                <div class="links mr-2">
                    <router-link class="btn mr-5" to="/">Inicio</router-link>
                    <router-link class="btn mr-5" to="/news">Noticias</router-link>

                    <!-- <a href="#" @click.prevent="$emit('change-component', 'home')" class="btn mr-5">Inicio</a>
                    <a href="#" @click.prevent="$emit('change-component', 'news')"  class="btn mr-5">Noticias</a> -->
                    <a href="#" class="btn mr-5">Classificaçoes</a>

                    <select name="championship" id="select-championship" class="form-control" @change="$emit('select-championship', $event.target.value)">
                        <option value="" disabled>Selecione um campeoneto</option>
                        <option value="Campeonato Brasileiro">Campeonato Brasileiro</option>
                        <option value="Campeonato Espannhol">Campeonato Espannhol</option>
                        <option value="Campeonato Ingles">Campeonato Ingles</option>
                        <option value="Campeonato Frances">Campeonato Frances</option>
                    </select>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>

</script>

<style lang="scss" scoped>
header {
    background-color: #333;

    #logo {
        width: 150px;
        height: 100%;
    }
    .links {
        display: inline-flex;

        a {
            color: #FFF;
            &:focus {
                outline: none !important;
                box-shadow: none !important;
            }
            &:hover {
                color: #D48E23;
            }
        }
        .link-active {
            background-color: #D48E23;
            &:hover {
                color: #333;
            }
        }
    }
    .link {
        color: #D48E23;
        font-size: 30px;
        font-family: 'Rajdhani';
    }
}
</style>
