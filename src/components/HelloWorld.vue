<template>
  <div class="hello">
    <div class="desc" @click="getInfo">点击点击</div>
    <div class="desc">{{ money | fixto }}</div>
    <div class="demo">
      测试scss
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from "@/utils/util";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      info: "",
      arr: ["123", "456"],
      list: [1, 2, 3, 4, 5, 6, 7, 8],
      money: "123.999"
    };
  },
  methods: {
    getInfo() {
      // 情况一
      let tl = getCookie("userInfoTel");
      if (tl) {
        console.log(1);
        this.info = "yes";
      }
    },
    kk() {
      var a = 2;
    }
  },
  filters: {
    fixto(number, n = 2) {
      let result = number.toString();
      const arr = result.split(".");
      const integer = arr[0];
      const decimal = arr[1];
      result = integer + "." + decimal.substr(0, n);
      const last = decimal.substr(n, 1);

      // 四舍五入，转换为整数再处理，避免浮点数精度的损失
      if (parseInt(last, 10) >= 5) {
        const x = Math.pow(10, n);
        result = (parseFloat(result) * x + 1) / x;
        result = result.toFixed(n);
      }

      return result;
    }
  }
};
</script>


<style lang="scss" scoped>
.desc {
  line-height: 45px;
  background: #cccccc;
}
.ul {
  height: 50px;
  background: #42b983;
}

.ul li {
  float: left;
  width: 50%;
  height: 50px;
  background: tan;
}

$primary-color: red;
.demo {
  color: $primary-color;
}
</style>
