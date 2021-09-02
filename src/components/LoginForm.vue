<template>
  <form @submit.prevent="handle_submit">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Log in</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useLogin from "../composables/useLogin";

export default {
  name: "LoginForm",
  setup(props, context) {
    const {error, login} = useLogin
    //refs
    const email = ref('')
    const password = ref('')

    const handle_submit = async () => {
      // console.log(email.value, password.value)
      await login(email.value, password.value)
      if (!error.value) {
        // console.log("LogedInnn")
        context.emit('login')
      }
    }

    return {email, password, handle_submit, error}
  }
}
</script>

<style scoped>

</style>