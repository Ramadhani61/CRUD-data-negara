<template>
  <div class="home">
    <Navbar/>
    <tabelpemesan/>
  </div>
</template>
<script>

 
import Navbar from '@/components/Navbar.vue'
import tabelpemesan from '@/components/tabelpemesan.vue'

export default {
  name: 'Home',
  components: {
       Navbar,
    tabelpemesan
  }
}
</script>
