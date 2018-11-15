<template>
    <div id="Averagewage">
        <div class="title">
            <div class="title_1">最低工资标准管理</div>

        </div>
          <div class="hu">
            <div class="pht">选择地区</div>
            <div class="dijh">
                <v-distpicker :province="user.q"
                  :city="user.w"
                  province-city-area
                  :area="user.r"
                    @province="Prce"
                    @city="Cty"
                    @area="Aea"
                   >
                </v-distpicker>
            </div>
            <div class="dsa">
              <el-button  size="small" @click="query">
                    查询  
                </el-button>
              
            </div>
          </div>
            <div class="Add_45">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
        </div>

        <!--修改弹出框-->
        <el-dialog title="修改" :visible.sync="hand" width="40%">
            <span>
                    <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                  <el-form-item label="地址" prop="address">
                               <v-distpicker :province="user.xtrysf"
                         :city="user.xtrycs"
                        province-city-area
                        :area="user.xtrte"
                          @province="onChangeProvince"
                          @city="onChangeCity"
                          @area="onChangeArea"
                          style="width:100%"></v-distpicker>
                    </el-form-item>
                    <el-form-item label="平均工资" prop="avgSalary">
                        <el-input v-model="tableData2.avgSalary"></el-input>
                    </el-form-item>
                       <el-form-item label="备注" prop="remark">
                        <el-input v-model="tableData2.remark"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData">取 消</el-button>
                <el-button type="primary" :plain="true" @click="modify">修 改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="添加" :visible.sync="Addition" width="40%">
            <span>
                <el-form :model="tableData1" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                   <el-form-item label="地址" prop="address">
                               <v-distpicker :province="user.sf"
                         :city="user.s"
                        province-city-area
                        :area="user.x"
                          @province="Province"
                          @city="City"
                          @area="Area"
                          style="width:100%"></v-distpicker>
                    </el-form-item>
                    <el-form-item label="平均工资" prop="avgSalary">
                        <el-input v-model="tableData1.avgSalary"></el-input>
                    </el-form-item>
                       <el-form-item label="备注" prop="remark">
                        <el-input v-model="tableData1.remark"></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" :plain="true"  @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <div class="biaoge">
          <div class="biaoge_5">
        <el-table :data="tableData" style="width:100%;margin: auto;">
            <el-table-column prop="address" label="地区 ">
            </el-table-column>
            <el-table-column prop="avgSalary" label="最低工资">
            </el-table-column>
             <el-table-column prop="remark" label="备注">
            </el-table-column>
                 <el-table-column label="修改" width="80">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span>
                </template>
            </el-table-column>
            <el-table-column label="删除"  width="80">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>
        </el-table>
        <div class="yeshuo_06">
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
</div>
    </div>
    
</template>

