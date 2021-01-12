<template>
    <div>
        <div class="container">
          <div class="row mt-5">
            <h3>Voce esta vendo as noticias do: {{ championship }}</h3>
          </div>
        </div>

        <router-view></router-view>

        <div class="container">
          <div class="row my-club mt-5">
            <div class="col-6">
              <h2>Seu clube é: {{ myClub }}</h2>
            </div>
            <div class="col-6">
              <HcodeInput />
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import HcodeInput from './HcodeInput'
import { mapGetters } from 'vuex'

export default {
  components: {
    HcodeInput
  },
  data() {
    return {
      
    }
  },
  props: {
    currentComponent: String
  },
  computed: {
    ...mapGetters({
      championship: 'getChampionship',
      myClub: 'getClubName'
    })
    // Essa é uma maneira de usar o STATE do VUEX
    // ...mapState(['championship']),
    // ...mapState({
    //   myClub: 'clubName'
    // })
  }
}
</script>

<style lang="scss" scoped>

</style>
