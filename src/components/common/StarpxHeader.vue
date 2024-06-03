<script setup lang="ts">
import { getCurrentUser } from 'aws-amplify/auth'
import { onMounted, ref } from 'vue'
import StarpxButton from './StarpxButton.vue'
import { useAccountStore } from '@/store/accounts/account'
import { GALLERY_PAGE_ROUTE } from '@/common/router';
const username = ref()

const { handleSignOut } = useAccountStore()
onMounted(async () => {
  const user = await getCurrentUser()
  username.value = user.signInDetails?.loginId
})
</script>

<template>
  <div class="flex flex-row gap-10 justify-between items-center py-4 bg-second sticky top-0 z-10 px-10">
    <StarpxButton @click="$router.push(GALLERY_PAGE_ROUTE)" class="!w-28 font-bold" label="Gallery" />
    <StarpxButton @click="handleSignOut" class="!w-28 font-bold" label="Sign out" />
  </div>
</template>
