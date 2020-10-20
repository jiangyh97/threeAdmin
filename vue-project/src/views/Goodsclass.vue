<template>
  <div>
    <div class="headgood">
      <div class="list" @click="back">
        一级商品分类列表 <P class="zizi" v-show="!state">->{{ zizi }}</P>
      </div>
      <div class="rightadd">
        <el-button type="text" @click="open"
          ><i class="el-icon-plus"></i>添加分类</el-button
        >
      </div>
    </div>

    <div class="tablewarp">
      <div class="tableone">
        <el-table border style="width: 100%" :data="tableDataPL">
          <el-table-column label="商品分类" width="816px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作选项" width="420px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >修改分类</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleLook(scope.$index, scope.row)"
                v-show="state"
                >查看子分类</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="fenye">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total || 10"
        :page-size="5"
        @current-change="changepage"
        :current-page="fenye.pageNum"
      ></el-pagination>
    </div>
  </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
import { mapActions, mapState } from "vuex";
// import  getgoodsclass  from '../api/goods'
export default {
  data() {
    return {
      // tableDataPL:[],
      fenye: {
        pageNum: 1,
        pageSize: 5,
        parentId: "0",
      },
      fenye1: {
        pageNum: 1,
        pageSize: 5,
        parentId: "0",
      },
      zizi: "",
      state: true, //控制数据或板块是否显示
      parentIdy: 0,
    };
  },
  methods: {
    ...mapActions(["addgoodsclass", "changeclass", "getgoodsclass"]),
    handleEdit(index, row) {
      //修改分类
      console.log(index, row);
      var categoryId = row._id;
      // var categoryName;
      // if (this.zizi == "") {
      this.$prompt("请输入新分类名", "修改分类", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          console.log("正在修改分类");
          this.changeclass({
            categoryId: categoryId,
            categoryName: value,
          });
          this.$message({
            type: "success",
            message: "您将类修改为: " + value,
          });
          if (this.zizi == "") {
            this.getgoodsclass(this.fenye);
          } else {
            this.getgoodsclass(this.fenye1);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
      // }
    },
    handleLook(index, row) {
      //查看子分类
      console.log(index, row);
      this.zizi = row.name;
      this.fenye1.parentId = row._id;
      this.parentIdy = row._id;
      this.fenye1.pageNum = 1;
      this.getgoodsclass(this.fenye1).then(() => {
        this.state = false;
      });
    },
    back() {
      this.getgoodsclass(this.fenye).then(() => {
        this.state = true;
        this.zizi = "";
        this.parentIdy = 0;
      });
    },
    open() {
      //添加分类
      var aa = this.parentIdy;
      console.log(aa);
      this.$prompt("添加分类", "", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          console.log("正在添加分类", aa);
          this.addgoodsclass({
            parentId: aa,
            categoryName: value,
          });
          this.$message({
            type: "success",
            message: "你添加的类是: " + value,
          });
          if (this.zizi == "") {
            this.getgoodsclass(this.fenye);
          } else {
            this.getgoodsclass(this.fenye1);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },

    changepage(val) {
      //分页
      console.log(val);
      this.fenye.pageNum = val;
      this.fenye1.pageNum = val;
      if (this.zizi == "") {
        this.getgoodsclass(this.fenye);
      } else {
        this.getgoodsclass(this.fenye1);
      }
    },
  },
  mounted() {
    // getgoodsclass(this.fenye).then((res) => {
    //     // console.log(res);
    //   this.tableDataPL = res.data.data.list
    //   // console.log("页面刷新",this.tableDataPL);
    // })
  },
  computed: {
    tableDataPL() {
      let datamsgn = this.$store.state.getsmoe.goodslist.list;
      return datamsgn;
    },
    total() {
      return this.$store.state.getsmoe.goodslist.total;
    },
  },
};
</script>
<style>
.el-button--danger {
  color: #000000 !important;
  background-color: white !important;
  border: 1px solid #dcdfe6 !important;
}
.zizi {
  color: black;
  display: inline-block;
}
.headgood {
  padding: 18px 20px;
  width: 97%;
  border-bottom: 1px solid #ebeef5;
  display: flex;
  justify-content: space-between;
}
.headgood span {
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
.headgood span:hover {
  opacity: 0.8;
}
.tablewarp {
  padding: 20px;
  height: auto;
}
.tableone {
  border: 1px solid #ebeef5;
}
.fenye {
  margin: 0 auto;
  text-align: center;
  padding: 10px;
}
.list {
  color: blue;
  padding-top: 12px;
  cursor: pointer;
}
</style>