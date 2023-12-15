<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref("3");
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

    <div class="proMain">
      <h1>项目经验</h1>
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
  background: url(../assets/fengmiantu/wo1.JPG) no-repeat;
  height: 730px;
  background-size: 100% 100%;
  margin: 0 20px;
}

.proMain h1 {
  padding-top: 50px;
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
    background: url(../assets/fengmiantu/wo1.JPG) no-repeat;
    height: 840px;
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 1512px) {
  .proMain {
    background: url(../assets/fengmiantu/wo1.JPG) no-repeat;
    height: 720px;
    background-size: 100% 100%;
  }
}

@media screen and (max-width: 1800px) {
  .proMain {
    background: url(../assets/fengmiantu/wo1.JPG) no-repeat;
    height: 720px;
    background-size: 100% 100%;
  }
}
</style>