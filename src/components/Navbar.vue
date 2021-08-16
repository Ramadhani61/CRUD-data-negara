<template>
<div>
  <b-navbar type="dark" variant="dark">
    <div class="container">
    <b-navbar-nav>
      <b-nav-item href="/">Beranda</b-nav-item>

      <!-- Navbar dropdowns -->

      <b-nav-item-dropdown text="Data Negara" right>
        <b-dropdown-item href="/chart">Lihat Chart</b-dropdown-item>
      
      </b-nav-item-dropdown>
    </b-navbar-nav>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style>

</style>