<template>
  <div>
    <div class="powerhead">
      <div @click="dialogVisible = true"><span>创建角色</span></div>
    </div>

    <div class="goodsmsg">
      <div class="usertable">
        <el-table border style="width: 100%" :data="tableData">
          <el-table-column label="角色名称" width="247px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" width="247px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="授权时间" width="247px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{
                scope.row.auth_time
              }}</span>
            </template>
          </el-table-column>
          <el-table-column label="授权人" width="247px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{
                scope.row.auth_name
              }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="247px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >修改</el-button
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
import { mapState,mapActions } from "vuex";
export default {
  data() {
    return {
      fenye: {
        pageNum: 1,
        pageSize: 5,
      },
    };
  },
  methods: {
     ...mapActions(["getpowerctrl"]),
    changepage(val) {
      //分页
      console.log("这是分页，等待请求完成后再做");
        this.fenye.pageNum = val;
        this.getpowerctrl(this.fenye);
    },
  },

  computed: {
    tableData() {
      let datamsgn = this.$store.state.getsmoe.role.list;
      return datamsgn;
    },
    total() {
      return this.$store.state.getsmoe.role.total;
    },
  },
};
</script>


<style lang="scss">
.powerhead {
  padding: 18px 20px;
  width: 95%;
  border-bottom: 1px solid #ebeef5;
}
.powerhead span {
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
.powerhead span:hover {
  opacity: 0.8;
}
.el-pagination {
  display: flex;
  justify-content: center;
}
.goodsmsg {
  padding: 20px;
}
.goodstable {
  border: 1px solid #ebeef5;
}
</style>