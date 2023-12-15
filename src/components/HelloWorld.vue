<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import qiuzhi from "../assets/fengmiantu/qiuzhi.png";
import xiangmu from "../assets/fengmiantu/xiangmu.png";
import aihao from "../assets/fengmiantu/aihao.png";
// reactive 实时更新，针对数组，对象的，数字跟布尔值不生效
// ref 基本数据类型；reactive 处理较复杂的数据类型

interface ListItem {
  imgUrl: string;
  name: string;
  words: string;
  path: string;
}

const loading = ref(true);
const lists = ref<ListItem[]>([]);
const router = useRouter();

// 事件
const goToPage = (path: string) => {
  console.log(path, "123131231");
  router.push(path);
};

const activeIndex = ref("0");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

// 初始化渲染数据
onMounted(() => {
  loading.value = false;
  lists.value = [
    {
      imgUrl: qiuzhi,
      name: "Self Introduction",
      words: "个人信息",
      path: "/self",
    },
    {
      imgUrl: xiangmu,
      name: "Work Company",
      words: "工作经历",
      path: "/project",
    },
    {
      imgUrl: aihao,
      name: "Project Experience",
      words: "项目经验",
      path: "/hobbies",
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
  <el-space direction="vertical" alignment="flex-start">
    <el-skeleton style="width: 240px" :loading="loading" animated :count="3">
      <template #template>
        <el-skeleton-item variant="image" style="width: 400px; height: 267px" />
        <div style="padding: 14px">
          <el-skeleton-item variant="h3" style="width: 50%" />
          <div
            style="
              display: flex;
              align-items: center;
              justify-items: space-between;
              margin-top: 16px;
              height: 16px;
            "
          >
            <el-skeleton-item variant="text" style="margin-right: 16px" />
            <el-skeleton-item variant="text" style="width: 30%" />
          </div>
        </div>
      </template>
      <template #default>
        <el-card
          v-for="item in lists"
          :key="item.name"
          :body-style="{ padding: '0px', marginBottom: '1px' }"
          class="cardClass"
        >
          <div class="fengmian">
            <img
              :src="item.imgUrl"
              class="image multi-content"
              @click="goToPage(item.path)"
            />
          </div>

          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <div class="bottom card-header">
              <el-button text class="button">{{ item.words }}</el-button>
            </div>
          </div>
        </el-card>
      </template>
    </el-skeleton>
  </el-space>
</template>

<style scoped>
.multi-content {
  width: 100%;
  height: 100%;
}

.cardClass {
  margin-right: 20px;
  cursor: pointer;
}

.cardClass:first-child {
  margin-left: 20px;
}

.flex-grow {
  flex-grow: 1;
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
</style>
