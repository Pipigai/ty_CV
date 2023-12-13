<script setup lang="ts">
import { ref } from "vue";
import {
  Iphone,
  Location,
  KnifeFork,
  Tickets,
  User,
  ChatDotRound,
} from "@element-plus/icons-vue";

const size = ref("");
</script>

<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>唐瑶</span>
          <el-button class="button" text>前端工程师</el-button>
        </div>
      </template>
      <div>
        <el-descriptions class="margin-top" :column="3" :size="size" border>
          <el-descriptions-item>
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
          <el-descriptions-item>
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
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <iphone />
                </el-icon>
                Telephone
              </div>
            </template>
            13640510758
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <location />
                </el-icon>
                期望城市
              </div>
            </template>
            广州
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <tickets />
                </el-icon>
                籍贯
              </div>
            </template>
            <el-tag size="small">重庆</el-tag>
          </el-descriptions-item>
          <el-descriptions-item>
            <template #label>
              <div class="cell-item">
                <el-icon>
                  <KnifeFork />
                </el-icon>
                薪资要求
              </div>
            </template>
            16-18k
          </el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>Footer content</template>
    </el-card>
  </div>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 1280px;
  text-align: left;
}
</style>
