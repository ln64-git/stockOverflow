<script setup>
import {useTokenStore} from "~/utils/local/token-store"
const router = useRouter()

const tokenStore = useTokenStore()
const handleSignOut = () => {
  tokenStore.reset()
  router.push("/signin")
}
const visible = useRoute().fullPath != '/signin'
</script>

<template>
  <div v-if="visible" class="navbar bg-base-200">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl ml-[20px]"
        >stockOverflow</a
      >
    </div>
    <div class="flex-none z-20">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary class="mr-[20px]">User</summary>
            <ul class="p-2 bg-base-100 w-[100px]">
              <li class="w-[90px]"><a @click="handleSignOut">Sign Out</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </div>
</template>
