<template>
  <div class="flex">
    <SideBarVue />
    <router-view></router-view>
  </div>
</template>

<script setup>
import SideBarVue from "../layout/SideBar.vue";
</script>
