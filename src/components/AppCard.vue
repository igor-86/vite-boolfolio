<script>
import { store } from '../store';
export default {
    name: 'PostCard',
    data() {
        return {
            store,
            contentMaxLength: 200,

        }
    },
    props: {
        project: Object,
    },
    computed: {
        articlePreview() {
            if (this.project.article && this.project.article.length > this.contentMaxLength) {
                return this.project.article.substr(0, this.contentMaxLength) + '...';
            }
            return this.project.article;
        }
    },
    methods: {
        // truncateText(text) {
        //     if (text && text.length > this.contentMaxLength) {
        //         return text.substr(0, this.contentMaxLength) + '...';
        //     }
        //     return text;
        // }
    }
}
</script>

<template>
    <div class="card mb-3  height">
        <div class="col-12">
            <img v-if="project.cover_image" class="w-100 h-image"
                :src="`${this.store.apiUrlBase}/storage/${project.cover_image}`" alt="">
            <div class="alternative-img" v-else>
                Nessuna immagine
            </div>
        </div>
        <div class="type bg-warning">
            {{ project.type ? project.type.name : 'Nessuna categoria' }}
        </div>
        <div class="col-12">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ articlePreview }}</p>
            <div class="tech">
                <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                    class="btn btn-primary me-4">View </router-link>
                <span class="me-3" v-for="tech in project.technologies" :key="tech.id">#{{ tech.name }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.height {

    padding: 1rem;

    .h-image {
        height: 280px;
        object-fit: cover;
    }

    .alternative-img {
        width: 100%;
        height: 280px;
        background-color: #111111;
        color: white;
    }

    .type {
        position: absolute;
        padding: .2rem .6rem;

        color: black;
        text-transform: uppercase;
        border-radius: 0.3rem;
        right: 2px;
        top: 2px;
    }
}
</style>