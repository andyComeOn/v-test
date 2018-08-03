<template>
	<div class="hello">

		<li style="margin-bottom:15px;">
			{{info}}
		</li>

		<div @click="getInfo">点击点击</div>
	</div>
</template>

<script>
import { getCookie, setCookie } from '@/utils/util';
export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "Welcome to Your Vue.js App",
            info: ""
        };
    },
    methods: {
        getInfo() {
            // 情况一
            // let tl = getCookie("userInfoTel");
            // if(tl){
            // 	this.info = "yes";
            // }

            // 情况二
            if (getCookie("userInfoTel")) {
                this.info = "yes";
            }
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>