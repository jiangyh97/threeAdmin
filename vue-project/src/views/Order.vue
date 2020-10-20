<template>
  <div class="order-box">
    <div>
      <div class="headerG">
        <el-header style="padding: 12px 0">
          <el-select v-model="value" placeholder="选择条件搜索">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>

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
            @click="handleOrderSearch"
            >搜索</el-button
          >
        </el-header>
      </div>
    </div>
    <!-- 上是头部板块 下是表格板块 -->
    <div class="goodsmsg">
      <div class="goodstable">
        <el-table border style="width: 100%" :data="tableData">
          <el-table-column label="订单号" width="218px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.orderId }}</span>
            </template>
          </el-table-column>
          <el-table-column label="收件人" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.recipient }}</span>
            </template>
          </el-table-column>
          <el-table-column label="订单状态" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.payStatus }}</span>
            </template>
          </el-table-column>
          <el-table-column label="订单总价" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">￥{{ scope.row.allPrice }}</span>
            </template>
          </el-table-column>
          <el-table-column label="创建时间" width="200px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.create_time }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作" width="200px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >查看详情</el-button
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
// import {getInitOrder,getOrderSearch} from "../api/reqOrder";

import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      // total: "",
      input: "",
      // tableData: [],
      options: [
        {
          value: "recipient",
          label: "按照收件人搜索",
        },
        {
          value: "orderId",
          label: "按照订单号搜索",
        },
      ],
      value: "",

      fenye: {
        pageNum: 1,
        pageSize: 5,
      },
    };
  },
  methods: {
    ...mapActions(["getInitOrder", "getOrderSearch"]),
    handleOrderSearch() {
      console.log("我即将执行搜索！", this.value, this.input);
      var type = this.value;
      var value = this.input;
      this.getOrderSearch({
        type: type,
        value: value,
        pageNum: 1,
        pageSize: 5,
      });
    },
    changepage(val) {
      console.log("淡定，待会再做", val);
      this.fenye.pageNum = val;
      this.getInitOrder(this.fenye);
    },
  },

  // 初始化数据
  mounted() {
    this.getInitOrder(this.fenye);
    // console.log(data);
    // console.log(this.total,this.tableData);
  },
  computed: {
    tableData() {
      let datamsgn = this.$store.state.orderAb.ordermsg.list;
      // console.log("datamsgn",datamsgn);
      return datamsgn;
    },
    total() {
      return this.$store.state.orderAb.ordermsg.total;
    },
  },
};
</script>

<style lang="scss">
.order-box {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.order-input {
  width: 150px;
  height: 40px;
}
.order-input::placeholder {
  color: #eee !important;
}
.el-input__inner {
  color: black;
}
// .el-input__inner::placeholder {
//   color: #606266 !important;
// }
.el-header {
  background-color: white;
}
.orderfeny {
  margin: 0 auto;
}
</style>