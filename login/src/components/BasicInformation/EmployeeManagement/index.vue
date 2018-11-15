<template>
   <div id="EmployeeManagement">
            <div class="title">
            <div class="title_1">从业人员管理</div>

        </div>
         <div class="tou">
           <ul class="tou_1">
                  <li class="quanxuan">
               <div class="bao">
               <p class="bt">姓名</p>
               </div>
               <div class="bao_1">
               <el-input v-model="businessaddress" placeholder="请输入内容"></el-input>
               </div>
             </li>
                  <li class="quanxuan">
               <div class="bao">
               <p class="bt">文化程度</p>
               </div>
              
                <div class="bao_1">
                     <el-select  v-model="state" placeholder="请选择" style="width:100%" >
                          <el-option label="小学" value="小学"></el-option>
                          <el-option label="初中" value="初中"></el-option>
                          <el-option label="高中" value="高中"></el-option>
                          <el-option label="中专" value="中专"></el-option>
                          <el-option label="大专" value="大专"></el-option>
                          <el-option label="本科" value="本科"></el-option>
                          <el-option label="硕士" value="硕士"></el-option>
                          <el-option label="博士" value="博士"></el-option>
                        </el-select>
               </div>
             </li>
                  <li class="quanxuan">
               <div class="bao">
               <p class="bt">手机号码</p>
               </div>
            <div class="bao_1">
               <el-input v-model="name" placeholder="请输入内容"></el-input>
               </div>
             </li>
                  <li class="quanxuan">
               <div class="bao">
               <p class="bt">住址</p>
               </div>
               <div class="bao_1">
               <el-input v-model="representative" placeholder="请输入内容" ></el-input>
               </div>
             </li>
             <div class="query">
                <el-button type="primary" @click="query">查询</el-button>
             </div>
             
             </ul> 
              <!-- <div class="quanxuan">
    <el-button @click="toggleSelection(tableData)">全选</el-button>
  </div> -->

         </div>
         <div class="tem">
         <div class="block">
            <div class="Add">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
            </div>
            <div class="Ass">
                <el-button @click="toggleSelection(tableData)">
                    全选
                </el-button>
            </div>
        </div>
         <div class="ge">

        <!--修改弹出框-->
        <el-dialog title="修改企业信息" :visible.sync="hand" width="50%">
            <span>
                  <el-form :model="tableData2" :rules="rules" ref="ruleForm" enctype="multipart/form-data" label-width="160px" class="demo-ruleForm">
                   <el-form-item label="社会统一信用代码" prop="socialCreditNumber">
                        <el-input disabled v-model="tableData2.socialCreditNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="企业名称" prop="companyName">
                        <el-input disabled v-model="tableData2.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="组织结构编码" prop="organizationCode">
                        <el-input disabled v-model="tableData2.organizationCode"></el-input>
                    </el-form-item>
                    <el-form-item label="工商营业执照注册号" prop="bizRegisterCode">
                        <el-input v-model="tableData2.bizRegisterCode"></el-input>
                    </el-form-item>
                    <el-form-item label="注册地区编码" prop="areaCode;">
                        <el-input v-model="tableData2.areaCode"></el-input>
                    </el-form-item>
                    <el-form-item label="企业营业地址" prop="address">
                        <el-input v-model="tableData2.address"></el-input>
                    </el-form-item>
                       <el-form-item label="邮编" prop="zipCode">
                        <el-input v-model="tableData2.zipCode"></el-input>
                    </el-form-item>
                       <el-form-item label="法定代表人姓名" prop="representativeName">
                        <el-input v-model="tableData2.representativeName"></el-input>
                    </el-form-item>
                       <el-form-item label="法定代表人证件编号" prop="representativeIdCardNumber">
                        <el-input v-model="tableData2.representativeIdCardNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="注册资金（万元）" prop="registrationCapital">
                        <el-input v-model="tableData2.registrationCapital"></el-input>
                    </el-form-item>
                       <el-form-item label="开工日期" prop="establishDate">
                     <el-date-picker
                        v-model="tableData2.establishDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="办公电话" prop="phoneNumber">
                          <el-input  v-model="tableData2.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="传真号码" prop="faxNumber">
                          <el-input  v-model="tableData2.faxNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人姓名" prop="contactPeopleName">
                          <el-input  v-model="tableData2.contactPeopleName"></el-input>
                    </el-form-item>
                      <el-form-item label="联系人办公电话" prop="contactPeoplePhone">
                          <el-input  v-model="tableData2.contactPeoplePhone"></el-input>
                    </el-form-item>
                     <el-form-item label="联系人手机号码" prop="contactPeopleCellPhone">
                          <el-input  v-model="tableData2.contactPeopleCellPhone"></el-input>
                    </el-form-item>
                      <el-form-item label="企业联系邮箱" prop="email">
                          <el-input  v-model="tableData2.email"></el-input>
                    </el-form-item>
                    <el-form-item label="企业网址" prop="homeWebsiteUrl">
                          <el-input  v-model="tableData2.homeWebsiteUrl"></el-input>
                    </el-form-item>
                    <el-form-item label="企业状态" prop="businessStatus">
                       <el-radio-group v-model="tableData2.businessStatus" style="margin-left: -75%;">
                        <el-radio label="0">注销</el-radio>
                        <el-radio label="1">正常</el-radio>
                        </el-radio-group>
                    </el-form-item>
                      <el-form-item label="备注" prop="remark">
                          <el-input  v-model="tableData2.remark"></el-input>
                    </el-form-item>
                        <el-form-item label="法定代表人证件类型" prop="credentialsId">
                            <el-select v-model="tableData2.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options1"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item label="币种类型" prop="capitalCurrencyId">
                         <el-select v-model="tableData2.capitalCurrencyId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.capitalCurrencyName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                     <el-form-item label="企业性质" prop="organizationTypeId">
                       <el-select v-model="tableData2.organizationTypeId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options2"
                            :key="item.id"
                            :label="item.organizationTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="getCompanyData">取 消</el-button>
                <el-button type="primary" @click="modify">修 改</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->
        <!--添加弹出框-->
        <el-dialog title="新增从业人员信息" :visible.sync="Addition"  width="50%">
            <span>
                <el-form :model="tableData1" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                   <el-form-item label="证件编号" prop="idCardNumber">
                        <el-input v-model="tableData1.idCardNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名" prop="employeeName">
                        <el-input v-model="tableData1.employeeName"></el-input>
                    </el-form-item>
                    <el-form-item label="性别" prop="gender">
                         <el-radio-group v-model="tableData1.gender" style="margin-left: -75%;">
                        <el-radio label="1">男</el-radio>
                        <el-radio label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="文化程度" prop="cultureLevel">
                        <el-select  v-model="tableData1.cultureLevel" placeholder="请选择" style="width:100%">
                          <el-option label="小学" value="小学"></el-option>
                          <el-option label="初中" value="初中"></el-option>
                          <el-option label="高中" value="高中"></el-option>
                          <el-option label="中专" value="中专"></el-option>
                          <el-option label="大专" value="大专"></el-option>
                          <el-option label="本科" value="本科"></el-option>
                          <el-option label="硕士" value="硕士"></el-option>
                           <el-option label="博士" value="博士"></el-option>
                          </el-select>
                        
                    </el-form-item>
                    <el-form-item label="民族" prop="nation;">
                        <el-input v-model="tableData1.nation"></el-input>
                    </el-form-item>
                    <el-form-item label="出生日期" prop="birthday">
                         <el-date-picker
                        v-model="tableData1.birthday"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                       <el-form-item label="地址" prop="address">
                        <el-input v-model="tableData1.address"></el-input>
                    </el-form-item>
                       <el-form-item label="电话" prop="cellPhone">
                        <el-input v-model="tableData1.cellPhone"></el-input>
                    </el-form-item>
                       <el-form-item label="开始工作时间" prop="workDate">
                     <el-date-picker
                        v-model="tableData1.workDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="当前职称等级" prop="professionalLevel">
                           <el-select @change="grade" v-model="tableData1.professionalLevel" placeholder="请选择" style="width:100%">
                          <el-option label="初级" value="1"></el-option>
                          <el-option label="中级" value="2"></el-option>
                          <el-option label="高级" value="3"></el-option>
                          </el-select>
                    </el-form-item>
                    <el-form-item label="证件类别" prop="credentialsId">
                          <el-select v-model="tableData1.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options1"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                          </el-select>
                    </el-form-item>
                    <el-form-item label="职称等级" prop="professionalTypeId">
                           <el-select v-model="tableData1.professionalTypeId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options2"
                            :key="item.id"
                            :label="item.professionalTypeName"
                            :value="item.id">
                          </el-option>
                          </el-select>
                    </el-form-item>
                       <el-form-item label="头像" prop="headImagePath">
                       <input @change="Uploadingfiles($event)" type="file" name="picFile" >
                    </el-form-item>
                    
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->

          <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
            <el-table-column prop="headImagePath" label="头像">
            </el-table-column>
            <el-table-column prop="employeeName" label="姓名">
            </el-table-column>
            <el-table-column prop="gender" label="性别">
            </el-table-column>
            <el-table-column prop="cultureLevel" label="文化程度">
            </el-table-column>
             <el-table-column prop="nation" label="民族">
            </el-table-column>
               <el-table-column prop="birthday" label="出生日期">
            </el-table-column>
             <el-table-column prop="address" label="住址 ">
            </el-table-column>
              <el-table-column prop="cellPhone" label="手机号码 ">
            </el-table-column>
                <el-table-column prop="workDate" label="开始工作时间">
            </el-table-column>
             <el-table-column prop="professionalTypeId" label="职称等级">
            </el-table-column>
                   <el-table-column label="操作">
                 <el-table-column label="修改" width="60">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-pencil text-warning" @click="handleEdit(scope.row)"></span>
                </template>
            </el-table-column>
            <el-table-column label="删除"  width="60">
                <template slot-scope="scope">
                    <span class="glyphicon glyphicon-trash text-danger" @click="handleDelete(scope.row)"></span>
                </template>
            </el-table-column>
         
            </el-table-column>
  </el-table>
        <div class="page" style="width: 95%; margin: auto;">
            
            
        </div>
         </div>
   </div>
    </div>
