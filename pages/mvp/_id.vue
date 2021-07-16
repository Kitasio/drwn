<template>
  <div>
      <div class="text-white">{{ this.$route.params.id }}</div>
      <div class="text-white">{{ docs }}</div>

  </div>
</template>

<script>
import {db} from '../../plugins/fireConf'
export default {
    data() {
        return {
            docs: [],
        }
    },
    mounted() {
        const getStock = async () => {
            const stocks = await db.collection("stocks").doc(this.$route.params.id)
            stocks.get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    this.docs = doc.data()
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
        getStock()
    }
}
</script>

<style>

</style>