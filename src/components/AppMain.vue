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
        <h3 class="text-center">Tutti i miei progetti</h3>
        <div class="row justify-content-center">
            <div class="col-11 col-md-10 col-lg-8">
                <AppCard v-for="project in projects" :key="project.id" :project="project" />
            </div>
        </div>
    </div>



</template>

<style lang="scss">

</style>