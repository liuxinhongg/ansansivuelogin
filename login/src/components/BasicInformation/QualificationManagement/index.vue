<template>
   <div id="list_88">
     <div class="box22">
       <!-- <div class="anniu"> -->
             <!-- <router-link to="/BasicInformation/BusinessManagement/index"> 
         <el-button type="primary">切换管理视图</el-button>
         	</router-link> -->
        <!-- </div> -->
         <div class="biaoti_55"><div>企业资质管理</div></div>
         <div class="tou55">
           <ul class="tou_2">
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">资质类型</p>
               </div>
               <div class="bao_2">
                        <el-select v-model="organizationCertificateTypeId" clearable size="mini" placeholder="请选择">
                                 <el-option
                                v-for="item in options2"
                                :key="item.id"
                                :label="item.organizationTypeName"
                                :value="item.id">
                              </el-option>
                              </el-select>
               </div>
             </li>
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">资质编号</p>
               </div>
               <div class="bao_2">
               <el-input v-model="certificationCode" size="mini" placeholder="请输入内容"></el-input>
               </div>
             </li>
             
             
             </ul> 
             <div class="query_1">
                <el-button type="primary" size="mini" @click="query">查询</el-button>
             </div>
              <!-- <div class="quanxuan">
    <el-button @click="toggleSelection(tableData)">全选</el-button>
  </div> -->

         </div>
         <div class="tem67">
         <div class="block11">
            <div class="Add1">
                <el-button class="bnt" :plain="true"  size="small" @click="Addit">
                    添加
                </el-button>
            </div>
            <!-- <div class="Ass">
                <el-button @click="toggleSelection(tableData)">
                    全选
                </el-button>
            </div> -->
        </div>
         <div class="ge_1">     

        <!--修改弹出框-->
        <el-dialog title="修改企业信息" :visible.sync="hand"  width="50%">
            <span>
                   <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                   <el-form-item label="企业组织代码" prop="subContractorCode">
                        <el-input v-model="tableData2.subContractorCode"></el-input>
                    </el-form-item>
                       <el-form-item label="资质类型" prop="organizationCertificateTypeId">
                           <el-select v-model="tableData2.organizationCertificateTypeId" clearable placeholder="请选择" style="width:100%">
                                <el-option
                                v-for="item in options1"
                                :key="item.id"
                                :label="item.organizationTypeName"
                                :value="item.id">
                              </el-option>
                              </el-select>
                    </el-form-item>
                       <el-form-item label="资质名称" prop="certificationName">
                        <el-input v-model="tableData2.certificationName"></el-input>
                    </el-form-item>
                     <el-form-item label="资质编号" prop="certificationCode">
                        <el-input v-model="tableData2.certificationCode"></el-input>
                    </el-form-item>
                     <el-form-item label="发证机关" prop="grantOrg">
                        <el-input v-model="tableData2.grantOrg"></el-input>
                    </el-form-item>
                    <el-form-item label="资质证书状态" prop="certficationStatus">
                           <el-select v-model="tableData2.certficationStatus" clearable placeholder="请选择" style="width:100%">
                                <el-option value="1" label="有效"></el-option>
                                <el-option value="2" label="注销"></el-option>
                                <el-option value="3" label="暂扣"></el-option>
                                <el-option value="4" label="过期"></el-option>
                              </el-select>
                    </el-form-item>
                           <el-form-item label="最近发放日期" prop="recentValidDate">
                     <el-date-picker
                        v-model="tableData2.recentValidDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                          
                     <el-form-item label="资质状态" prop="qualificationStatus">
                           <el-select v-model="tableData2.qualificationStatus" clearable placeholder="请选择" style="width:100%">
                                <el-option value="1" label="有效"></el-option>
                                <el-option value="2" label="注销"></el-option>
                                <el-option value="3" label="过期"></el-option>
                                <el-option value="4" label="降级"></el-option>
                              </el-select>
                    </el-form-item>
                       <el-form-item label="开始日期" prop="validBeginDate">
                     <el-date-picker
                        v-model="tableData2.validBeginDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
           
                     <el-form-item label="结束日期" prop="validEndDate">
                       <el-date-picker
                        v-model="tableData2.validEndDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>

                      <el-form-item label="证书图片" prop="picFile">
                         <input id="fileinput" @change="uploading($event)" type="file" accept="image/*">
                         <img :src="img" alt="" class="tupian">
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
        <el-dialog title="新增企业信息" :visible.sync="Addition"  width="50%">
            <span>
                <el-form :model="tableData1" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                   <el-form-item label="企业组织代码" prop="subContractorCode">
                        <el-input v-model="tableData1.subContractorCode"></el-input>
                    </el-form-item>
                       <el-form-item label="资质类型" prop="organizationCertificateTypeId">
                           <el-select v-model="tableData1.organizationCertificateTypeId" clearable placeholder="请选择" style="width:100%">
                                 <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.organizationTypeName"
                                :value="item.id">
                              </el-option>
                              </el-select>
                    </el-form-item>
                       <el-form-item label="资质名称" prop="certificationName">
                        <el-input v-model="tableData1.certificationName"></el-input>
                    </el-form-item>
                     <el-form-item label="资质编号" prop="certificationCode">
                        <el-input v-model="tableData1.certificationCode"></el-input>
                    </el-form-item>
                     <el-form-item label="发证机关" prop="grantOrg">
                        <el-input v-model="tableData1.grantOrg"></el-input>
                    </el-form-item>
                    <el-form-item label="资质证书状态" prop="certficationStatus">
                           <el-select v-model="tableData1.certficationStatus" clearable placeholder="请选择" style="width:100%">
                                <el-option value="1" label="有效"></el-option>
                                <el-option value="2" label="注销"></el-option>
                                <el-option value="3" label="暂扣"></el-option>
                                <el-option value="4" label="过期"></el-option>
                              </el-select>
                    </el-form-item>
                           <el-form-item label="最近发放日期" prop="recentValidDate">
                     <el-date-picker
                        v-model="tableData1.recentValidDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
                          
                     <el-form-item label="资质状态" prop="qualificationStatus">
                           <el-select v-model="tableData1.qualificationStatus" clearable placeholder="请选择" style="width:100%">
                                <el-option value="1" label="有效"></el-option>
                                <el-option value="2" label="注销"></el-option>
                                <el-option value="3" label="过期"></el-option>
                                <el-option value="4" label="降级"></el-option>
                              </el-select>
                    </el-form-item>
                       <el-form-item label="开始日期" prop="validBeginDate">
                     <el-date-picker
                        v-model="tableData1.validBeginDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>
           
                     <el-form-item label="结束日期" prop="validEndDate">
                       <el-date-picker
                        v-model="tableData1.validEndDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期"
                        >
                        </el-date-picker>
                    </el-form-item>

                      <el-form-item label="证书图片" prop="picFile">
                         <input id="fileinput" @change="uploading($event)" type="file" accept="image/*">
                         <img :src="img" alt="" class="tupian">
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
            style="width: 100%">
             <el-table-column prop="subContractorCode"  :show-overflow-tooltip="true" width="140" label="企业组织代码">
            </el-table-column>
            <el-table-column prop="subContractorName"  :show-overflow-tooltip="true" width="140" label="企业负责人">
            </el-table-column>
            <el-table-column prop="certificationName"  :show-overflow-tooltip="true"  width="140" label="资质名称">
            </el-table-column>
            <el-table-column prop="organizationCertificateType.organizationCertificateTypeName"  :show-overflow-tooltip="true" width="140" label="资质类型 ">
            </el-table-column>
            <el-table-column prop="certificationCode"  :show-overflow-tooltip="true" width="110" label=" 资质编号 ">
            </el-table-column>
             <el-table-column prop="grantOrg" width="100"   :show-overflow-tooltip="true" label="发证机关 ">
            </el-table-column>
              <el-table-column prop="certficationStatus"  :show-overflow-tooltip="true" width="110" label="资质证书状态 ">
            </el-table-column>
            <el-table-column prop="qualificationStatus"  :show-overflow-tooltip="true" width="100" label="资质状态 ">
            </el-table-column>
              <el-table-column prop="recentValidDate"  :show-overflow-tooltip="true" width="120" label="最近发放日期">
            </el-table-column>
            <el-table-column prop="validBeginDate"  :show-overflow-tooltip="true"  width="110" label="开始日期">
            </el-table-column>
            <el-table-column prop="validEndDate"  :show-overflow-tooltip="true" width="140" label="结束日期">
            </el-table-column>
             
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
  </el-table>
     <div class="fenye_55">
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
    </div>
