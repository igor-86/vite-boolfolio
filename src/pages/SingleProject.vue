<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "AppSingleProject",
    data() {
        return {
            store,
            project: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiUrlBase}/api/projects/${slug}`).then(resp => {

            if (resp.data.success) {
                this.project = resp.data.results;
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
        <div class="image-project">
            <img v-if="project.cover_image" :src="`${store.apiUrlBase}/storage/${project.cover_image}`" alt="">
            <div v-else class="text-center mt-4">Nessuna immagine</div>
        </div>
        <p>{{ project.article }}</p>
    </div>

</template>

<style lang="scss">
.image-project {
    width: 50%;
    height: 300px;
    margin-bottom: 1.5rem;

    img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>