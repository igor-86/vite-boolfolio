<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            baseUrl: "http://127.0.0.1:8000",
            projects: [],
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.baseUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
            });
        }
    },
}
</script>

<template>
    <div class="container">
        <h3 class="text-center my-4">Tutti i miei progetti</h3>
        <div class="row">
            <div class="col-10 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                <AppCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>