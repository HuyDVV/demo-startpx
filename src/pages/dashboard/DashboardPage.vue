<script setup lang="ts">
import { getCurrentUser } from 'aws-amplify/auth'
import { onMounted, ref } from 'vue'
const username = ref()

onMounted(async () => {
  const user = await getCurrentUser()
  username.value = user.signInDetails?.loginId
})
</script>

<template>
  <div class="bg-primary min-h-[100vh] min-w-[100vw] px-10 py-5">
    <span class="text-lg font-bold text-zinc-100">Welcome back StarPX, {{ username }}</span>
  </div>
</template>
