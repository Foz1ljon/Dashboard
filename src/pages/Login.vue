<script setup>
import "vue-toast-notification/dist/theme-bootstrap.css";
import { useToast } from "vue-toast-notification";
import { useAuth } from "../composables/useLogin";
const { userData, login, isLogin, error } = useAuth();
const toast = useToast();
import { router } from "../router";

const handleSubmit = async () => {
  await login(userData);
  isLogin ? router.push("/") : alert("Invalid username or password!!!");
  error.value ? toast.error("invalid") : toast.success("Ok!");
};
</script>

<template>
  <div class="bg-bgyell w-full h-screen flex justify-center items-center">
    <div
      class="flex flex-col text-center gap-10 rounded-xl p-6 w-[475px] h-[550px] bg-white"
    >
      <h1 class="font-bold text-3xl text-black">
        <b class="border-l-[6px] mr-1 border-[#F8D442]"></b>CRUD OPERATIONS
      </h1>
      <div class="flex flex-col gap-2">
        <h2 class="font-semibold text-[22px] uppercase text-black">Sign In</h2>
        <p class="text-sm font-normal text-[#6C6C6C] text-center">
          Enter your credentials to access your account
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
        <div class="flex flex-col items-start gap-2 w-[415px]">
          <label class="text-sm font-normal text-[#6C6C6C]" for="username"
            >Username</label
          >
          <input
            class="py-2.5 px-6 border rounded-md w-full placeholder:text-text-xs font-normal text-[#CDCDCD]"
            type="text"
            id="username"
            v-model="userData.username"
            placeholder="Enter your username"
          />
        </div>
        <div class="flex flex-col items-start gap-2 w-[415px]">
          <label class="text-sm font-normal text-[#6C6C6C]" for="password"
            >Password</label
          >
          <input
            class="py-2.5 px-6 border rounded-md w-full placeholder:text-text-xs font-normal text-[#CDCDCD]"
            type="password"
            id="password"
            v-model="userData.password"
            placeholder="Enter your password"
          />
        </div>

        <button
          class="uppercase w-[415px] bg-[#FEAF00] rounded-md text-white py-2.5 px-4"
          type="submit"
        >
          Sign in
        </button>
      </form>

      <div class="text-sm">
        <p class="text-[#6C6C6C]">
          Forgot your password?
          <a class="text-[#F8D442] font-semibold" href="#">Reset Password</a>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
