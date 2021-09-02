<template>
  <form @submit.prevent="handle_submit">
    <input type="text" required placeholder="display name" v-model="display_name">
    <input type="email" required placeholder="email" v-model="email">
    <input type="password" required placeholder="password" v-model="password">
    <div class="error">{{ error }}</div>
    <button>Sign up</button>
  </form>
</template>

<script>
import {ref} from 'vue'
import useSignup from "../composables/useSignup";

export default {
  name: "SignupForm",
  setup(props, context) {
    const {error, signup} = useSignup
    //refs
    const display_name = ref('')
    const email = ref('')
    const password = ref('')

    const handle_submit = async () => {
      // console.log(display_name.value, email.value, password.value)
      await signup(email.value, password.value, display_name.value)
      if (!error.value) {
        // console.log("LogedInnn")
        context.emit('signup')
      }
    }

    return {display_name, email, password, handle_submit, error}
  }
}
</script>

<style scoped>

</style>