</template>

<script>
export default {
  name: "list_88",
  data() {
    return {
      currentPage: 1,
      state: "",
      yeshuo: "1",
      tiao: "5",
      input: "",
      enterprisename: "",
      businessaddress: "",
      name: "",
      img: "",
      representative: "",
      multipleSelection: [],
      certificationCode: "",
      organizationCertificateTypeId: "",
      subContractorName: "",
      Nature: "",
      uid: "",
      file: "",
      src: "",
      rowid: "",
      totalPage: +"",
      options: [],
      options1: [],
      options2: [],
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      tableData3: {},
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
      tableData2: {},
      tableData1: {}
    };
  },

  mounted() {
    var that = this;
    that.list();

    that.axios
        .get("/apis/front/public/loadOrganizationTypeList") 
        .then(function(response) {
          console.log(response.data);
          that.options2 = response.data.organizationTypeList;
        });
  },
  methods: {
    uploading(event) {
      this.file = event.target.files[0]; //获取文件

      var windowURL = window.URL || window.webkitURL;

      this.file = event.target.files[0];

      //创建图片文件的url

      this.src = windowURL.createObjectURL(event.target.files[0]);
      this.img = this.src;
    },
    list() {
      var that = this;
      that.axios
        .get("/apis/admin/subContractorCertifications/pageList", {
          params: {
            page: that.yeshuo,
            pageSize: that.tiao
          }
        })
        .then(function(response) {
          console.log(response.data.rows);
          var array = response.data.rows;
          for (let i = 0; i < array.length; i++) {
            if (array[i].certficationStatus == "1") {
              array[i].certficationStatus = "有效";
            } else if (array[i].certficationStatus == "2") {
              array[i].certficationStatus = "注销";
            } else if (array[i].certficationStatus == "3") {
              array[i].certficationStatus = "暂扣";
            } else if (array[i].certficationStatus == "4") {
              array[i].certficationStatus = "过期";
            }

            if (array[i].qualificationStatus == "1") {
              array[i].qualificationStatus = "有效";
            } else if (array[i].qualificationStatus == "2") {
              array[i].qualificationStatus = "注销";
            } else if (array[i].qualificationStatus == "3") {
              array[i].qualificationStatus = "过期";
            } else if (array[i].qualificationStatus == "4") {
              array[i].qualificationStatus = "降级";
            }
          }
          that.totalPage = response.data.totalPage;
          that.tableData = array;
        });
    },
    //分页
    handleSizeChange(val) {
      this.tiao = ` ${val}`;
      this.list();
    },
    handleCurrentChange(val) {
      this.yeshuo = ` ${val}`;
      this.list();
    },
    //修改
    modify() {
      event.preventDefault(); //取消默认行为
      var that = this;
      var formdata1 = new FormData();
      formdata1.append("picFile", that.file);
      formdata1.append("subContractorCode", that.tableData2.subContractorCode);
      formdata1.append("certificationName", that.tableData2.certificationCode);
      formdata1.append("certificationCode", that.tableData2.certificationCode);
      formdata1.append("validBeginDate", that.tableData2.validBeginDate);
      formdata1.append("validEndDate", that.tableData2.validEndDate);
      formdata1.append("recentValidDate", that.tableData2.recentValidDate);
      formdata1.append("grantOrg", that.tableData2.grantOrg);
      formdata1.append(
        "qualificationStatus",
        that.tableData2.qualificationStatus
      );
      formdata1.append(
        "certficationStatus",
        that.tableData2.certficationStatus
      );
      formdata1.append(
        "organizationCertificateTypeId",
        that.tableData2.organizationCertificateTypeId
      );
      formdata1.append("id", that.rowid);
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      that.Addition = false;
      that.axios
        .post(
          "/apis/admin/subContractorCertifications/update",
          formdata1,
          config
        )
        .then(function(response) {
          console.log(response.data);
          that.list();
        });
      that.hand = false;
    },
    //添加按钮
    Addit() {
      var that = this;
      that.Addition = true;
      if (JSON.stringify(that.tableData1) !== "{}") {
        that.tableData1 = {};
      }
      that.img = "";

      that.axios
        .get("/apis/front/public/loadOrganizationTypeList") 
        .then(function(response) {
          console.log(response.data);
          that.options = response.data.organizationTypeList;
        });
    },
    //查询
    query() {
      var that = this;
      console.log(that.state);
      that.axios
        .get("/apis/admin/subContractorCertifications/pageList", {
          params: {
            page: 1,
            pageSize: 10,
            organizationCertificateTypeId: that.organizationCertificateTypeId,
            certificationCode: that.certificationCode
          }
        })
        .then(function(response) {
          console.log(response.data);
          that.tableData = response.data.rows;
          var array = response.data.rows;
          for (let i = 0; i < array.length; i++) {
            if (array[i].certficationStatus == "1") {
              array[i].certficationStatus = "有效";
            } else if (array[i].certficationStatus == "2") {
              array[i].certficationStatus = "注销";
            } else if (array[i].certficationStatus == "3") {
              array[i].certficationStatus = "暂扣";
            } else if (array[i].certficationStatus == "4") {
              array[i].certficationStatus = "过期";
            }

            if (array[i].qualificationStatus == "1") {
              array[i].qualificationStatus = "有效";
            } else if (array[i].qualificationStatus == "2") {
              array[i].qualificationStatus = "注销";
            } else if (array[i].qualificationStatus == "3") {
              array[i].qualificationStatus = "过期";
            } else if (array[i].qualificationStatus == "4") {
              array[i].qualificationStatus = "降级";
            }
          }
        });
    },
    //弹框添加
    add() {
      event.preventDefault(); //取消默认行为
      var that = this;
      var formdata1 = new FormData();
      formdata1.append("picFile", that.file);
      formdata1.append("subContractorCode", that.tableData1.subContractorCode);
      formdata1.append("certificationName", that.tableData1.certificationCode);
      formdata1.append("certificationCode", that.tableData1.certificationCode);
      formdata1.append("validBeginDate", that.tableData1.validBeginDate);
      formdata1.append("validEndDate", that.tableData1.validEndDate);
      formdata1.append("recentValidDate", that.tableData1.recentValidDate);
      formdata1.append("grantOrg", that.tableData1.grantOrg);
      formdata1.append(
        "qualificationStatus",
        that.tableData1.qualificationStatus
      );
      formdata1.append(
        "certficationStatus",
        that.tableData1.certficationStatus
      );
      formdata1.append(
        "organizationCertificateTypeId",
        that.tableData1.organizationCertificateTypeId
      );
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      that.Addition = false;
      that.axios
        .post("/apis/admin/subContractorCertifications/add", formdata1, config)
        .then(function(response) {
          console.log(response.data);
          if (response.data.code == "0")
            that.$message.error(response.data.message);
          {
          }
          that.list();
        });
      // that.tableData.push(that.tableData1);
    },
    handleItemChange(label) {
      alert(label);
    },
    getCompanyData() {
      this.list();
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
      var that = this;
      that.tableData2 = row;
      that.rowid = row.id;
      that.img = row.imagePath;

             if (row.certficationStatus == "有效") {
              row.certficationStatus = "1";
            } else if (row.certficationStatus == "注销") {
              row.certficationStatus = "2";
            } else if (row.certficationStatus == "3") {
              row.certficationStatus = "暂扣";
            } else if (row.certficationStatus == "过期") {
              row.certficationStatus = "4";
            }

             if (row.qualificationStatus == "有效") {
              row.qualificationStatus = "1";
            } else if (row.qualificationStatus == "注销") {
              row.qualificationStatus = "2";
            } else if (row.qualificationStatus == "过期") {
              row.qualificationStatus = "3";
            } else if (row.qualificationStatus == "降级") {
              row.qualificationStatus = "4";
            }

    that.axios
        .get("/apis/front/public/loadOrganizationTypeList") 
        .then(function(response) {
          console.log(response.data);
          that.options1 = response.data.organizationTypeList;
        });

      that.hand = true;
    },
    //删除
    handleDelete(row) {
      var that = this;
      that
        .$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          that.axios
            .get("/apis/admin/subContractorCertifications/delete", {
              params: {
                id: row.id
              }
            })
            .then(function(response) {
              that.list();
              if (response.data.code == "1") {
                that.$message({
                  type: "success",
                  message: "删除成功!"
                });
              } else if (response.data.code == "0") {
                that.$message({
                  type: "info",
                  message: "删除失败"
                });
              }
            });
        });
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
.el-input.is-disabled .el-input__inner {
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
.box22 {
  width: 100%;
  height: 100%;
  float: left;
  border: 1px solid #ccc;
  position: relative;
}
.Add1 {
  float: right;
  margin-right: 4%;
  margin-top: 1%;
}
.Ass {
  float: left;
  margin-left: 4%;
  margin-top: 2%;
}
.block11 {
  width: 100%;
  height: 40px;
  float: left;
}

#list_88 {
  width: 100%;
  float: left;
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
.tem67 {
  width: 95%;
  height: 350px;
  border: 1px solid #ccc;
  float: left;
  margin-left: 2%;
  margin-top: 5px;
  position: relative;
}
.ge_1 {
  width: 100%;
  height: 81%;
  float: left;
  margin-top: 1%;
  overflow: auto;
}
.biaoti_55 {
  width: 100%;
  height: 50px;
  background: #5b9bd5;
  color: #fff;
}
.biaoti_55 div {
  line-height: 50px;
  text-align: center;
}
.tou55 {
  width: 100%;
  float: left;
}
.tou_2 {
  width: 90%;
  height: 100%;
  margin: 0 auto;
  margin-top: 1%;
}
.quanxuan_1 {
  width: 30%;
  float: left;
  list-style-type: none;
  margin-bottom: 5px;
  margin-right: 2%;
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
.bao1 {
  width: 30%;
  float: left;
  line-height: 28px;
}
.bao p {
  width: 92px;
}
.bao_2 {
  width: 65%;
  float: left;
  margin-left: 5%;
}
.query_1 {
  float: right;
  margin-right: 6%;
}
.fenye_55 {
  position: absolute;
  right: 0px;
  bottom: 2%;
}
.tupian {
  width: 250px;
  height: 250px;
  float: left;
  border: 1px solid #ccc;
}
</style>
