<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="show_login">
      <h2>Login</h2>
      <LoginForm @login="enter_chat"/>
      <p>No account yet? <span @click="show_login=false">Sign up</span></p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignupForm @signup="enter_chat"/>
      <p>already registered? <span @click="show_login=true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import {ref} from "vue";
import {useRouter} from "vue-router";

export default {
  name: "Welcome",
  components: {LoginForm, SignupForm},
  setup() {
    const router = useRouter()

    const show_login = ref(true)

    const enter_chat = () => {
      router.push({name: 'Chatroom'})
    }

    return {show_login, enter_chat}
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

/* form styles */
.welcome form {
  width: 300px;
  margin: 20px auto;
}

.welcome label {
  display: block;
  margin: 20px 0 10px;
}

.welcome input {
  width: 100%;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #eee;
  outline: none;
  color: #999;
  margin: 10px auto;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}

.welcome button {
  margin: 20px auto;
}
</style>