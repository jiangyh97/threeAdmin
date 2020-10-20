<template>
  <div>
    <div class="head">
      <div @click="dialogVisible = true"><span>创建用户</span></div>
    </div>
    <div>
      <div>
        <el-dialog title="添加用户" :visible.sync="dialogVisible" width="50%">
          <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="80px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="ruleForm.password"></el-input>
            </el-form-item>

            <el-form-item label="手机号" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>

            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>

            <el-form-item label="角色" prop="role_id">
              <el-select
                v-model="ruleForm.role_id"
                placeholder="请选择用户权限角色"
              >
                <el-option label="管理员" value="0"></el-option>
                <el-option label="VIP" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button
              type="primary"
              @click="(dialogVisible = false), handleaddUser('ruleForm')"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>

      <!-- 数据表格 -->
      <div class="usermsg">
        <div class="usertable">
          <el-table border style="width: 100%" :data="tableData">
            <el-table-column label="用户名" width="210px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.username }}</span>
              </template>
            </el-table-column>
            <el-table-column label="邮箱" width="210px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.email }}</span>
              </template>
            </el-table-column>
            <el-table-column label="电话" width="210px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.phone }}</span>
              </template>
            </el-table-column>
            <el-table-column label="注册时间" width="200px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{
                  scope.row.create_time
                }}</span>
              </template>
            </el-table-column>
            <el-table-column label="角色权限" width="200px">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.__v }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="208px">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)"
                  >修改</el-button
                >
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="fenye">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="5"
            @current-change="changepage"
            :current-page="fenye.pageNum"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      dialogVisible: false,
      fenye: {
        pageNum: 1,
        pageSize: 5,
      },

      ruleForm: {
        username: "",
        password: "",
        phone: "",
        email: "",
        role_id: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 1, max: 6, message: "长度在1到6个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 4, max: 8, message: "长度在4到8个字符", trigger: "blur" },
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          {
            pattern: /^0{0,1}(13[0-9]|15[7-9]|18[0-9]|153|156|18[7-9])[0-9]{8}$/,
            message: "手机号格式不对",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        role_id: [
          { required: true, message: "请选择用户权限角色", trigger: "change" },
        ],
      },
    };
  },

  methods: {
    ...mapActions(["addUser", "getusermsg"]),
    handleaddUser(ruleForm) {
      // console.log(this.ruleForm);
      this.addUser(this.ruleForm).then(() => {
        console.log("添加后执行");
        this.getusermsg({
          pageNum: 1,
          pageSize: 5,
        });
      });
    },

    changepage(val) {
      //分页
      // console.log(val);
      this.fenye.pageNum = val;
      this.getusermsg(this.fenye);
    },

    handleDelete(index, row){
      console.log(index, row);
    },
    handleEdit(index, row){
      console.log(index, row);
    },
  },
  computed: {
    tableData() {
      // let datamsg =  this.$store.state.getuser.list
      let datamsgn = this.$store.state.getsmoe.list.list;
      // console.log(datamsg);
      // for(let i = 0; i <  datamsgn.length;i++){
      //   datamsg[i].create_time = 0
      // }
      return datamsgn;
    },

    total() {
      //来自用户管理的数据
      return this.$store.state.getsmoe.list.total;
    },
  },
};
</script>
<style>
.head {
  padding: 18px 20px;
  width: 95%;
  border-bottom: 1px solid #ebeef5;
}
.head span {
  display: block;
  width: 80px;
  height: 28px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  border-radius: 3px;
  line-height: 28px;
  text-align: center;
  font-size: 12px !important;
  cursor: pointer;
}
.head span:hover {
  opacity: 0.8;
}
.usermsg {
  padding: 20px;
}
.usertable {
  border: 1px solid #ebeef5;
}
</style>