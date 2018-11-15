<template>
   <div id="list_88">
     <div class="box22">
       <!-- <div class="anniu"> -->
             <!-- <router-link to="/BasicInformation/BusinessManagement/index"> 
         <el-button type="primary">切换管理视图</el-button>
         	</router-link> -->
        <!-- </div> -->
         <div class="biaoti_55"><div>企业信息列表</div></div>
         <div class="tou55">
           <ul class="tou_2">
             <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">企业名称</p>
               </div>
               <div class="bao_2">
               <el-input v-model="enterprisename" size="mini" placeholder="请输入内容"></el-input>
               </div>
             </li>
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">企业性质</p>
               </div>
               <div class="bao_2">
                       <el-select clearable  v-model="Nature" size="mini" placeholder="请选择" >
                          <el-option
                            v-for="item in options4"
                            :key="item.id"
                            :label="item.companyTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
               </div>
             </li>
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">企业营业地址</p>
               </div>
               <div class="bao_2">
               <el-input v-model="businessaddress" size="mini" placeholder="请输入内容"></el-input>
               </div>
             </li>
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">联系人姓名</p>
               </div>
               <div class="bao_2">
               <el-input v-model="name" size="mini" placeholder="请输入内容"></el-input>
               </div>
             </li>
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">企业经营状态</p>
               </div>
               <div class="bao_2">
                     <el-select  v-model="state" clearable size="mini" placeholder="请选择" >
                          <el-option label="注销" value="0"></el-option>
                           <el-option label="正常" value="1"></el-option>
                        </el-select>
               </div>
             </li>
                  <li class="quanxuan_1">
               <div class="bao1">
               <p class="bt_1">法人代表人</p>
               </div>
               <div class="bao_2">
               <el-input v-model="representative" size="mini" placeholder="请输入内容" ></el-input>
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
         <div class="tem66">
         <div class="block11">
            <div class="Add1">
                <el-button class="bnt" size="small" @click="Addit">
                    添加
                </el-button>
            </div>
            <!-- <div class="Ass">
                <el-button @click="toggleSelection(tableData)">
                    全选
                </el-button>
            </div> -->
        </div>
         <div class="ge">
           <div class="tem66_1">
           <!-- 查看 -->
                   <el-dialog title="查看企业信息" :visible.sync="See" width="50%">
            <span>
                  <el-form :model="tableData3" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                   <el-form-item label="社会统一信用代码" prop="socialCreditNumber">
                        <el-input disabled v-model="tableData3.socialCreditNumber"></el-input>
                    </el-form-item>
                     <el-form-item label="组织结构编码" prop="organizationCode">
                        <el-input disabled v-model="tableData3.organizationCode"></el-input>
                    </el-form-item>
                     <el-form-item label="工商营业执照注册号" prop="bizRegisterCode">
                        <el-input disabled v-model="tableData3.bizRegisterCode"></el-input>
                    </el-form-item>
                     <el-form-item label="邮编" prop="zipCode">
                        <el-input disabled v-model="tableData3.zipCode"></el-input>
                    </el-form-item>
                    <el-form-item label="企业名称" prop="companyName">
                        <el-input disabled v-model="tableData3.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="企业营业地址" prop="address">
                        <el-input disabled v-model="tableData3.address"></el-input>
                    </el-form-item>
                       <el-form-item label="办公电话" prop="phoneNumber">
                          <el-input  disabled v-model="tableData3.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="传真号码" prop="faxNumber">
                          <el-input  disabled v-model="tableData3.faxNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人姓名" prop="contactPeopleName">
                          <el-input  disabled v-model="tableData3.contactPeopleName"></el-input>
                    </el-form-item>
                      <el-form-item label="联系人办公电话" prop="contactPeoplePhone">
                          <el-input  disabled v-model="tableData3.contactPeoplePhone"></el-input>
                    </el-form-item>
                     <el-form-item label="联系人手机号码" prop="contactPeopleCellPhone"   >
                          <el-input  disabled v-model="tableData3.contactPeopleCellPhone"></el-input>
                    </el-form-item>
                      <el-form-item label="企业联系邮箱" prop="email">
                          <el-input  disabled v-model="tableData3.email"></el-input>
                    </el-form-item>
                    <el-form-item label="企业网址" prop="homeWebsiteUrl">
                          <el-input  disabled v-model="tableData3.homeWebsiteUrl"></el-input>
                    </el-form-item>
                      <el-form-item label="法定代表人姓名" prop="representativeName">
                        <el-input disabled v-model="tableData3.representativeName"></el-input>
                    </el-form-item>
                        <el-form-item label="法定代表人证件类型" prop="credentialsId">
                            <el-select disabled v-model="tableData3.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options5"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item label="法定代表人证件编号" prop="representativeIdCardNumber">
                        <el-input disabled v-model="tableData3.representativeIdCardNumber"></el-input>
                    </el-form-item>
                       <el-form-item label="企业状态" prop="businessStatus">
                       <el-radio-group disabled v-model="tableData3.businessStatus" style="margin-left: -68%;">
                        <el-radio label="0">注销</el-radio>
                        <el-radio label="1">正常</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="企业性质" prop="companyTypeDicId">
                       <el-select disabled v-model="tableData3.companyTypeDicId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options4"
                            :key="item.id"
                            :label="item.companyTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>                
                      <el-form-item label="币种类型" prop="capitalCurrencyId">
                         <el-select disabled v-model="tableData3.capitalCurrencyId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options6"
                            :key="item.id"
                            :label="item.capitalCurrencyName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="注册资金（万元）" prop="registrationCapital">
                        <el-input disabled v-model="tableData3.registrationCapital"></el-input>
                    </el-form-item>
                    
                   
                        <el-form-item label="开工日期" prop="establishDate">
                     <el-date-picker
                       disabled v-model="tableData3.establishDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="备注" prop="remark">
                          <el-input type="textarea" disabled v-model="tableData3.remark" ></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="See=false">关 闭</el-button>
            </span>
        </el-dialog>

        <!--修改弹出框-->
        <el-dialog title="修改企业信息" :visible.sync="hand" width="50%">
            <span>
                         <el-form :model="tableData2" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                   <el-form-item label="社会统一信用代码" prop="socialCreditNumber">
                        <el-input  v-model="tableData2.socialCreditNumber"></el-input>
                    </el-form-item>
                     <el-form-item label="企业组织机构代码" prop="organizationCode">
                        <el-input  v-model="tableData2.organizationCode"></el-input>
                    </el-form-item>
                     <el-form-item label="工商营业执照注册号" prop="bizRegisterCode">
                        <el-input  v-model="tableData2.bizRegisterCode"></el-input>
                    </el-form-item>
                     <el-form-item label="邮编" prop="zipCode"  :rules="[
                        { required: true, message: '请输入邮编', trigger: 'blur' },
                        {  min: 6, max: 6,  message: '邮编码必须为六位', trigger: 'blur' },

                  ]">
                        <el-input  v-model="tableData2.zipCode"></el-input>
                    </el-form-item>
                    <el-form-item label="企业名称" prop="companyName">
                        <el-input  v-model="tableData2.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="企业营业地址" prop="address">
                        <el-input  v-model="tableData2.address"></el-input>
                    </el-form-item>
                       <el-form-item label="办公电话" prop="phoneNumber">
                          <el-input   v-model="tableData2.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="传真号码" prop="faxNumber">
                          <el-input   v-model="tableData2.faxNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人姓名" prop="contactPeopleName">
                          <el-input   v-model="tableData2.contactPeopleName"></el-input>
                    </el-form-item>
                      <el-form-item label="联系人办公电话" prop="contactPeoplePhone">
                          <el-input   v-model="tableData2.contactPeoplePhone"></el-input>
                    </el-form-item>
                     <el-form-item label="联系人手机号码" prop="contactPeopleCellPhone"  :rules="[
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 11, max: 11,  message: '请检查手机号码格式', trigger: 'blur' },

                  ]">
                          <el-input   v-model="tableData2.contactPeopleCellPhone"></el-input>
                    </el-form-item>
                      <el-form-item label="企业联系邮箱" prop="email" :rules="[
                      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                     { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }

                  ]">
                          <el-input   v-model="tableData2.email"></el-input>
                    </el-form-item>
                    <el-form-item label="企业网址" prop="homeWebsiteUrl">
                          <el-input   v-model="tableData2.homeWebsiteUrl"></el-input>
                    </el-form-item>
                      <el-form-item label="法定代表人姓名" prop="representativeName">
                        <el-input  v-model="tableData2.representativeName"></el-input>
                    </el-form-item>
                        <el-form-item label="法定代表人证件类型" prop="credentialsId">
                            <el-select  v-model="tableData2.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item label="法定代表人证件编号" prop="representativeIdCardNumber">
                        <el-input  v-model="tableData2.representativeIdCardNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="企业性质" prop="companyTypeDicId">
                       <el-select  v-model="tableData2.companyTypeDicId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options2"
                            :key="item.id"
                            :label="item.companyTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>   
                    
                      <el-form-item label="企业状态" prop="businessStatus">
                       <el-radio-group  v-model="tableData2.businessStatus" style="margin-left: -68%;">
                        <el-radio label="0">注销</el-radio>
                        <el-radio label="1">正常</el-radio>
                        </el-radio-group>
                    </el-form-item>             
                      <el-form-item label="币种类型" prop="capitalCurrencyId">
                         <el-select  v-model="tableData2.capitalCurrencyId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options_1"
                            :key="item.id"
                            :label="item.capitalCurrencyName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="注册资金（万元）" prop="registrationCapital">
                        <el-input  v-model="tableData2.registrationCapital"></el-input>
                    </el-form-item>
                    
                        <el-form-item label="成立日期" prop="establishDate">
                     <el-date-picker
                        v-model="tableData2.establishDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="备注" prop="remark">
                          <el-input type="textarea"  v-model="tableData2.remark" ></el-input>
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
          <el-form :model="tableData1" ref="tableData1" label-width="160px" class="demo-ruleForm">
            
                   <el-form-item label="社会统一信用代码" prop="socialCreditNumber">
                        <el-input  v-model="tableData1.socialCreditNumber"></el-input>
                    </el-form-item>
                     <el-form-item label="企业组织机构代码" prop="organizationCode">
                        <el-input  v-model="tableData1.organizationCode"></el-input>
                    </el-form-item>
                     <el-form-item label="工商营业执照注册号" prop="bizRegisterCode">
                        <el-input  v-model="tableData1.bizRegisterCode"></el-input>
                    </el-form-item>
                     <el-form-item label="邮编" prop="zipCode"  :rules="[
                        { required: true, message: '请输入邮编', trigger: 'blur' },
                        {  min: 6, max: 6,  message: '邮编码必须为六位', trigger: 'blur' },

                  ]">
                        <el-input  v-model="tableData1.zipCode"></el-input>
                    </el-form-item>
                    <el-form-item label="企业名称" prop="companyName">
                        <el-input  v-model="tableData1.companyName"></el-input>
                    </el-form-item>
                    <el-form-item label="企业营业地址" prop="address">
                        <el-input  v-model="tableData1.address"></el-input>
                    </el-form-item>
                       <el-form-item label="办公电话" prop="phoneNumber">
                          <el-input   v-model="tableData1.phoneNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="传真号码" prop="faxNumber">
                          <el-input   v-model="tableData1.faxNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人姓名" prop="contactPeopleName">
                          <el-input   v-model="tableData1.contactPeopleName"></el-input>
                    </el-form-item>
                      <el-form-item label="联系人办公电话" prop="contactPeoplePhone">
                          <el-input   v-model="tableData1.contactPeoplePhone"></el-input>
                    </el-form-item>
                     <el-form-item label="联系人手机号码" prop="contactPeopleCellPhone"  :rules="[
                        { required: true, message: '请输入手机号码', trigger: 'blur' },
                        { min: 11, max: 11,  message: '请检查手机号码格式', trigger: 'blur' },

                  ]">
                          <el-input   v-model="tableData1.contactPeopleCellPhone"></el-input>
                    </el-form-item>
                      <el-form-item label="企业联系邮箱" prop="email" :rules="[
                      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                     { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }

                  ]">
                          <el-input   v-model="tableData1.email"></el-input>
                    </el-form-item>
                    <el-form-item label="企业网址" prop="homeWebsiteUrl">
                          <el-input   v-model="tableData1.homeWebsiteUrl"></el-input>
                    </el-form-item>
                      <el-form-item label="法定代表人姓名" prop="representativeName">
                        <el-input  v-model="tableData1.representativeName"></el-input>
                    </el-form-item>
                        <el-form-item label="法定代表人证件类型" prop="credentialsId">
                            <el-select  v-model="tableData1.credentialsId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options"
                            :key="item.id"
                            :label="item.credentialsName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                      <el-form-item label="法定代表人证件编号" prop="representativeIdCardNumber">
                        <el-input  v-model="tableData1.representativeIdCardNumber"></el-input>
                    </el-form-item>
                    <el-form-item label="企业性质" prop="companyTypeDicId">
                       <el-select  v-model="tableData1.companyTypeDicId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options2"
                            :key="item.id"
                            :label="item.companyTypeName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>   
                    
                      <el-form-item label="企业状态" prop="businessStatus">
                       <el-radio-group  v-model="tableData1.businessStatus" style="margin-left: -68%;">
                        <el-radio label="0">注销</el-radio>
                        <el-radio label="1">正常</el-radio>
                        </el-radio-group>
                    </el-form-item>             
                      <el-form-item label="币种类型" prop="capitalCurrencyId">
                         <el-select  v-model="tableData1.capitalCurrencyId" placeholder="请选择" style="width:100%">
                          <el-option
                            v-for="item in options_1"
                            :key="item.id"
                            :label="item.capitalCurrencyName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="注册资金（万元）" prop="registrationCapital">
                        <el-input  v-model="tableData1.registrationCapital"></el-input>
                    </el-form-item>
                    
                        <el-form-item label="成立日期" prop="establishDate">
                     <el-date-picker
                        v-model="tableData1.establishDate"
                        format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        type="date"
                        style="width:50%; margin-left:-50%"
                        placeholder="选择日期">
                        </el-date-picker>
                    </el-form-item>
                      <el-form-item label="备注" prop="remark">
                          <el-input type="textarea"  v-model="tableData1.remark" ></el-input>
                    </el-form-item>
                </el-form>
            </span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="Addition = false">取 消</el-button>
                <el-button type="primary" @click="add">添 加</el-button>
            </span>
        </el-dialog>
        <!--弹出框结束-->

         <el-table :data="tableData" style="width: 95%;margin: auto;">
           <el-table-column prop="companyName" :show-overflow-tooltip="true" width="140" label="企业名称">
            </el-table-column>
            <el-table-column prop="organizationCode"  :show-overflow-tooltip="true" width="140" label="企业组织机构代码">
            </el-table-column>
            <el-table-column prop="address" :show-overflow-tooltip="true" width="110" label=" 企业营业地址 ">
            </el-table-column>
            <el-table-column prop="companyTypeDic.companyTypeName" :show-overflow-tooltip="true" width="110" label="企业性质">
            </el-table-column>
            <el-table-column prop="representativeName"  :show-overflow-tooltip="true" width="110" label="法定人代表人">
            </el-table-column>
            <el-table-column prop="registrationCapital" :show-overflow-tooltip="true" width="140" label="注册资金（万 元）">
            </el-table-column>
             <el-table-column prop="capitalCurrency.capitalCurrencyName" :show-overflow-tooltip="true" width="120" label="注册资本币种">
            </el-table-column>
               <el-table-column prop="establishDate" :show-overflow-tooltip="true" width="100" label="成立日期 ">
            </el-table-column>
             <el-table-column prop="contactPeopleName" :show-overflow-tooltip="true" width="100" label="联系人姓名 ">
            </el-table-column>
              <el-table-column prop="contactPeopleCellPhone" :show-overflow-tooltip="true" width="140" label="联系人手机号码 ">
            </el-table-column>
                <el-table-column prop="businessStatus" :show-overflow-tooltip="true" width="105" label="企业经营状态">
            </el-table-column>

             <el-table-column
              fixed="right"
              label="查看企业信息"
              width="120">
               <template slot-scope="scope">
                 <span class="el-icon-view" @click="details(scope.row)"></span>
                </template>
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

   
         </div>
      
   </div>
   
   </div>
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
</template>

