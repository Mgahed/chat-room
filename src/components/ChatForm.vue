<template>
  <form>
    <textarea
        placeholder="type message and hit enter to send"
        v-model="message"
        @keypress.enter.prevent="handle_submit"
    ></textarea>
    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import {ref} from "vue";
import getUser from "../composables/getUser";
import {timestamp} from "../firebase/config";
import useCollection from "../composables/useCollection";

export default {
  name: "ChatForm",
  setup() {
    const {user} = getUser
    const {add_doc, error} = useCollection('messages')

    const message = ref('')
    const handle_submit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp
      }

      await add_doc(chat)
      console.log(chat)
      if (!error.value) {
        message.value = ''
        console.log('done')
      } else {
        console.log(error.value)
      }
    }
    return {message, handle_submit, error}
  }
}
</script>

<style scoped>
form {
  margin: 10px;
}

textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}

.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>