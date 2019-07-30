<template>
  <div id="top-nav">
    <div id="top-logo">
      <div>
        <b-navbar toggleable="lg" type="light" variant="light">
          <b-navbar-brand href="#"><img src="../../static/chorda-logo.svg" /></b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template slot="button-content"><em>User</em></template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
    <div class="top-divider"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style>
.top-divider {
  width:100%;
  height:2px;
  background-color:black;
  margin:0px 10px 10px 10px;
}
</style>