<script>
export default {
  name: "Averagewage",
  data() {
    return {
      currentPage:1, 
      options1:[],
      totalPage:+"",
      uid: "",
      user:[],
      sheng:"",
      shi:"",
      xian:"",
       sheng1:"",
      shi1:"",
      xian1:"",
      region:"",
      dizhi:"",
      dizhi1:"",
      tiao:"10",
      njl:"",
      yeshuo:"1",
      options: [],
      tableData2:{},
      Addition: false,
      hand: false,
      rules: {
        name: [
          { required: true, message: "姓名", trigger: "blur" }
        ],
        number: [
          { required: true, message: "年龄不能为空" },
          { type: "number", message: "年龄必须为数字值" }
        ]
      },

      tableData: [ ],
      pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
 
      tableData1:{},
    };
  },
    created() {
    this.childMethod();
  },

  mounted() {

  },
  methods: {
 
      //地区选器
       onChangeProvince(data) {
          
      this.user.xtrysf = data.value
       this.province=this.user.xtrysf
     },
onChangeCity(data) {
      this.user.xtrycs = data.value
      this.city=this.user.xtrycs
    },
    onChangeArea(data){
      this.user.xtrte=data.value
       this.area=this.user.xtrte
    },


//添加地区
    Province(data){
      var that =this
      that.user.sf = data.value
      that.sheng= that.user.sf
        console.log(that.sheng)
      


    },
    City(data){
        var that =this
       that.user.s = data.value
       that.shi= that.user.s
         console.log(that.shi)

    },
    Area(data){
        var that =this
        that.user.x = data.value
        that.xian= that.user.x
       console.log(that.xian)
    },

   //搜索地区
      Prce(data){
       var that =this
      that.user.q= data.value
      that.sheng1= that.user.q
        console.log(that.sheng1)
    },
    Cty(data){
        var that =this
       that.user.w = data.value
       that.shi1= that.user.w
         console.log(that.shi1)

    },
    Aea(data){
      
        var that =this
        that.user.r = data.value
        that.xian1= that.user.r

       console.log(that.xian1)
    },

   //分页

    handleSizeChange(val) {
      this.tiao=` ${val}`
      this.childMethod()
      
    },
    handleCurrentChange(val) {
      this.yeshuo=` ${val}`
        this.childMethod()
    },

    childMethod() {

      var that = this;
      that.axios
        .get("/apis/admin/avgSalary/pageList", {
          params: {
            page: that.yeshuo,
            pageSize: that.tiao,
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.tableData = response.data.rows;
          that.totalPage=response.data.totalPage
        });
    },
    //添加按钮
    Addit() {
         var that =this
       if (JSON.stringify(that.tableData1)!=="{}") {
        that.tableData1={};
          that.user.sf="",
          that.user.s="",
          that.user.x=""
      
      } 
     
      

      that.Addition = true;
      
    },
    //弹框添加
    add() {
       var that = this;
          that.dizhi+=that.sheng+","+that.shi+","+that.xian

          if ( that.dizhi=="") {
            that.$message.error('地区不能为空！');

             return
            
          }

           if ( that.dizhi.substr( that.dizhi.length-6)=="省,市,区") {
        
          that.dizhi =  that.dizhi.substring(0, that.dizhi.length-6);
           that.$message.error('地区不能为空！');
          return
        
      }

           if (that.dizhi.substr(that.dizhi.length-4)==",市,区") {
        
         that.dizhi = that.dizhi.substring(0,that.dizhi.length-4);
        
      }
       if (that.dizhi.substr(that.dizhi.length-2)==",区") {
        
         that.dizhi = that.dizhi.substring(0,that.dizhi.length-2);
        
      }
        if (that.dizhi.substr(that.dizhi.length-2)==",市") {
        
         that.dizhi = that.dizhi.substring(0,that.dizhi.length-2);
        
      }
           if ( that.dizhi.substr( that.dizhi.length-2)==",,") {
         
            that.dizhi= that.dizhi.replace(/,/g,'');
         
       }else if ( that.dizhi.substr( that.dizhi.length-1)==",") {
         var reg=/,$/gi;
         that.dizhi= that.dizhi.replace(reg,"");
       }
 
      that.axios
        .get("/apis/admin/avgSalary/add", {
          params: {
             address:that.dizhi,
             remark:that.tableData1.remark,
             avgSalary:that.tableData1.avgSalary,
              
          }
        })
        .then(function(response) {
          console.log(response.data);
            that.childMethod()
            that.kong()
        });
         that.Addition = false;
    
      
     
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      var that =this
      that.hand = false;
      that.childMethod()
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
      var that =this
       that.uid=row.id
       var arr =row.address.split(",");
        that.user.xtrysf=arr[0]
         that.user.xtrycs=arr[1]
         that.user.xtrte=arr[2]
         that.tableData2 = row;

      that.hand = true;
    },
       kong(){
      var that =this
     that.region=""
     that.dizhi=""
     that.dizhi1=""
    },
    //查询
    query(){

       var that = this;
        that.dizhi1+=that.sheng1+","+that.shi1+","+that.xian1
       if (that.dizhi1=="省,市,区"||that.dizhi1=="省,,"||that.dizhi1==",市,"||that.dizhi1==",,区"||that.dizhi1=="省,市,") {
           that.dizhi1=""
          
       }

      
       if (that.dizhi1.substr(that.dizhi1.length-2)==",,") {
         
           that.dizhi1=that.dizhi1.replace(/,/g,'');
         
       }else if (that.dizhi1.substr(that.dizhi1.length-1)==",") {
         var reg=/,$/gi;
         that.dizhi1=that.dizhi1.replace(reg,"");
       }
       if (that.dizhi1.substr(that.dizhi1.length-2)==",市") {
        
         that.dizhi1 = that.dizhi1.substring(0,that.dizhi1.length-2);
        
      }
        if (that.dizhi1.substr(that.dizhi1.length-4)==",市,区") {
        
         that.dizhi1 = that.dizhi1.substring(0,that.dizhi1.length-4);
        
      }
      that.axios
        .get("/apis/admin/avgSalary/pageList", {
          params: {
            page: that.yeshuo,
            pageSize: that.tiao,
            address:that.dizhi1,
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.kong()
          that.tableData = response.data.rows;
          that.totalPage=response.data.totalPage
          
        });

    },
    //弹框修改按钮
    modify(){
      var that =this
     that.region+=that.user.xtrysf+","+that.user.xtrycs+","+that.user.xtrte
          if (that.region=="") {
            that.$message.error('地区不能为空！');
            return
          }

       if (that.region.substr(that.region.length-6)=="省,市,区") {
        
         that.region = that.region.substring(0,that.region.length-6);
           that.$message.error('地区不能为空！');
          return
        
      }
     
      if (that.region.substr(that.region.length-4)==",市,区") {
        
         that.region = that.region.substring(0,that.region.length-4);
        
      }
       if (that.region.substr(that.region.length-2)==",区") {
        
         that.region = that.region.substring(0,that.region.length-2);
        
      }
      if (that.region.substr(that.region.length-2)==",,") {
         
           that.region=that.region.replace(/,/g,'');
         
       }else if (that.region.substr(that.region.length-1)==",") {
         var reg=/,$/gi;
        that.region=that.region.replace(reg,"");
       }
      that.axios
        .get("/apis/admin/avgSalary/update", {
          params: {
            address:that.region,
             remark:that.tableData2.remark,
             avgSalary:that.tableData2.avgSalary,
             id:that.uid,
              
          }
        })
        .then(function(response) {
          console.log(response.data);
           that.kong() 
           that.childMethod()
           
            
        });
      console.log(that.region)
      that.hand=false

    },
    getCompanyData(){
     this.hand=false,
     this.childMethod()
    },
    handleDelete(row) {
       var that = this;
      that.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          
      that.axios
        .get("/apis/admin/avgSalary/delete", {
          params: {
             id:row.id,
              
          }
        })
        .then(function(response) {
          console.log(response.data);
         that.childMethod()
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
    }
  },

};
</script>

<style>
#Averagewage{
  width: 100%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  position: relative;

}
.distpicker-address-wrapper select{
  width: 31%;
  color: #606266;
  font-size: 14px;
 
}
.biaoge{
    width: 100%;
    height: 350px;
    border-bottom: 1px solid #ccc;
    margin-top:60px;
    border: 1px solid #ccc;
    overflow: auto;
    padding-top:1%;
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
.Add_45 {
  float: right;
  margin-right: 20px;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}
.yeshuo_06{
  position: absolute;
  right:0px;
  bottom: 1%;
  
}
.biaoge_5{
  height: 86%;
  overflow: auto;
}
.hu{
  width: 65%;
  margin-left: 5%;
  margin-bottom: 1%;
  float: left;
}
.pht{
  float: left;
  line-height: 40px;
}
.dijh{
  width:40%;
  float: left;
}
.dsa{
  margin-left: 5%;  
  float: left;
  margin-top: 5px;

}

</style>