import {ref} from 'vue';
import {projectFirestore} from "../firebase/config";

const useCollection = (collection) => {
    const error = ref(null)

    const add_doc = async (doc) => {
        error.value = null
        try {
            await projectFirestore.collection(collection).add(doc)
            console.log("test try")
        } catch (err) {
            console.log(err.message)
            error.value = 'could not send message'
        }
    }
    return {error, add_doc}
}

export default useCollection