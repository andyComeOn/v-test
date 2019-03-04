<template>
  <div class="layoutOnePage">
    <Header></Header>
    <div class="layoutBody">
      <Slider></Slider>
      <section>
        <breadcrumb :list="list"/>
        <div class="routerView">
          <router-view></router-view>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from "@/utils/util";
import Header from '@/components/Header';
export default {
  name: "layoutOne",
  components: {
    Header
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
  height: 100%;
  // background: #ccc;
}
</style>
