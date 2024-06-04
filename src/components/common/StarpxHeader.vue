<script setup lang="ts">
import { getCurrentUser } from 'aws-amplify/auth'
import { onMounted, ref } from 'vue'
import StarpxButton from './StarpxButton.vue'
import { useAccountStore } from '@/store/accounts/account'
import { GALLERY_PAGE_ROUTE, HOME_PAGE_ROUTE } from '@/common/router'

enum ActionStateEnum {
  GALLERY,
  HOME
}

const username = ref()

const { handleSignOut } = useAccountStore()
onMounted(async () => {
  const user = await getCurrentUser()
  username.value = user.signInDetails?.loginId
})

const actionState = ref(ActionStateEnum.GALLERY)
</script>

<template>
  <div class="flex flex-row gap-10 justify-end items-center py-4 bg-second sticky top-0 z-10 px-10 bg-opacity-30">
    <Transition name="slide-up">
      <StarpxButton
        v-if="actionState === ActionStateEnum.GALLERY"
        @click="
          () => {
            $router.push(GALLERY_PAGE_ROUTE)
            actionState = ActionStateEnum.HOME
          }
        "
        class="!w-28 font-bold absolute left-10"
        label="Gallery"
      />
      <StarpxButton
        v-else
        @click="
          () => {
            $router.push(HOME_PAGE_ROUTE)
            actionState = ActionStateEnum.GALLERY
          }
        "
        class="!w-28 font-bold absolute left-10"
        label="Home"
      />
    </Transition>
    <StarpxButton @click="handleSignOut" class="!w-28 font-bold" label="Sign out" />
  </div>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
