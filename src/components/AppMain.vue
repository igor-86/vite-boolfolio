<script>
import axios from 'axios';
import AppCard from './AppCard.vue';
import { store } from '../store';
export default {
    name: 'AppMain',
    components: {
        AppCard
    },
    data() {
        return {
            store,
            projects: [],
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get(`${this.store.apiUrlBase}/api/projects`).then(resp => {
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
            <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">
                <AppCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>