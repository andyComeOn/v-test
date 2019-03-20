<template>
  <div class="headerPage">
    <div class="headerLogo">Logo</div>
    <div class="headerMenu">
      <svg-icon icon-class="dashboard" />

      <!-- :icon-class="item.meta.icon" -->
    </div>
    <!-- headerPage -->
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$h: 50px;
.headerPage {
  height: $h;
  background: #515a6e;
  // position: relative;
  margin-top: -50px;
  padding-left: 15px;
  line-height: 50px;
  color: aliceblue;
  .headerLogo {
    width: 200px;
    height: $h;
    display: inline-block;
    // float: left;
  }
  .headerMenu {
    
    height: $h;
    padding: 0 15px;
    display: inline-block;
  }
}
</style>
