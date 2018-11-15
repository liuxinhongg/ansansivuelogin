<template>
    <div id="BlacklistEnterprises">
       <div class="right_55">
         <Black-list>
         </Black-list>

       </div>
       <router-view></router-view>

    </div>
</template>

<script>
import Blacklis from "./Blacklis";
export default {
  name: "BlacklistEnterprises",
  data() {
    return {
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },

    childMethod() {
      bus.$on("show", data => {
        console.log(data.id);
        this.uid = data.id;
      });
    }
  },
  components: {
    "Black-list": Blacklis
  }
};
</script>

<style>
.fenye {
  position: absolute;
  right: 0px;
  bottom: 1%;
}
#project {
  width: 100%;
  height: 100%;
}
.left {
  width: 20%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  margin-left: 1%;
  margin-top: 1%;
  border-radius: 10px;
  overflow: hidden;
}
.right_55 {
  width: 100%;
  height: 400px;
  float: left;
}
</style>
