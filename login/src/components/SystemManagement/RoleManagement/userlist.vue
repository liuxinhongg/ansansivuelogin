<template>
    <div id="userlist">
      <div class="left_1">
        <div class="title">
            <div class="title_1">角色列表</div>
        </div>
          <div class="Add_15">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
            </div>
      

        <!--添加弹出框-->
        <el-dialog title="添加角色" :visible.sync="Addition" width="30%">
            <span>
                <el-form :model="tableData1" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                   <el-form-item label="角色" prop="name" :rules="[
                      { required: true, message: '请填写角色', trigger: 'blur' }

                  ]">
                        <el-input v-model="tableData1.name"></el-input>
                    </el-form-item>
                      <el-form-item label="备注信息" prop="remarks">
                        <el-input   type="textarea"  v-model="tableData1.remarks"></el-input>
                    </el-form-item>
                   
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!-- 修改角色信息 -->
                <el-dialog title="修改信息"  :visible.sync="xiugai" width="30%">
            <span>
                <el-form :model="tableData2" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                   <el-form-item label="角色" prop="name" :rules="[
                      { required: true, message: '请填写角色', trigger: 'blur' }

                  ]">
                        <el-input v-model="tableData2.name"></el-input>
                    </el-form-item>
                      <el-form-item label="备注信息" prop="remarks">
                        <el-input   type="textarea" v-model="tableData2.remarks"></el-input>
                    </el-form-item>
                   
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="yes">修 改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <el-table :data="tableData" style="width: 95%;margin: auto;">
            <el-table-column prop="name" label="角色">
            </el-table-column>
            <el-table-column prop="remarks" label="备注信息">
            </el-table-column>
          <el-table-column
              fixed="right"
              label="修改"
              width="50">
               <template slot-scope="scope">
                     <span class="glyphicon glyphicon-pencil text-warning" @click="Jurisdiction(scope.row)"></span> 
                </template>
            </el-table-column>
                      <el-table-column
              fixed="right"
              label="删除"
              width="50">
               <template slot-scope="scope">
                   <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>
           <el-table-column
              fixed="right"
              label="设置权限"
              width="80">
               <template slot-scope="scope">
                 <span class="el-icon-setting" @click="handleEdit(scope.row)"></span>
                </template>
            </el-table-column>
        </el-table>

              <div class="fenye_2">
        <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="1"
      layout="prev, pager, next, jumper"
      :total="totalPage">
    </el-pagination>
  </div>
  </div>
  <div class="right_1" v-show="hide">
    <user-Tree></user-Tree>

  </div>
    </div>
</template>

<script>
import userTree from "./userTree";
export default {
  name: "userlist",
  data() {
    return {
      hide:false,
      uid: "",
      juid:"",
      options: [],
      Addition: false,
      hand: false,
      xiugai:false,
      currentPage:1,
      totalPage:+"",
      tiao:"10",
      yeshuo:"1",
      rules: {
        name: [
          { required: true, message: "姓名", trigger: "blur" }
          //          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        number: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ]
      },

      tableData: [ ],
      tableData1: {},
      tableData2: {}
    };
  },
   components: {
    "user-Tree": userTree,
  },

  mounted() {
       var that = this;
        that.axios
          .get("/apis/admin/role/pageList", {
            params: {
              page: that.yeshuo,
              pageSize:that.tiao,
              menuId: that.uid
            }
          })
          .then(function(response) {
            console.log(response.data);
            that.totalPage=response.data.totalPage,

            that.tableData = response.data.rows;
          });

  },
  methods: {
    list(){
       var that = this;
        that.axios
          .get("/apis/admin/role/pageList", {
            params: {
              page: that.yeshuo,
              pageSize: that.tiao,
              menuId: that.uid
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
             that.totalPage=response.data.totalPage,
            that.tableData = response.data.rows;
          });

    },
     //修改弹框取消按钮
    cancel(){
      this.xiugai=false
      this.list()
       
    },
    //修改按钮
    Jurisdiction(row){
      var that =this
       that.xiugai=true
      that.juid=row.id
     
    that.tableData2=row
        
    },
    //修改弹框确定按钮
    yes(){
      var that =this
      that.xiugai=false
      that.axios
       
          .get("/apis/admin/role/update", {
            params: {
             name:that.tableData2.name,
             remarks:that.tableData2.remarks,
             id:that.juid
             
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
              that.list()
          });

    },
    //删除
        handleDelete(row) {
                 var that =this
      that.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
           that.axios
          .get("/apis/admin/role/delete", {
            params: {
              id:row.id,
            }
          })
          .then(function(response) {
             that.list()
            
          });
          
          that.$message({
            
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //分页
    handleSizeChange(val) {
     
      this.tiao=` ${val} `
       this.list()
    },
    handleCurrentChange(val) {
       this.yeshuo=`${val}`
        this.list()
    },

    childMethod() {
      bus.$on("show", data => {
        console.log(data.id);
        this.uid = data.id;
      });
    
    },
    Addit() {
      this.Addition = true;
      if (JSON.stringify(this.tableData1)!=="{}") {
        this.tableData1={};
      }
    
    },
    //添加
    add() {
        var that = this;
      that.Addition = false;
         
        that.axios
          .get("/apis/admin/role/add", {
            params: {
             name:that.tableData1.name,
             remarks:that.tableData1.remarks,
            }
          })
          .then(function(response) {
            that.list()


          });
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      this.hand = false;
      this.tableData = [];
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleEdit(row) {
      if(row.name=='超级管理员'){
      	
      	this.$confirm('超级管理员权限不允许设置', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      	
      }else{
      	bus.$emit("Permissiontree", [{ id:row.id },{title:row.name}]);
            this.hide = true;
      }
       
    },

  },
  created() {
    // this.getCompanyData();
  }
};
</script>

<style>
#userlist{
  height: 100%;
}
.left_1{
  width: 75%;
  height: 500px;
  border: 1px solid #ccc;
  float: left;
  position: relative;
}
.title_1{
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    
}
.title {
  width: 100%;
  height: 50px;
  background: #5b9bd5;
  color: #fff;
  margin-bottom: 10px;
}
.compa {
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
.overlay .con {
  position: absolute;
  width: 420px;
  min-height: 300px;
  background: #fff;
  left: 50%;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  /*margin-top: -150px;*/
  padding: 20px;
}
.LaborServiceCompany {
  width: 120px;
}
.SearchBox {
  height: 40px;
  float: left;
  margin-left: 8%;
}
.Search {
  float: left;
  line-height: 40px;
  font-size: 14px;
}
.Box {
  width: 134px;
  float: left;
}
.Add_15 {
  float: right;
  margin-top: -1%;
  margin-right: 20px;
  margin-bottom: 10px;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}
.right_1{
  width: 20%;
  height: 100%;
  float: left;
  margin-left: 1%;
  min-height: 750px;
}
.fenye_2{
  position: absolute;
  right: 0px;
  bottom: 1%;
}

</style>