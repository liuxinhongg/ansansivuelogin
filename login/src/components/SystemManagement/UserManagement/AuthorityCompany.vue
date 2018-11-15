<template>
    <div id="AuthorityCompany">
        <div class="title">
            <div class="title_1">用户管理</div>

        </div>
        <div class="block_1">
             <div class="user">
            <p class="userseo">用户查询</p>
            <div class="input">
                      <el-input
            placeholder="请输入用户名"
            v-model="Userquery"
            size="mini"
            clearable>
          </el-input>
          </div>
          </div>
             <div class="query54">
                <el-button class="bnt" :plain="true" size="small" @click="query">
                    查询
                </el-button>
            </div>
             
        </div>
        <div class="Add_44">
                <el-button class="bnt" :plain="true" size="small" @click="Addit">
                    添加
                </el-button>
            </div>

        <!--修改弹出框-->
        <el-dialog title="修改用户" :visible.sync="hand"  width="40%">
            <span>
                    <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="110px" class="demo-ruleForm">
                    <el-form-item label="用户" prop="userName" :rules="[
                      { required: true, message: '请填用户', trigger: 'blur' }

                  ]">
                        <el-input v-model="tableData2.userName"></el-input>
                    </el-form-item>
                     <el-form-item label="编号" prop="userCode"  :rules="[
                      { required: true, message: '请编号', trigger: 'blur' }

                  ]">
                        <el-input v-model="tableData2.userCode"></el-input>
                    </el-form-item>
                    <el-form-item label="手机" prop="phone" :rules="[
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 11, max: 11,  message: '请检查手机号码格式', trigger: 'blur' },

                  ]">
                        <el-input v-model="tableData2.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="telephone">
                        <el-input v-model="tableData2.telephone"></el-input>
                    </el-form-item>
                     <el-form-item label="备注" prop="remarks">
                      <el-input type="textarea" v-model="tableData2.remarks"></el-input>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData">取 消</el-button>
                <el-button type="primary" @click="modify">修  改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="新增用户信息" :visible.sync="Addition"  width="40%">
            <span>
               <el-form ref="tableData1" :model="tableData1" label-width="80px">
                     <el-form-item label="用户" prop="userName" :rules="[
                      { required: true, message: '请填用户', trigger: 'blur' }

                  ]">
                        <el-input v-model="tableData1.userName"></el-input>
                    </el-form-item>
                     <el-form-item label="编号" prop="userCode"  :rules="[
                      { required: true, message: '请编号', trigger: 'blur' }

                  ]">
                        <el-input v-model="tableData1.userCode"></el-input>
                    </el-form-item>
                    <el-form-item label="手机" prop="phone" :rules="[
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 11, max: 11,  message: '请检查手机号码格式', trigger: 'blur' },

                  ]">
                        <el-input v-model="tableData1.phone"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="telephone">
                        <el-input v-model="tableData1.telephone"></el-input>
                    </el-form-item>
                     <el-form-item label="备注" prop="remarks">
                      <el-input type="textarea" v-model="tableData1.remarks"></el-input>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!-- 设置角色 -->
        <el-dialog title="设置角色" :visible.sync="juese"  width="40%">
            <span>
               <el-form ref="tableData3" :model="tableData3" label-width="80px">
                    <el-form-item label="角色" prop="roles">
                    <el-select v-model="value" multiple   collapse-tags placeholder="请选择" style="width:60%;margin-left:-40%">
                <el-option
                  v-for="item in roleDropdown"
                  :key="item.value"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="juese = false">取 消</el-button>
                <el-button type="primary" @click="jueseadd">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <div class="ge_1">
        <el-table :data="tableData" style="width: 95%;margin: auto;">
                <el-table-column prop="userCode" label="编号" width="80">
            </el-table-column>
            <el-table-column prop="userName" :show-overflow-tooltip="true" label="用户" width="80">
            </el-table-column>
            <el-table-column prop="roles" :show-overflow-tooltip="true" label="角色" >
            </el-table-column>
            <el-table-column prop="phone" :show-overflow-tooltip="true" label="手机" width="140">
            </el-table-column>
            <el-table-column prop="telephone" :show-overflow-tooltip="true" label="电话" width="140">
            </el-table-column>
            
            <!-- <el-table-column label="修改" width="60">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span>
                </template>
            </el-table-column>
            <el-table-column label="删除"  width="60">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>
            <el-table-column label="设置角色"  width="80">
                <template slot-scope="scope">
                    <span class="el-icon-setting" @click="Jurisdiction(scope.row)"></span> 
                </template>
            </el-table-column> -->
                    <el-table-column
              fixed="right"
              label="修改"
              width="50">
               <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span>
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
              label="设置角色"
              width="80">
               <template slot-scope="scope">
                     <span class="el-icon-setting" @click="Jurisdiction(scope.row)"></span> 
                </template>
            </el-table-column>
       
        </el-table>
        </div>
      
                <div class="fenye">
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
</template>

