<template>
  <div class="headerWrap">
    <div class="logoWrap">
      <img class="logo" src="../assets/images/qiuguologo.png" alt="">
      </div>
    <ul class="headerMenu">
      
      <li>
        <router-link
          to='/'
          class="nav-link"
        >
          首页
        </router-link>
      </li>
      <li>

        <router-link
          to='/layout2'
          class="nav-link"
        >
          集团
        </router-link>
      </li>

    </ul>
    <div class="headerSide"></div>

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

  .logoWrap {
    width: 200px;
    padding-left: 20px;
    height: $h;

    position: relative;
    .logo {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .headerMenu {
    flex: 1;
    height: $h;
    padding: 0 15px;
    text-align: right;
    li {
      width: 100px;
      height: $h;

      margin-right: 5px;
      // background: tan;
      float: left;
      &:hover {
        background: #363e4f;
      }
      a {
        display: block;
        text-align: center;
        line-height: $h;
        color: white;
      }
    }
  }
  .headerSide {
    width: 200px;
    height: $h;
  }
}
</style>
