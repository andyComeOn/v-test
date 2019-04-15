<template>
  <div class="guestPage">guestPage
    <svg-icon icon-class="qq" />
    <Button type="primary" icon="ios-search">Search</Button>
    <Button type="primary" icon="ios-download-outline" >Download</Button>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.guestPage {
  height: 1000px;
  background: #ccc;
  // color: aqua;
}

// .ivu-btn /deep/ .ivu-icon-ios-search:before {
//   // content: "\F2A7";
//   content: "\F1B1";

// }

.ivu-btn /deep/ .ivu-icon-ios-search:before {
  // content: "\F2A7";   // 本来是search，现在我改了生效
  content: "\F1B1";   // 现在我改了生效,变成了下载

}
</style>
