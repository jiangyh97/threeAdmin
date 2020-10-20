<template>
  <div>
    <div>
      <div class="headerG">
        <el-header style="padding: 12px 0">
          <el-input
            v-model="input"
            placeholder="关键字"
            class="order-input"
            style="width: 150px; height: 40px; margin-left: 10px"
          ></el-input>
          <el-button
            type="primary"
            icon="el-icon-search"
            style="margin-left: 10px"
            @click="handleSpecsSearch"
            >搜索</el-button
          >
        </el-header>

        <div class="rightadd" @click="dialogVisible = true">
          <el-button type="text"
            ><i class="el-icon-plus"></i>添加规格</el-button
          >
        </div>
      </div>
    </div>
    <!--上面是头部板块 下面是添加板块  -->
    <div>
      <el-dialog title="新增规格" :visible.sync="dialogVisible" width="50%">
        <el-form
          :model="ruleForm"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="分类名称" prop="name">
            <el-select
              v-model="ruleForm.name"
              placeholder="请选择"
              class="xuanz"
            >
              <el-option label="管理员" value="0"></el-option>
              <el-option label="VIP" value="1"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="规格名称" prop="category_id">
            <el-input v-model="ruleForm.category_id"></el-input>
          </el-form-item>

          <el-form-item label="规格属性" prop="option">
            <el-select
              v-model="ruleForm.option"
              placeholder="请选择"
              class="xuanz"
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
            @click="(dialogVisible = false), handleaddSpecs('ruleForm')"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>

    <!-- 上是添加板块 下是表格板块 -->
    <div class="goodsmsg">
      <div class="usertable">
        <el-table border style="width: 100%" :data="tableData">
          <el-table-column label="规格名称" width="259px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="规格属性" width="460px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.option }}</span>
            </template>
          </el-table-column>
          <el-table-column label="规格归类" width="257px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{
                scope.row.category_name
              }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作选项" width="259px">
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
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      dialogVisible: false,
      input: "",
      fenye: {
        pageNum: 1,
        pageSize: 5,
      },
      searchmsg: {
        value: "",
        pageNum: 1,
        pageSize: 5,
      },
      ruleForm: {
        name: "",
        category_id: "",
        option: "",
      },

      //   value: "",
    };
  },

  methods: {
    ...mapActions(["getspecs", "specsSearch"]),
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    changepage(val) {
      // console.log("淡定，待会再做");
      this.fenye.pageNum = val;
      this.searchmsg.pageNum = val;
      this.searchmsg.value = this.input;
      if (this.input == "") {
        this.specsSearch(this.searchmsg);
      } else if (this.input) {
        this.specsSearch(this.searchmsg);
      } else {
        this.getspecs(this.fenye);
      }
    },
    handleaddSpecs(){//添加规格属性
      console.log("加呀！");
    },
    
    handleSpecsSearch() {
      //搜索
      console.log(this.input);
      this.searchmsg.value = this.input;
      if (this.input == "") {
        this.specsSearch(this.searchmsg);
      } else {
        this.specsSearch(this.searchmsg);
      }
    },
  },

  computed: {
    tableData() {
      let datamsgn = this.$store.state.getsmoe.sysAttr.list;
      return datamsgn;
    },
    total() {
      return this.$store.state.getsmoe.sysAttr.total;
    },
  },
};
</script>
<style>
.headerG {
  padding: 18px 20px;
  width: 97%;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  text-align: center;
  justify-content: space-between;
}
.rightadd span {
  display: block;
  width: 117px;
  height: 36px;
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  border-radius: 3px;
  line-height: 36px;
  text-align: center;
  font-size: 12px !important;
  cursor: pointer;
}
.rightadd span:hover {
  opacity: 0.8;
}
.goodsmsg {
  padding: 20px;
}
.goodstable {
  border: 1px solid #ebeef5;
}
.xuanz{
  width: 648px;
}
</style>