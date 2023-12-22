<script setup lang="ts">
import { onMounted, ref } from "vue";
import help1 from "../assets/xiangmu/help1.jpg";
import help2 from "../assets/xiangmu/help2.jpg";
import jd1 from "../assets/xiangmu/jd1.jpg";
import jd2 from "../assets/xiangmu/jd2.jpg";
import jd3 from "../assets/xiangmu/jd3.jpg";
import jd4 from "../assets/xiangmu/jd4.jpg";
import jd5 from "../assets/xiangmu/jd5.jpg";
import jd6 from "../assets/xiangmu/jd6.jpg";
import jd7 from "../assets/xiangmu/jd7.jpg";
import jd8 from "../assets/xiangmu/jd8.jpg";
import sm1 from "../assets/xiangmu/sm1.jpg";
import sm2 from "../assets/xiangmu/sm2.jpg";
import sm3 from "../assets/xiangmu/sm3.jpg";
import sm4 from "../assets/xiangmu/sm4.jpg";
import sm5 from "../assets/xiangmu/sm5.jpg";
import bm1 from "../assets/xiangmu/bm1.jpg";
import bm2 from "../assets/xiangmu/bm2.jpg";
import bm3 from "../assets/xiangmu/bm3.jpg";
import bd1 from "../assets/xiangmu/bd1.jpg";
import bd2 from "../assets/xiangmu/bd2.jpg";
import ai1 from "../assets/xiangmu/ai1.jpg";
import ai2 from "../assets/xiangmu/ai2.jpg";
import ai3 from "../assets/xiangmu/ai3.jpg";
import ai4 from "../assets/xiangmu/ai4.jpg";
import ai5 from "../assets/xiangmu/ai5.jpg";
import ai6 from "../assets/xiangmu/ai6.jpg";
import bx1 from "../assets/xiangmu/bx1.jpg";
import bx2 from "../assets/xiangmu/bx2.jpg";
import bx3 from "../assets/xiangmu/bx3.jpg";
import rb1 from "../assets/xiangmu/rb1.jpg";

const activeIndex = ref("3");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

interface imgItem {
  url: string;
  srcList: string[];
  title: string;
}

const imglist = ref<imgItem[]>([]);

const activeNames = ref(["0"]);
const handleChange = (val: string[]) => {
  console.log(val);
};

onMounted(() => {
  imglist.value = [
    {
      url: help2,
      srcList: [help2, help1],
      title: "帮助中心",
    },
    {
      url: jd1,
      srcList: [jd1, jd2, jd3, jd4, jd5, jd6, jd7, jd8],
      title: "精准打标",
    },
    {
      url: sm1,
      srcList: [sm1, sm2, sm3, sm4, sm5, bm1, bm2, bm3],
      title: "买卖家留言",
    },
    {
      url: bd1,
      srcList: [bd1, bd2],
      title: "买卖家发货前纠纷",
    },
    {
      url: ai1,
      srcList: [ai1, ai2, ai3, ai4, ai5, ai6],
      title: "AI",
    },
    {
      url: rb1,
      srcList: [rb1],
      title: "自研机器人管理后台",
    },
    {
      url: bx1,
      srcList: [bx1, bx2, bx3],
      title: "保险服务管理后台",
    },
  ];
});
</script>

