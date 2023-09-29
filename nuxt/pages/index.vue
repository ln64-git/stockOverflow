<script setup lang="ts">
import {useTokenStore} from "../store/token-store"
const tokenStore = useTokenStore()
const router = useRouter()

if (!tokenStore.token) {
  router.push({path: "/signin"})
}
</script>
