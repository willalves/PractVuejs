<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-5 text-center principal-news">
                    <h2>Veja os ultimos resultados</h2>
                </div>
                <div class="col-5 offset-2 text-center principal-news">
                    <h2>Venha conhecer o centro de treinamento da Hcode</h2>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
section {
    margin-top: 25px;

    .container {
        .row {
            height: 300px;
            
            .col-5:first-child {
                background-color: rgba($color: #000000, $alpha: .5);
                background-image: url('../assets/football.jpg');
                background-repeat: no-repeat;
                background-size: 100%;
            }
            .col-5:nth-child(2) {
                background-color: rgba($color: #000000, $alpha: .5);
                background-image: url('../assets/football2.jpg');
                background-repeat: no-repeat;
                background-size: 100%;
            }
            h2 {
                margin: 25% 0;
                color: #F6B64E;
                background-color: rgba($color: #000000, $alpha: .4);
                padding: 10px;
            }
            .principal-news {
                cursor: pointer;
            }
        }
    }
}
</style>
