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
</style>