<script>
import axios from 'axios';
import AppCard from '../components/AppCard.vue';
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
            currentPage: 1,
            lastPage: null,
            totalPage: null
        };
    },
    created() {
        this.getProjects(1);
    },
    methods: {
        getProjects(page) {
            axios.get(`${this.store.apiUrlBase}/api/projects`, {
                params: {
                    page: page
                }
            }).then(resp => {

                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalPage = resp.data.results.total;

            });
        }
    },
}
</script>

<template>
    <div class="container">
        <h3 class="text-center my-4">Tutti i miei progetti</h3>
        <div class="row">
            <p class="text-end">Totale {{ totalPage }} post trovati</p>
            <div class="col-12 col-md-6 col-lg-4" v-for="project in projects" :key="project.id">

                <AppCard :project="project" />
            </div>
            <!-- Navigazione pagine -->
            <nav class="navigation d-flex justify-content-between">
                <div>
                    page {{ currentPage }} in {{ lastPage }}
                </div>
                <div>
                    <a class="btn btn-success me-2" :class="currentPage === 1 ? 'disabled' : ''" href=""
                        @click.prevent="getProjects(currentPage - 1)">Back</a>
                    <a class="btn btn-success" :class="{ 'disabled': currentPage === lastPage }" href=""
                        @click.prevent="getProjects(currentPage + 1)">Next</a>
                </div>

            </nav>
        </div>
    </div>
</template>

<style lang="scss">

</style>