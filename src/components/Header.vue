<template>
  <div class="headerWrap">
    <div class="headerLogo">Logo</div>
    <div class="headerMenu">
      <svg-icon icon-class="dashboard" />
      <!-- :icon-class="item.meta.icon" -->
    </div>
    <div class="headerSide"></div>
    <!-- headerWrap -->
    
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
.headerWrap {
  height: $h;
  background: #515a6e;
  // position: relative;
  margin-top: -50px;
  // padding-left: 15px;
  line-height: 50px;
  color: aliceblue;
  display: flex;
 
  .headerLogo {
    width: 200px;
    padding-left: 20px;
    height: $h;
    
    // float: left;
  }
  .headerMenu {
    flex: 1;
    height: $h;
    padding: 0 15px;
    display: inline-block;
  }
  .headerSide {
    width: 200px;
    height: $h;
    
  }
}
</style>
