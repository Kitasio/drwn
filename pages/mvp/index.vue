<template>
  <div>
    <h1 class="text-3xl text-center text-white">this is mvp</h1>

    <NuxtLink :to="`/mvp/${doc.id}`" class="text-white" v-for="(doc, index) in docs" :key="index">
        <div :style="`color: ${doc.color}`">{{doc.ticker}}</div>
    </NuxtLink>
  </div>
</template>

<script>
import { db } from '../../plugins/fireConf'
export default {
    data() {
        return {
            docs: [],
        }
    },
    mounted() {
        const getStocks = async () => {
            db.collection("stocks").onSnapshot(item => {
                this.docs = item.docs.map(doc => {
                    return { ...doc.data(), id: doc.id }
                })
            })
        }
        getStocks()
    }
}
</script>

<style>

</style>