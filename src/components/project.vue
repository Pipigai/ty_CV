<script setup lang="ts">
import { ref } from "vue";
const activeName = ref(["1", "2", "3"]);

const activeIndex = ref("2");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
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

  <div class="workMain">
    <h1>工作经历</h1>
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="place">
              <span>北京仁才信息技术有限公司（外包敦煌网）</span>
              <span>2022.03-2024.03</span>
              <span>北京</span>
            </div>
          </template>
          <div class="company1">
            部门：CRM ————————前端工程师<br />
            crm部门是针对买卖家订单纠纷流程的部门，所有的项目都涉及到pc端以及WAP端H5页面，买卖家，多语功能。公司网站：卖家：https://seller.dhgate.com/
            买家：https://www.dhgate.com/ <br />
            工作内容：<br />
            1.负责业务产品的前端功能页面需求开发<br />
            2.负责WAP、PC端页面功能优化<br />
            3.负责WAP、PC端前端项目搭建以及分工
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div class="place">
              <span>上海至一科技有限公司</span>
              <span>2019.06-2021.11</span>
              <span>上海</span>
            </div>
          </template>
          <div class="company1">
            部门：研发 ————————前端工程师<br />
            工作内容：<br />
            1. 负责商城微信小程序的开发工作<br />
            2. 使用flex弹性布局解决界面相关的对齐居中等问题<br />
            3.
            负责公众号的开发工作，使用HTML5+CSS+PHP语言，配合后端工程师一起开发公众号，现已能搜索出（积分兑换吧
            ）<br />
            4. 负责门户网站的静态页面开发<br />
            5. 负责移动端的pos机页面开发工作负责后台管理PHP的修改。<br />
            6. 负责APP的开发工作以及后台操作开发工作<br />
            7. 负责APP页面功能修复，样式调整以及前端bug修复<br />
            8.
            负责web后台数据表开发，样式调整以及页面数据修复问题负责公司web后台前端bug修复<br />
            9. 负责测试各个项目需求，写操作文档
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div class="place">
              <span>上海妙联数字有限公司</span>
              <span>2018.03-2019.05</span>
              <span>上海</span>
            </div>
          </template>
          <div class="company1">
            部门：UI设计 ————————UI设计师<br />
            工作内容：<br />
            1.APP界面设计<br />
            2.Web后台页面设计<br />
            3.公司logo设计<br />
            4.公司发展规划以及方向等产品原型设计
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style>
.demo-collapse {
  width: 90%;
  margin: 0 auto;
  padding-bottom: 30px;
}

.company1 {
  text-align: left;
  padding: 10px 20px;
}

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

.workMain {
  background: url(../assets/fengmiantu/wo1.png) no-repeat;
  height: 730px;
  background-size: 100% 100%;
  margin: 0 20px;
}

.workMain h1 {
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
  .workMain {
    background: url(../assets/fengmiantu/wo1.png) no-repeat;
    height: 840px;
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 1512px) {
  .workMain {
    background: url(../assets/fengmiantu/wo1.png) no-repeat;
    height: 720px;
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 1800px) {
  .workMain {
    background: url(../assets/fengmiantu/wo1.png) no-repeat;
    height: 720px;
    background-size: 100% 100%;
  }
}
</style>