</template>

<script>
let uploadFileType = "multipart/form-data";
export default {
  name: "EmployeeManagement",
  data() {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      See:false,
      state:'',
      input: '',
      enterprisename:"",
      businessaddress:"",
      name:"",
      representative:"",
      multipleSelection: [],
      Nature:"",
      uid: "",
      rowid:"",
       file:"",
      
      options: [],
      options1: [],
      options2: [],
      tableData3:{},
      coid:"",
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

      tableData: [],
      tableData2:{},
      tableData1:{},
    };
  },

  mounted() {
    var that =this
    that.list()
    that.axios
          .get("/apis/front/public/loadCredentialsList")  //证件下拉框
          .then(function(response) {
            console.log(response.data);
            that.options1=response.data.credentialsList
           
          });
           
   
  },
  methods: {
      //上传头像
      Uploadingfiles(event){
            this.file = event.target.files[0];
		        console.log(this.file);

      },
    details(row){
      this.See=true
      this.tableData3=row

    },
    //证件类别
    grade(data){
        var that =this
        
        
        console.log(data)
          that.axios
          .get("/apis/front/public/loadProfessionalTypeList",{
              params:{
                  type:data
              }
          })  
          .then(function(response) {
            console.log(response.data.professionalTypeList);
             that.options2=response.data.professionalTypeList
           
          });

    },

    list(){
           var that = this;
        that.axios
          .get("/apis/admin/employeeMaster/pageList", {
            params: {
               page: 1,
              pageSize: 10,
              
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
            var array = response.data.rows
           
            that.tableData = array
             
          });
      

    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    //修改
    modify(){
      var that =this
       that.axios
          .get("/apis/admin/employeeMaster/update",{
          }) 
          .then(function(response) {
            console.log(response.data);
             that.options2=response.data.organizationTypeList
           
          });
      that.hand=false

    },
        	//获取文件
			getFile: function (event) {
		        this.file = event.target.files[0];
		        console.log(this.file);
	        },
       next(){
       
       },
   //添加按钮
    Addit() {
      var that = this;
      that.Addition = true; 
       
        that.axios
          .get("/apis/front/public/loadCredentialsList")  //证件下拉框
          .then(function(response) {
            console.log(response.data);
            that.options1=response.data.credentialsList
           
          });
          that.axios
          .get("/apis/front/public/loadCapitalCurrencyList")  //币种下拉框
          .then(function(response) {
            console.log(response.data);
            that.options=response.data.capitalCurrencyList
           
          });
           that.axios
          .get("/apis/front/public/loadOrganizationTypeList")  //企业性质下拉框
          .then(function(response) {
            console.log(response.data);
             that.options2=response.data.organizationTypeList
           
          });
      
    },
    //查询
    query(){
      var that =this
      console.log(that.state)
              that.axios
          .get("/apis/admin/employeeMaster/pageList",{
            params:{
               page: 1,
              pageSize: 10,
              companyName:that.enterprisename,
              organizationTypeId:that.Nature,
              address:that.businessaddress,
              contactPeopleName:that.name,
              businessStatus:that.state,
              representativeName:that.representative,
              
            }
          }) 
               .then(function(response) {
            console.log(response.data);
              that.tableData=response.data.rows
           
          });

    },
     
    
    //弹框添加
    add() {
      var that = this;
      that.Addition = false;

      
      	let formData = new FormData();
      	 formData.append('idCardNumber', that.idCardNumber);
         formData.append('employeeName', that.tableData1.employeeName);
         formData.append('gender', that.tableData1.gender);
         formData.append('cultureLevel', that.tableData1.cultureLevel);
         formData.append('nation', that.tableData1.nation);
         formData.append('birthday', that.tableData1.birthday);
         formData.append('address', that.tableData1.address);
         formData.append('cellPhone', that.tableData1.cellPhone);
         formData.append('workDate', that.tableData1.workDate);
         formData.append('professionalLevel', that.tableData1.professionalLevel);
         formData.append('credentialsId', that.tableData1.credentialsId);
        formData.append('professionalTypeId', that.tableData1.professionalTypeId);
         formData.append('picFile',that.file)
         let config = {
		              headers: {
		                'Content-Type': 'multipart/form-data'
		              }
		  }
         that.axios.post('/apis/admin/employeeMaster/add',formData,config)
		  .then(function (response) {
		    console.log(response);
		    
		  })
		  .catch(function (error) {
		    console.log(error);
          });
        //  let config = {
        //       headers: {
        //         'Content-Type': 'multipart/form-data'
        //       }
        //     }
        //     that.axios
        //   .get("/admin/employeeMaster/add",{
        //     params:{
        //         idCardNumber:that.tableData1.idCardNumber,
        //         employeeName:that.tableData1.employeeName,
        //         gender:that.tableData1.gender,
        //         cultureLevel:that.tableData1.cultureLevel,
        //         nation:that.tableData1.nation,
        //         birthday:that.tableData1.birthday,
        //         picFile:that.file,
        //         address:that.tableData1.address,
        //         cellPhone:that.tableData1.cellPhone,
        //         workDate:that.tableData1.workDate,
        //         professionalLevel:that.tableData1.professionalLevel,
        //         credentialsId:that.tableData1.credentialsId,
        //         professionalTypeId:that.tableData1.professionalTypeId,
                
        //     }
        //   }) 
        //   .then(function(response) {
        //     console.log(response.data);
        //      that.options2=response.data.organizationTypeList
           
        //   });
      that.tableData.push(that.tableData1);
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      this.list()
      this.hand = false;

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
    //操作修改按钮
    handleEdit(row) {
      this.tableData2 = row;
       this.rowid=row.id
      this.hand = true;

    },
    handleDelete(row) {
      var that = this;
      that.$confirm("此操作将永久删除该劳务人员信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
            that.axios
          .get("/apis/admin/subContractor/delete",{
            params:{
                id:row
            }
          }) 
          .then(function(response) {
            if (response.data.code=="1") {
               that.tableData.splice(index, 1);
                    that.$message({
            type: "success",
            message: "删除成功!"
          });
              
            } else if (response.data.code=="0") {
                that.$message({
              type: "info",
              message: "删除失败"
          });
              
            }
           
          });
         
     
        })
      
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },

  created() {
    // this.getCompanyData();
  }
};
</script>

<style>
#EmployeeManagement{
  width: 100%;
  height: 100%;
  overflow:auto;
  float: left;

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
.el-input.is-disabled .el-input__inner{
  color: #000;
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
.Add {
  float: right;
  margin-right: 4%;
  margin-top: 2%;
}
.Ass {
  float: left;;
  margin-left: 4%;
  margin-top: 2%;
}
.block {
  width: 100%;
  height: 40px;
  float: left;
}

#list {
  width: 100%;
  height: 100%;
  float: left;
}
.anniu {
  float: left;
  margin-left: 3%;
  margin-top: 1%;
}
.anniu_1 {
  float: left;
  margin-left: 3%;
  margin-top: 1%;
}
.anniu_2 {
  float: right;
  margin-right: 3%;
  margin-top: 1%;
}
.titie {
  width: 100%;
  float: left;
}
.titie_1 {
  width: 40%;
  height: 60px;
  background: #409eff;
  margin: 0 auto;
  margin-top: 3%;
  border-radius: 4px;
  line-height: 60px;
  font-size: 16px;
  color: #fff;
}
.tem {
  width: 95%;
  height: 500px;
  border: 1px solid #ccc;
  float: left;
  margin-left: 2%;
  margin-top: 30px;
}
.ge {
  width: 100%;
  float: left;
  margin-top: 3%;
}
.biaoti {
  width: 100%;
  height: 50px;
  float: left;
  font-size: 16px;
  margin-top: 1%;
}
.biaoti div {
  width: 40%;
  border: 1px solid #ccc;
  line-height: 50px;
  margin: 0 auto;
  text-align: center;
}
.tou {
  width: 100%;
  height: 100px;
  margin-top: 1%;
  float: left;
  margin-bottom: 40px;  
}
.tou_1 {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 4%;
}
.quanxuan {
  width: 40%;
  height: 50px;
  float: left;
  list-style-type: none;
  margin-right: 5%;
  margin-bottom: 10px;
}
.keygen {
  width: 280px;
  float: left;
  margin-left: 5%;
  margin-bottom: 30px;
}
.tele {
  float: left;
  height: 40px;
  line-height: 40px;
}
.kg {
  float: left;
  height: 40px;
}
.bao {
  float: left;
  width: 60px;
  line-height: 40px;
}
.bao_1 {
  width: 65%;
  float: left;
  margin-left: 5%;
}
.query{
  float: right;
  margin-right: 20px;
}
</style>
