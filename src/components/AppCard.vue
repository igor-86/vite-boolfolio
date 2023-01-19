<script>
export default {
    name: 'PostCard',
    data() {
        return {
            contentMaxLength: 200,
            baseUrl: "http://127.0.0.1:8000",
        }
    },
    props: {
        project: Object,
    },
    computed: {
        contentPreview() {
            if (this.project.article && this.project.article.length > this.contentMaxLength) {
                return this.project.content.substr(0, this.contentMaxLength) + '...';
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
    <div class="card">
        <div class="col-4">
            <img v-if="project.cover_image" class="w-100" :src="`${baseUrl}/storage/${project.cover_image}`" alt="">
            <div v-else>
                Nessuna immagine
            </div>
        </div>
        <div class="type">
            {{ project.type ? project.type.name : 'Nessuna categoria' }}
        </div>
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.article }}</p>
            <div class="tech">
                <a href="#" class="btn btn-primary me-4">View</a>
                <span v-for="tech in project.technologies" :key="tech.id">#{{ tech.name }}</span>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.type {
    position: absolute;
    padding: .2rem .6rem;
    background-color: #e2c000;
    color: black;
    text-transform: uppercase;
    border-radius: 0.3rem;
    right: 2px;
    top: 2px;
}
</style>