<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo menus"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item>
      <router-link to="/">
        <div class="headClass">
          <img src="../assets/fengmiantu/head.png" alt="" />
          <h3>个人简历</h3>
        </div>
      </router-link>
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" :router="true">
      <router-link to="/self">个人信息</router-link>
    </el-menu-item>
    <el-menu-item index="2">
      <router-link to="/project">工作经历</router-link>
    </el-menu-item>
    <el-menu-item index="3">
      <router-link to="/hobbies">项目经验</router-link>
    </el-menu-item>
  </el-menu>

  <div class="proMain">
    <h1>项目经验</h1>
    <div class="img_project">
      <div v-for="(item, index) in imglist" :key="index" class="pro_item">
        <div class="demo-image__preview">
          <el-image
            style="width: 200px; height: 200px"
            :src="item.url"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :preview-src-list="item.srcList"
            :initial-index="4"
            fit="cover"
          />
        </div>
        <span class="protitle">{{ item.title }}</span>
      </div>

      <div class="demo-collapse">
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="帮助中心" name="1">
            <div style="text-align: left">
              1、采用原生js以及jquery.js;<br />
              2、前后端不分离，Java以及vm文件格式写前端页面
            </div>
          </el-collapse-item>
          <el-collapse-item title="精准打标" name="2">
            <div style="text-align: left">
              1、负责tns风控部门后台业务线;<br />
              2、基于vue2+elementui从0-1搭建项目，前后端分离;<br />
              3、独立开发，页面功能增删改查以及导出;<br />
              4、负责所有页面开发、维护以及上线等需求;<br />
              5、优化用户体验交互;
            </div>
          </el-collapse-item>
          <el-collapse-item title="买卖家留言" name="3">
            <div style="text-align: left">
              1、负责crm部门前台纠纷留言业务线，重构项目;（之前页面不是前后端分离）<br />
              2、基于vue2+elementui从0-1搭建项目，前后端分离;<br />
              3、独立开发，页面功能增删改查以及留言详情等需求;<br />
              4、负责页面开发、维护以及上线等需求;<br />
              5、优化用户体验交互，美化用户视觉上的体验效果
            </div>
          </el-collapse-item>
          <el-collapse-item title="买卖家发货前纠纷" name="4">
            <div style="text-align: left">
              1、负责crm部门发货前纠纷业务线，重构项目;（之前页面不是前后端分离）<br />
              2、基于vue2+elementui从0-1搭建项目，前后端分离;<br />
              3、独立开发，向卖家发起退货前纠纷;<br />
              4、负责页面开发、维护以及上线等需求;<br />
              5、优化用户体验交互，美化用户视觉上的体验效果
            </div>
          </el-collapse-item>
          <el-collapse-item title="AI智能研发" name="5">
            <div style="text-align: left">
              1、负责AI大数据部门AI智能业务线;<br />
              2、基于vue2+elementui从0-1搭建项目，前后端分离;<br />
              3、独立开发，类似于chatGPT的问答功能<br />
              4、负责页面开发需求;<br />
              5、优化用户体验交互，美化用户视觉上的体验效果
            </div>
          </el-collapse-item>
          <el-collapse-item title="自研机器人管理后台" name="6">
            <div style="text-align: left">
              1、负责crm部门自研机器人管理后台系统;<br />
              2、基于vue2+elementui从0-1搭建项目，前后端分离;<br />
              3、独立开发，增删改查以及导出等功能<br />
              4、负责页面开发维护等需求;<br />
              5、优化用户体验交互，美化用户视觉上的体验效果
            </div>
          </el-collapse-item>
          <el-collapse-item title="保险服务管理后台" name="7">
            <div style="text-align: left">
              1、负责crm部门保险服务管理后台系统;<br />
              2、基于vue2+elementui从0-1搭建项目，前后端分离;<br />
              3、独立开发，增删改查以及导出等功能<br />
              4、负责页面开发维护等需求;<br />
              5、优化用户体验交互，美化用户视觉上的体验效果
            </div>
          </el-collapse-item>

          <el-collapse-item title="其他" name="8">
            <div style="text-align: left">
              1、负责crm部门纠纷系统各个页面维护以及新需求功能;<br />
              2、前后端分离项目以及前后端不分离项目;<br />
              3、负责WAP端（移动端）的页面开发需求功能<br />
              4、负责各个系统页面开发维护等需求;<br />
              5、优化用户体验交互，美化用户视觉上的体验效果<br />
              6、作为前端负责人，制定前端代码规范，代码提交规范<br />
              7、通过使用webpack配置将项目打包成dist文件，通过git action 进行代码部署<br />
              8、一些请求多的页面，用keep-alive实现缓存，提高页面加载效率<br />
              9、开发中请求多个服务器端口，通过代理的方式在vue-config文件中配置多个服务器的端口，并配置项目的baseUrl以及超过响应时间取消请求<br />
              10、使用Vue-Router完成页面导航及路由懒加载，并运用permission文件中封装相应内容完成了导航的权限控制<br />
              11、使用axios拦截器对请求和响应数据进行拦截，配置请求头headers，baseurl，以及对响应体数据的统一改造
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style>
.menus {
  position: fixed;
  width: 100%;
  top: 0;
}

.headClass img {
  width: 100%;
  height: 100%;
  margin-right: 10px;
}

.headClass {
  display: flex;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
}

.proMain {
  background: url(../assets/fengmiantu/wo1.png) no-repeat;
  height: 730px;
  background-size: 100% 100%;
  margin: 0 20px;
  padding-top: 40px;
}

.proMain h1 {
  padding-top: 50px;
  color: #fff;
}

.el-collapse-item__header {
  padding-left: 20px;
  font-size: 16px;
}

.place {
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 1920px) {
  .proMain {
    background: url(../assets/fengmiantu/wo1.png) no-repeat;
    height: 840px;
    background-size: 100% 100%;
    padding-top: 40px;
  }
}

@media screen and (max-width: 1512px) {
  .proMain {
    background: url(../assets/fengmiantu/wo1.png) no-repeat;
    height: 720px;
    background-size: 100% 100%;
    padding-top: 40px;
  }
}

@media screen and (max-width: 1800px) {
  .proMain {
    background: url(../assets/fengmiantu/wo1.png) no-repeat;
    height: 720px;
    background-size: 100% 100%;
    padding-top: 40px;
  }
}

.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}

.img_project {
  width: 80%;
  background: #ffff;
  border-radius: 10px;
  margin: 0 auto 40px;
  padding: 20px 10px 30px;
  border: 1px solid #eee;
}

.pro_item {
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.pro_item:first-child {
  margin-left: 20px;
}

.protitle {
  margin-top: 10px;
}

.demo-image__preview {
  margin-bottom: 10px;
}
</style>
