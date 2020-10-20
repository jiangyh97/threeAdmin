<template>
  <div class="home">
    <!-- 左边导航区域 -->
    <div class="hLeft">
      <div class="smallhead">
        <img src="../img/bg01.png" alt="" />
      </div>
      <router-link to="/count" class="first">
        <div class="shouye">
          <i class="el-icon-menu"></i>
          首页
        </div>
      </router-link>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="rgb(43, 46, 51)"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-goods"></i>
            <span>商品</span>
          </template>

          <el-menu-item-group>
            <router-link to="/goodsclass">
              <el-menu-item index="2-1" @click="handlegoodsclass">
                <i class="el-icon-data-line"></i>品类管理
              </el-menu-item>
            </router-link>
           
            <router-link to="/goods">
              <el-menu-item index="2-2" @click="handlegoodsproduct">
                <i class="el-icon-shopping-cart-full"></i>商品管理
              </el-menu-item>
            </router-link>
            
            <router-link to="/specs">
              <el-menu-item index="2-3" @click="handlegoodsspecs">
                <i class="el-icon-paperclip"></i>规格属性
              </el-menu-item>
            </router-link>
           
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user"></i>
            <span>用户</span>
          </template>

          <el-menu-item-group>
            
            <router-link to="/userpower"> 
              <el-menu-item index="3-1" @click="handleUserd">
                <i class="el-icon-user-solid"></i>用户管理
              </el-menu-item>
            </router-link>

            <router-link to="/Powerctrl">
              <el-menu-item index="3-2" @click="handlepowerctrl">
                <i class="el-icon-setting" ></i>权限管理
              </el-menu-item>
            </router-link>
           
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span>订单</span>
          </template>

          <el-menu-item-group>
            <router-link to="/Order">
              <el-menu-item index="4-1">
                <i class="el-icon-mouse"></i>订单管理
              </el-menu-item>
            </router-link>
            
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
    <!-- 右边内容区域 -->
    <div class="hContent">
      <div class="home-header">
        <div class="home-header-msg">
          <div>
            <img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              alt=""
            />
            <span>{{ username }}</span>
          </div>
          <div class="buxiaode">|</div>
          <!-- <div @click="handleout()">
             <router-link to="/">退出登录</router-link>
          </div> -->
          <div @click="handleout()" class="out">
             退出登录
          </div>
        </div>
      </div>

      <div class="home-middle">
        <div class="nei">
          <router-view></router-view>
        </div>
      </div>

      <div class="home-footer">Created By Fiora At 2019.07</div>
    </div>
  </div>
</template>

<script>

import { mapState,mapActions } from "vuex";
export default {
  name: "Home",
  components: {},

  methods: {
    //   @open="handleOpen"
    // @close="handleClose"
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    
    handleout(){
      if(confirm("确认退出吗？")){
        localStorage.token = ''; 
        this.$router.replace("/");
      }
      // return false;
    },
    ...mapActions(["getusermsg","getgoodsclass","getgoodsproduct","getspecs","getpowerctrl"]),
    handleUserd(){//用户列表请求
       this.getusermsg({
         pageNum:1,
         pageSize:5
       })
    },
    handlegoodsclass(){//品类列表请求
      this.getgoodsclass({
         parentId:0,
         pageNum:1,
         pageSize:5
      })
      // console.log("我是品类管理");
    },
    handlegoodsproduct(){//商品管理请求
    // console.log("我又来啦！");
        this.getgoodsproduct({
         pageNum:1,
         pageSize:5
       })
    },
    handlegoodsspecs(){//规格属性请求
    console.log("我是规格属性的请求！");
        this.getspecs({
         pageNum:1,
         pageSize:5
       })
    },
    handlepowerctrl(){//规格属性请求
    console.log("我是权限管理的请求！");
        this.getpowerctrl({
         pageNum:1,
         pageSize:5
       })
    },

  },
  computed: {
    username() {
      return localStorage.username;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/index.css";
@import "../assets/home.css";
.out{
  cursor: pointer;
}
</style>