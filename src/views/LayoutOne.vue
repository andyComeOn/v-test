<template>
  <div class="layoutOnePage">
    <mHeader></mHeader>
    <div class="layoutBody">
      <mSlider></mSlider>
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
import mSlider from '@/components/Sidebar';
export default {
  name: "layoutOne",
  components: {
    mHeader,
    mSlider
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
  // background: #ccc;
}
</style>