<script>

export default {

  name: "AuthorityCompany",
  data() {
    return {
      juese:false,
      currentPage:1,    //初始第几页
      totalPage:+"", //条数 
      yeshuo:"1",    //页数
      uid: "",
      rowid:"",
      qxid:"",
      tiao:"10",
      value1:"",
      value:[],
      value2:"",
      value3:"",
      Userquery:"",
      jueseid:"",
      rowids:[],
      jsids:[],
      userName:"",
      split:"",
      jusechuan:null,
      roleDropdown:[],
      options: [],
      tableData3:{},
      Addition: false,
      hand: false,
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
       tableData2:{},

      tableData: [],
      tableData1: {},
    };
  },

  mounted() {
    bus.$on("getProject", data => {
      var that = this;
      that.uid = data.id;
      console.log( that.uid)
       
        that.axios
          .get("/apis/admin/user/pageList", {
            params: {
              page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid
            }
          })
          .then(function(response) {
            that.totalPage=response.data.totalPage
            // console.log(that.totalPage)
 
            that.tableData = response.data.rows;
        
          });
          
    });
  },
  methods: {
    //查询
    query(){

         if (this.uid=="") {
           this.$message({
          message: '查询失败！请选中左侧的部门结构后重试',
          type: 'warning'
        });
          return

      }
      console.log(this.totalPage)
      var that =this

      that.axios
          .get("/apis/admin/user/pageList", {
            params: {
              page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid,
              userName:that.Userquery,

            }
          })
          .then(function(response) {
            that.totalPage=response.data.totalPage
            // console.log(that.totalPage)
            that.tableData = response.data.rows;
        
          });

    },
    
    //设置角色按钮
    Jurisdiction(row){
      var that =this
      that.juese=true
      var array =null
      console.log(row)
      that.qxid=row.id
      that.rowids.push(row.roles)
      that.jusechuan=row.roles
      array = that.jusechuan.split(",");
      if (array[0]=="") {
        that.value=[]

      } else{
         console.log(array)
      that.value= array

      }
      
            
    },
     //角色列表
    Systemrole(){
        var that =this
        
            that.axios
          .get("/apis/front/public/roleList", {
            params: {
            }
          })
          .then(function(response) {
           
            that.roleDropdown = response.data.rows;
             console.log(that.roleDropdown);

          });

    },
    //列表
    list(){
      var that =this

      that.axios
          .get("/apis/admin/user/pageList", {
            params: {
              page: that.yeshuo,
              pageSize: that.tiao,
              departmentId:that.uid
            }
          })
          .then(function(response) {
            that.totalPage=response.data.totalPage
            console.log(that.totalPage)
 
            that.tableData = response.data.rows;
        
          });


    },
    //角色添加
    jueseadd(){
       var that =this
      
        var array =that.value
        var str = "";
        for (let i = 0; i < array.length; i++) {
          str +=array[i]+",";
          
        }
        if (str.length > 0) {
        str = str.substr(0, str.length - 1);
        
    }
     that.jueseid=str
     console.log()
     that.juese=false
        that.axios
          .get("/apis/admin/user/saveRoleSet", {
            params: {
              userId:that.qxid,
              roleIds:that.jueseid,
            }
          })
          .then(function(response) {
             that.list()

          });

      

    },
    //分页
    handleSizeChange(val) {
      
      this.tiao=`${val}`
      this.list()
    },
    handleCurrentChange(val) {
        this.yeshuo=`${val}`
         this.list()

    },

    childMethod() {
      bus.$on("AuthorityTree", data => {
        console.log(data.id);
        this.uid = data.id;
      });

    
    },
    //添加按钮
    Addit() {
        if (this.uid=="") {
           this.$message({
          message: '请选中左侧的部门结构后重试添加',
          type: 'warning'
        });
          return

      }

      if (JSON.stringify(this.tableData1)!=="{}") {
        this.tableData1={};
      }
      this.Addition = true;
   
     
    
    },
  
    //添加
    add() {
      var that =this
      that.Addition = false;
     
        that.axios
          .get("/apis/admin/user/add", {
            params: {
              userName:that.tableData1.userName,
              userCode:that.tableData1.userCode,
              phone:that.tableData1.phone,
              telephone:that.tableData1.telephone,
              password:that.tableData1.password,
              remarks:that.tableData1.remarks,
              departmentId:that.uid,
            }
          })
          .then(function(response) {
             console.log(response)
             that.list()

          });

               that.axios
          .get("/apis/front/public/loadUserIdAndRoleId")
          .then(function(response) {
           console.log(response)
             
          });
    

    },
    //修改
    modify(){
      var that =this
      that.hand=false;
      
        this.axios
          .get("/apis/admin/user/update", {
            params: {
              id:that.rowid,
              userName:that.tableData2.userName,
              roles:that.value,
              userCode:that.tableData2.userCode,
              phone:that.tableData2.phone,
              telephone:that.tableData2.telephone,
            }
          })
          .then(function(response) {
            console.log(response.data);
            that.list()
              
          });

    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      this.hand = false;
      this.list()
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
    //修改按钮
    handleEdit(row) {
       this.hand = true;
      var that =this
        that.axios
          .get("/apis/front/public/roleList")
          .then(function(response) {
            // console.log(response.data.rows);
            that.options = response.data.rows;
            
            console.log(that.options)
          });
      this.tableData2 = row;
      
      that.rowid=row.id
     
    },
    handleDelete(row) {
                 var that =this
      that.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
           that.axios
          .get("/apis/admin/user/delete", {
            params: {
              id:row.id,
            }
          })
          .then(function(response) {
            
           if ( response.data.code==1) {
                  
           that.list()        
          that.$message({
            type: "success",
            message: "删除成功!"

          });

             
           }   
              
          });
  
        
       
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.Systemrole()
        
   
  }
};
</script>

<style>
.query54{
  width: 60px;
  float: right;
  margin-right: 50%;
  line-height: 40px;
  
}
.ge_1{
  height:420px;
}
.user{
  width: 280px;
  float: left;
  margin-left: 5%;
  line-height: 40px;
}
.userseo{
  float: left;
  margin-right: 10px;
}
.title_1 {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
}
.title {
  width: 100%;
  height: 50px;
  background: #5b9bd5;
  color: #fff;
  margin-bottom: 20px;
}
.compa {
  width: 95%;
  margin: auto;
  margin-top: 20px;
}
.details {
  width: 10%;
  display: inline-block;
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
.Add_44 {
  float: right;
  margin-right: 30px;
}
.block_1 {
  width: 100%;
  height: 40px;
  float: left;
  margin-bottom: 5px;
}
.input{
  width: 200px;
  float: left;
}
.fenye {
  position: absolute;
  right: 0px;
  bottom: 1%;
}
</style>