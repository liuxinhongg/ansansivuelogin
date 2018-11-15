<template>
    <div id="BlacklistEnterprises">
       <div class="right_65">
         <Blacklist-list>
         </Blacklist-list>

       </div>
       <router-view></router-view>

    </div>
</template>

<script>
import Blacklistlist from "./Blacklistlist";
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
    "Blacklist-list": Blacklistlist
  }
};
</script>

<style>
#project {
  width: 100%;
  height: 100%;
}

.right_65 {
  width: 100%;
  height: 100%;
  float: left;

}
</style>
