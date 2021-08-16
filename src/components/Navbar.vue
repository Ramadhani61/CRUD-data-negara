<template>
<b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
    <b-navbar-brand href="/">Data</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
 
      <!-- Right aligned nav items -->
      <b-navbar-nav>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
              <em>Data Negara</em>
          </template>
          <b-dropdown-item href="/chart">Lihat Grafik</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style>

</style>