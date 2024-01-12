<script setup lang="ts">
import { ref } from "vue";
import {
  Iphone,
  Location,
  KnifeFork,
  Tickets,
  User,
  ChatDotRound,
  Scissor,
  Reading,  
  Collection,
} from "@element-plus/icons-vue";

const size = ref("");

const activeIndex = ref("1");
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

  <div class="selfMain">
    <div class="bgImg">
      <img src="../assets/fengmiantu/wo1.png" alt="" />
    </div>

    <div class="intro">
      <h1>个人介绍</h1>
      <el-card class="box-card">
        <template #header>
          <div class="card-header cardHead">
            <span>唐瑶</span>
            <el-button class="button" text>前端工程师</el-button>
          </div>
        </template>
        <div>
          <el-descriptions class="margin-top" :column="3" :size="size" border>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <user />
                  </el-icon>
                  性别
                </div>
              </template>
              女
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <ChatDotRound />
                  </el-icon>
                  微信号
                </div>
              </template>
              _forever_824
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <iphone />
                  </el-icon>
                  Tel
                </div>
              </template>
              13640510758
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <Reading />
                  </el-icon>
                  学历
                </div>
              </template>
              大专
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <Collection />
                  </el-icon>
                  学校
                </div>
              </template>
              重庆工商职业学院
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <Collection />
                  </el-icon>
                  专业
                </div>
              </template>
              商务英语
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <tickets />
                  </el-icon>
                  籍贯
                </div>
              </template>
              重庆
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <location />
                  </el-icon>
                  期望城市
                </div>
              </template>
              成都
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <KnifeFork />
                  </el-icon>
                  薪资要求
                </div>
              </template>
              17k-19k
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <Scissor />
                  </el-icon>
                  专业技能
                </div>
              </template>
              1.掌握HTML+CSS。熟练掌握弹性布局、网格布局以及响应式布局，能够快速实现Web端和移动端页面搭建<br />
              2.掌握 JavaScript，能脱离框架进行原生开发，熟悉 TypeScript<br />
              3.掌握 vue 框架以及相关生态技术，能够独立完成项目搭建和项目部署<br />
              4.掌握浏览器原理以及计算机网络相关技术，在性能优化方面有实践经验<br />
              5.了解 Node.js 和常用模块，在此基础上能够使用 Express 等 Web
              框架进行简单的服务器应用程序开发<br />
              6.了解微信小程序原生开发，能够使用小程序原生开发进行开发<br />
              7.对前端工程模块化有一定理解，熟悉 webpack、vite
              等打包工具及其日常开发配置，可以从 0 到 1
              独立搭建项目，并优化构建流程<br />
              8.版本管理：Git；
            </el-descriptions-item>
            <el-descriptions-item
              class-name="my-class"
              label-class-name="my-label"
            >
              <template #label>
                <div class="cell-item">
                  <el-icon>
                    <Scissor />
                  </el-icon>
                  个人评价
                </div>
              </template>
              <div>
                本人的理念是:在年轻的季节，本人甘愿吃苦受累，只愿通过自己富有激-情、积极主动的努力实现自身价值并在工作中做出最大的贡献；<br />
                作为初学者，本人具备出色的学习能力并且乐于学习、敢于创新，不断追求卓越;<br />
                作为参与者，本人具备诚实可信的品格、富有团队合作精神;<br />
                本人具备做事干练、果断的风格，良好的沟通和人际协调能力，有很强的忍耐力、意志力和吃苦耐劳的品质，对工作认真负责，积极进取，个性乐观执着，敢于面对困难与挑战。
              </div>
            </el-descriptions-item>
          </el-descriptions>
        </div>
        <template #footer> </template>
      </el-card>
    </div>
  </div>
</template>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin: 0 auto;
  width: 90%;
}

.cardHead {
  text-align: left;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.work {
  cursor: pointer;
  display: flex;
  align-items: center;
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

.bgImg {
  width: 100%;
  height: 700px;
  margin: 0 20px;
}

.bgImg img {
  width: 100%;
  height: 100%;
}

.intro {
  position: relative;
  margin-top: -650px;
  margin-bottom: 30px;
}

.intro h1 {
  color: #fff;
}

.my-label {
  width: 100px;
  color: #999;
  font-weight: normal;
  background: #fff;
}

@media screen and (max-width: 1920px) {
  .intro {
    margin-top: -600px;
  }
}

@media screen and (max-width: 1512px) {
  .intro {
    margin-top: -650px;
  }
}
</style>
