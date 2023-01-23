<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppSingleProject",
    data() {
        return {
            store,
            project: {},
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiUrlBase}/api/projects/${slug}`).then(resp => {

            if (resp.data.success) {
                this.project = resp.data.project
            } else {
                this.$router.push({ name: "not-found" });
            }
        });
    },
    computed: {
        category() {
            return this.project.type ? this.project.type.name : 'Nessuna categoria';
        }
    }
}
</script>

<template>
    <div class="container">
        <h1 class="mt-3 text-center">{{ project.title }}</h1>
        <h5 class="text-center mt-2 text-uppercase text-primary">{{ category }}</h5>
        <img v-if="project.cover_image" :src="`${store.apiUrlBase}/storage/${project.cover_image}`" alt="">
        <div v-else class="text-center mt-4">Nessuna immagine</div>

        <p>{{ project.article }}</p>
    </div>

</template>

<style lang="scss">

</style>