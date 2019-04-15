<template>
  <div class="layoutOnePage">
    <mHeader></mHeader>
    <div class="layoutBody">
      <mSider></mSider>
      <section>
        <!-- <breadcrumb :list="list"/> -->
        <div class="routerView">
          <router-view></router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from "@/utils/util";
import mHeader from '@/components/Header';
import mSider from '@/components/Sidebar';
export default {
  name: "layoutOne",
  components: {
    mHeader,
    mSider
  },
  data() {
    return {};
  },
  methods: {
    fetchData() {},
    getInfo() {},
    getLocation() {},
    postData() {}
  }
};
</script>

<style lang="scss" scoped>
.layoutOnePage {
  width: 100%;
  height: 100vh;
  position: relative;
  padding-top: 50px;
  box-sizing: border-box;
  overflow-y: hidden;
  .layoutBody {
    height: 100%;
    display: flex;
    flex-direction: row;
    section {
      flex: 1;
      height: 100%;
      // overflow: auto;
      background-color: #f0f2f5;
      .routerView {
        height: 100%;
        overflow: auto;
      }
    }
  }
}
</style>
