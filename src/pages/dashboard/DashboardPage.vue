<script setup lang="ts">
import { getCurrentUser } from 'aws-amplify/auth'
import { onMounted, ref } from 'vue'
import StarpxTypingAnimation from '@/components/common/StarpxTypingAnimation.vue'
import AuthBackground from '../authentication/AuthBackground.vue'
const username = ref()

onMounted(async () => {
  const user = await getCurrentUser()
  username.value = user.signInDetails?.loginId
})
</script>

<template>
  <div class="px-10 py-5 overflow-x-hidden">
    <AuthBackground />
    <StarpxTypingAnimation :text="`Welcome back StarPX, ${username}. Have a good day.`" />
  </div>
</template>
