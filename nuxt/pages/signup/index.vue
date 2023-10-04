<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col">
      <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold mb-4">stockOverflow</h1>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="m-8 mt-4 mb-2">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              v-model="usernameRef"
              placeholder="username"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              v-model="passwordRef"
              type="password"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Confirm Password</span>
            </label>
            <input
              v-model="passwordConfirmationRef"
              type="password"
              placeholder="confirm password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-2">
            <button @click="onSubmit" class="btn btn-primary m-6">Login</button>
          </div>
        </div>
      </div>
      <div class="flex gap-10">
        <label class="">
          <a href="/signin" class="label-text-alt link link-hover">Login</a>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import axios, {AxiosResponse, AxiosError} from "axios"
import {useTokenStore} from "../../utils/local/token-store"

interface ApiResponse {
  token: string
}

const usernameRef = ref("")
const passwordRef = ref("")
const passwordConfirmationRef = ref("")
const tokenStore = useTokenStore()

const onSubmit = (e: Event) => {
  e.preventDefault()

  const username = usernameRef.value
  const password = passwordRef.value
  const passwordConfirm = passwordConfirmationRef.value
  const apiUrl = "http://localhost:9000/register"

  axios
    .post(apiUrl, {
      username,
      password,
      confirmPassword: passwordConfirm,
      role: "user",
    })
    .then((response: AxiosResponse<ApiResponse>) => {
      const token = response.data.token
      tokenStore.setToken(token)
      tokenStore.setUsername(username)
      console.log("Registration Successfull")
      // console.log("Signed in as ", tokenStore.username)
      // console.log("token: ", tokenStore.token)
    })
    .catch((error: AxiosError) => {
      if (error.response) {
        console.error("Server error:", error.response.data)
      } else {
        console.error("Network error:", error.message)
      }
    })
}
</script>
../../utils/store/token-store
