<template>
  <div class="sidebar">


    <!-- <sidebar-item :routes="siderbar_routers.children"></sidebar-item> -->

    <Menu ref="">
      <template v-for="item in siderbar_routers.children">
        <template v-if="item.children && item.children.length === 1">
          <SidebarItem v-if="showChildren(item)" :key="`menu-${item.name}`"></SidebarItem>
          <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`"><common-icon :type="item.children[0].icon || ''"/><span>{{ showTitle(item.children[0]) }}</span></menu-item>
        </template>
        <template v-else>
          <SidebarItem v-if="showChildren(item)" :key="`menu-${item.name}`"></SidebarItem>
          <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`"><common-icon :type="item.icon || ''"/><span>{{ showTitle(item) }}</span></menu-item>
        </template>
      </template>
    </Menu>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
import mixin from './mixin';
import { showTitle } from "@/utils/util";

export default {
  name: "sidebar",
  mixins: [ mixin ],

  components: { SidebarItem },
  computed: {
    ...mapGetters(["siderbar_routers"])
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle("open");
    }
  },
  mounted () {
    console.log(this.siderbar_routers);
  }
};
</script>

<style lang="css" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  background: #ccc;
  float: left;
}

.nav-link {
  cursor: pointer;
}
</style>
