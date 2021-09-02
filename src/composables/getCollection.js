import {ref, watchEffect} from 'vue';
import {projectFirestore} from "../firebase/config";

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collection_ref = projectFirestore.collection(collection).orderBy('createdAt')

    const un_subscribe = collection_ref.onSnapshot((snap) => {
        let result = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && result.push({...doc.data(), id: doc.id})
        })
        documents.value = result
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = nullerror.value
    })

    watchEffect((onInvalidate) => {
        //unsubscribe from the snap
        onInvalidate(() => un_subscribe())
    })

    return {documents, error}
}

export default getCollection