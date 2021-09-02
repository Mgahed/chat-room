<template>
  <div class="container">
    <Navbar/>
    <ChatWindow/>
    <ChatForm/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import {useRouter} from "vue-router";
import {watch} from "vue";
import ChatForm from "../components/ChatForm";
import ChatWindow from "../components/ChatWindow";

export default {
  name: "Chatroom",
  components: {ChatWindow, ChatForm, Navbar},
  setup() {
    const router = useRouter()
    // const {logout, error} = useLogout

    const {user} = getUser
    watch(user, () => {
      if (!user.value) {
        router.push({name: 'Welcome'})
      }
    })

    return {user}
  }
}
</script>

<style>

</style>