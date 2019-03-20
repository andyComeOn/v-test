<template>
  <div class="sidebar">
    <!-- <sidebar-item :routes="siderbar_routers.children"></sidebar-item> -->
    <Menu ref="" width="200" theme="dark">
      <template v-for="(item, index) in menuList">
        <template v-if="!item.children">
          <MenuItem :name="item.name" :to="item.path">{{item.meta.title}}</MenuItem>
        </template>
        <template v-else>
          <Submenu :name="item.name">
            <template slot="title">
              <!-- <Icon type="ios-paper" /> -->
              <svg-icon icon-class="dashboard" />
              {{item.meta.title}}
            </template>
            <template v-for="(itemSon, indexSon) in item.children">
              <template v-if="!itemSon.children">
                <MenuItem :name="itemSon.name" :to="item.path+'/'+itemSon.path">{{ itemSon.meta.title }}</MenuItem>
              </template>
              <template v-else>
                <Submenu :name="itemSon.name">
                  <template slot="title">
                    <Icon type="ios-paper" />
                    {{itemSon.meta.title}}
                  </template>
                  <template v-for="(itemGrandson, indexGrandson) in itemSon.children">
                    <MenuItem :name="itemGrandson.name" :to="item.path+'/'+itemSon.path+'/'+itemGrandson.path">{{ itemGrandson.meta.title }}</MenuItem>
                  </template>
                </Submenu>  
              </template>
            </template>
          </Submenu>
        </template>
      </template>
    </Menu>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem";
import { mapGetters } from "vuex";
import mixin from "./mixin";
import { showTitle } from "@/utils/util";
import { a, b } from "./m";

export default {
  name: "sidebar",
  mixins: [mixin],

  components: {
    // SidebarItem
  },
  data() {
    return {
      menuList: [],
      temp: {
        age: 1,
        w: [1, 2]
      },
      userMap: {
        a: 123,
        b: 567
      }
      
    };
  },
  computed: {
    ...mapGetters(["siderbar_routers"])
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
      e.target.parentElement.classList.toggle("open");
    },

    aa() {
      if (true) {
        console.log(1289989);
      }
      return false;
    }
  },
  mounted() {
    console.log(this.siderbar_routers);
    this.menuList = this.siderbar_routers.children;
    const { c } = this.temp;
    // console.log(c);
    // console.log(a, b);
    console.log(this.userMap['b'])
    console.log(this.userMap.a)
  }
};
</script>

<style lang="css" scoped>
.sidebar {
  width: 200px;
  height: 100%;
  /* background: #ccc; */
  /* float: left; */
}

.nav-link {
  cursor: pointer;
}
</style>
