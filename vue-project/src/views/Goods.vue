<template>
  <div>
    <div>
      <div class="headerG">
        <el-header style="padding: 12px 0">
          <el-select v-model="value" placeholder="按照名称搜索">
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
            @click="handlegoodsSearch"
            >搜索</el-button
          >
        </el-header>

        <div class="rightadd">
          <el-button type="text"
            ><i class="el-icon-plus"></i>添加分类</el-button
          >
        </div>
      </div>
    </div>
    <!-- 上是头部板块 下是表格板块 -->
    <div class="goodsmsg">
      <div class="goodstable">
        <el-table border style="width: 100%" :data="tableData">
          <el-table-column label="商品名称" width="175px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品描述" width="350px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.desc }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品规格" width="175px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.specAttr }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品价格" width="175px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.price }}</span>
            </template>
          </el-table-column>
          <el-table-column label="商品状态" width="175px">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.__v }}</span>
            </template>
          </el-table-column>

          <el-table-column label="操作选项" width="186px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >详情</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
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
import { mapActions, mapState } from "vuex";
// import { getgoodsproduct } from '../api/goods'
export default {
  data() {
    return {
      input: "",
      fenye: {
        pageNum: 1,
        pageSize: 5,
      },
      // seamsg:{
      //   pageNum:1,
      //   pageSize:5,
      //   productName:'',
      //   productDesc:''
      // },
      options: [
        {
          value: "productName",
          label: "按照名称搜索",
        },
        {
          value: "productDesc",
          label: "按照描述搜索",
        },
      ],
      value: "",
      // tableData: [],
    };
  },
  methods: {
    ...mapActions(["getgoodsproduct", "goodsGLSearch"]),
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    changepage(val) {
      // console.log("淡定，待会再做",val);
       var va = this.input;
      if(this.value == ""){
        this.fenye.pageNum = val;
        this.getgoodsproduct(this.fenye);
      }else if (this.value == "productName") {
        this.goodsGLSearch({
          pageNum: val,
          pageSize: 4,
          productName: va,
        });
      } else if (this.value == " productDesc") {
        this.goodsGLSearch({
          pageNum: val,
          pageSize: 4,
          productDesc: va,
        });
      }
    },

    handlegoodsSearch() {
      console.log("我搜！");
      // var ty = this.value;
      var va = this.input;
      console.log(this.value, va);
      if (this.value == "productName") {
        this.goodsGLSearch({
          pageNum: 1,
          pageSize: 4,
          productName: va,
        });
      } else if (this.value == " productDesc") {
        this.goodsGLSearch({
          pageNum: 1,
          pageSize: 4,
          productDesc: va,
        });
      }else if(this.value == ""){
         this.getgoodsproduct(this.fenye);
      }
    },
  },
  mounted() {
    //  getgoodsproduct(this.fenye).then((res) => {
    //       console.log("商品管理的数据",res);
    //     this.tableData = res.data.data.list
    //     // console.log("页面刷新",this.tableDataPL);
    //   })
  },
  computed: {
    tableData() {
      let datamsgn = this.$store.state.getsmoe.product.list;
      return datamsgn;
    },
    total() {
      return this.$store.state.getsmoe.product.total;
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
</style>