<script>
export default {
  name: "list_88",
  data() {
    return {
      currentPage:1, 
      See:false,
      state:'',
      yeshuo:"1",
      tiao:"8",
      input: '',
      options_1:[],
      enterprisename:"",
      businessaddress:"",
      options_2:[],
      name:"",
      representative:"",
      multipleSelection: [],
      Nature:"",
      uid: "",
      rowid:"",
      totalPage:+"",
      options: [],
      2: [],
      options2: [],
      options4:[],
      options3:[],
      options5:[],
      options6:[],
      options_2:[],
      options_3:[],
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

      tableData: [],
      tableData2:{},
      tableData1:{},
    };
  },

  mounted() {
    var that =this
    that.list()

           that.axios
          .get("/apis/front/public/loadCompanyTypeDicList")  //企业性质下拉框
          .then(function(response) {
            console.log(response.data);
             that.options4=response.data.companyTypeDicList
          });
  },
  methods: {
    //查看
    details(row){
      var that =this
      that.See=true 
      //证件下拉框
      that.axios.get("/apis/front/public/loadCredentialsList").then(function(response) {
            console.log(response.data);
            that.options5=response.data.credentialsList
          });
          //币种下拉框
          that.axios.get("/apis/front/public/loadCapitalCurrencyList").then(function(response) {
            console.log(response.data);
            that.options6=response.data.capitalCurrencyList
          })
          //企业性质下拉框
        that.axios.get("/apis/front/public/loadCompanyTypeDicList").then(function(response) {
            console.log(response.data);
             that.options4=response.data.companyTypeDicList
          });
        if (row.businessStatus=="正常") {
         row.businessStatus="1"
       }else if (row.businessStatus=="注销") {
         row.businessStatus="0"
         
       }
       that.tableData3=row

    },

    list(){
           var that = this;
        that.axios.get("/apis/admin/subContractor/pageList", {
            params: {
              page: that.yeshuo,
              pageSize:that.tiao,
            }
          })
          .then(function(response) {
            console.log(response.data.rows);
            var array = response.data.rows
            for (let i = 0; i < array.length; i++) {
              if ( array[i].businessStatus=="1") {
                 array[i].businessStatus="正常"
              }else if ( array[i].businessStatus=="0") {
                array[i].businessStatus="注销"
              }
            }
            that.totalPage=response.data.totalPage;
            that.tableData = array;
          });
    },
    //分页
    handleSizeChange(val) {
      this.tiao=` ${val}`;
      this.list();
    },
    handleCurrentChange(val) {
      this.yeshuo=` ${val}`;
      this.list();
      
    },
    //修改
    modify(){
      var that =this
       that.axios
          .get("/apis/admin/subContractor/update",{
            params:{
              socialCreditNumber:that.tableData2.socialCreditNumber,
              companyName:that.tableData2.companyName,
              organizationCode:that.tableData2.organizationCode,
              bizRegisterCode:that.tableData2.bizRegisterCode,
              address:that.tableData2.address,
              zipCode:that.tableData2.zipCode,
              representativeName:that.tableData2.representativeName,
              representativeIdCardNumber:that.tableData2.representativeIdCardNumber,
              registrationCapital:that.tableData2.registrationCapital,
              establishDate:that.tableData2.establishDate,
              phoneNumber:that.tableData2.phoneNumber,
              faxNumber:that.tableData2.faxNumber,
              contactPeopleName:that.tableData2.contactPeopleName,
              contactPeoplePhone:that.tableData2.contactPeoplePhone,
              contactPeopleCellPhone:that.tableData2.contactPeopleCellPhone,
              email:that.tableData2.email,
              homeWebsiteUrl:that.tableData2.homeWebsiteUrl,
              businessStatus:that.tableData2.businessStatus,
              remark:that.tableData2.remark,
              credentialsId:that.tableData2.credentialsId,
              capitalCurrencyId:that.tableData2.capitalCurrencyId,
              organizationTypeId:that.tableData2.organizationTypeId,
              id:that.rowid,
              companyTypeDicId:that.tableData2.companyTypeDicId
            }
          }).then(function(response) {
            console.log(response.data);
            that.list()
          });
          that.hand=false
    },
   //添加按钮
    Addit() {
      var that = this;
      that.Addition = true; 
      if (JSON.stringify(that.tableData1)!=="{}") {
        that.tableData1={};
      } 
        //证件下拉框
      that.axios.get("/apis/front/public/loadCredentialsList").then(function(response) {
            console.log(response.data);
            that.options=response.data.credentialsList
          });
          //币种下拉框
          that.axios.get("/apis/front/public/loadCapitalCurrencyList").then(function(response) {
            console.log(response.data);
            that.options_1=response.data.capitalCurrencyList
           
          }); 
  
          that.axios
          .get("/apis/front/public/loadCompanyTypeDicList")  //企业性质下拉框
          .then(function(response) {
            console.log(response.data);
             that.options2=response.data.companyTypeDicList
           
          });
      
    },
    //查询
    query(){
      var that =this
      console.log(that.state)
        that.axios.get("/apis/admin/subContractor/pageList",{
            params:{
              page: 1,
              pageSize: 10,
              companyName:that.enterprisename,
              organizationTypeId:that.Nature,
              address:that.businessaddress,
              contactPeopleName:that.name,
              businessStatus:that.state,
              representativeName:that.representative,
              companyTypeDicId:that.Nature,
            }
          }).then(function(response) {
            console.log(response.data);
            that.tableData=response.data.rows
          });
    },
    //弹框添加
    add() {
      var that = this;
      that.Addition = false;
            that.axios
          .get("/apis/admin/subContractor/add",{
            params:{
              socialCreditNumber:that.tableData1.socialCreditNumber,
              companyName:that.tableData1.companyName,
              organizationCode:that.tableData1.organizationCode,
              bizRegisterCode:that.tableData1.bizRegisterCode,
              address:that.tableData1.address,
              zipCode:that.tableData1.zipCode,
              representativeName:that.tableData1.representativeName,
              representativeIdCardNumber:that.tableData1.representativeIdCardNumber,
              registrationCapital:that.tableData1.registrationCapital,
              establishDate:that.tableData1.establishDate,
              phoneNumber:that.tableData1.phoneNumber,
              faxNumber:that.tableData1.faxNumber,
              contactPeopleName:that.tableData1.contactPeopleName,
              contactPeoplePhone:that.tableData1.contactPeoplePhone,
              contactPeopleCellPhone:that.tableData1.contactPeopleCellPhone,
              email:that.tableData1.email,
              homeWebsiteUrl:that.tableData1.homeWebsiteUrl,
              businessStatus:that.tableData1.businessStatus,
              remark:that.tableData1.remark,
              credentialsId:that.tableData1.credentialsId,
              capitalCurrencyId:that.tableData1.capitalCurrencyId,
              organizationTypeId:that.tableData1.organizationTypeId,
              id:that.rowid,
              companyTypeDicId:that.tableData1.companyTypeDicId
            }
          }).then(function(response) {
            console.log(response.data);
                if (response.data.code=="0") {
               that.$message.error(response.data.message);
            }
            that.list();
          });
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
      var that =this
      that.tableData2 = row;
       that.rowid=row.id;
       //证件下拉框
    that.axios.get("/apis/front/public/loadCredentialsList").then(function(response) {
            console.log(response.data);
            that.options_2=response.data.credentialsList
          });
          that.axios
          .get("/apis/front/public/loadCapitalCurrencyList")  //币种下拉框
          .then(function(response) {
            console.log(response.data);
            that.options_3=response.data.capitalCurrencyList
          }); 
        that.axios
          .get("/apis/front/public/loadCompanyTypeDicList")  //企业性质下拉框
          .then(function(response) {
            console.log(response.data);
             that.options3=response.data.companyTypeDicList
          })
       if (row.businessStatus=="正常") {
         row.businessStatus="1"
       }else if (row.businessStatus=="注销") {
         row.businessStatus="0";
       }
      this.hand = true;;
    },
    //删除
    handleDelete(row) {
      var that = this;
      that.$confirm("此操作将永久删除该信息, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        that.axios.get("/apis/admin/subContractor/delete",{
            params:{
                id:row.id
            }
          }).then(function(response) {
              that.list()
             that.$message({
            type: "success",
            message: "删除成功!"
          });
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
  float: left;;
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
  height: 100%;
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
.tem66 {
  width: 100%;
  height: 62%;
  border: 1px solid #ccc;
  float: left;
  margin-top: 5px;
  position: relative;
 
}
.ge {
  width: 100%;
  height: 76%;
  float: left;
  margin-top: 1%;
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
.tem66_1{
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
.bao p{
  width: 92px;
}
.bao_2 {
  width: 65%;
  float: left;
  margin-left: 5%;
}
.query_1{
  float: right;
  margin-right:6%;
}
.fenye_55{
  position: absolute;
  right: 0px;
  bottom: 2%;
}
</style>
