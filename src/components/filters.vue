<template>
  <div>
      <select @change="commit" v-model="gender">
          <option value="">Semua</option>
          <option value="Male">Laki-laki</option>
          <option value="Female">Perempuan</option>
      </select>
  </div>
</template>

<script>
export default {
    data(){
        return{
            gender:''
        }
    },
    methods:{
        commit(){
            this.$store.commit('SET_FILTER',this.gender)
        }
    }
}
</script>

<style>

</style>