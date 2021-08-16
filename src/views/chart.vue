<template>
  <div>
    <Navbar/>
  
  
  <div class="row">
    <div class="col-md-6">
        <negara/>
    </div>
    <div class="col-md-6">
        <bahasa/>
    
  </div>
  </div>
  </div>
</template>
<script>

 
import Navbar from '@/components/Navbar.vue'
import negara from '@/components/negara.vue'
import bahasa from '@/components/bahasa.vue'
import axios from 'axios'


const http=axios.create()

export default {
  name: 'chart',
  components: {
       Navbar,
       negara,
       bahasa,
     
  },
  mounted(){
    http.get('http://localhost:3000/users').then(response=>{
      this.$store.commit('SET_LIST',response.data)
    })

    },
  }

</script>