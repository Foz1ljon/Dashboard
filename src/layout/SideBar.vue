<template>
  <aside class="w-1/5 h-screen bg-[#F2EAE1] flex flex-col p-3 text-center">
    <h1 class="font-bold text-xl text-black">
      <b class="border-l-4 mr-1 border-[#F8D442]"></b>CRUD OPERATIONS
    </h1>

    <div class="flex flex-col gap-4 items-start mx-auto pt-[54%]">
      <div class="flex gap-2 relative" v-for="(item, i) in menu" :key="i">
        <img
          class="absolute top-3.5 left-5"
          :src="item.icon"
          :alt="item.name"
        />
        <router-link
          class="py-2 px-12 rounded-md [&.router-link-active]:bg-[#FEAF00]"
          :to="item.url"
        >
          {{ item.name }}
        </router-link>
      </div>
      <button @click="logout" class="flex items-center gap-2 pt-[26%]">
        <p>Logout</p>
        <img src="/icons/logout.svg" alt="" />
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useSide } from "../composables/UseSidebar";
import { useAuth } from "../composables/useLogin";

const { logout } = useAuth();

const { menu } = useSide();
</script>
