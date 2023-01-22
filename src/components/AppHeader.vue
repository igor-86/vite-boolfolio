<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navigation: [
                {
                    title: 'Home',
                    route: 'home'
                },
                {
                    title: 'About us',
                    route: 'about'
                },
                {
                    title: 'Projects',
                    route: 'projects'
                }

            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container-fluid">
                <a class="navbar-brand text-primary" href="#">BoolFolio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul class="navbar-nav">
                        <li class="nav-item" v-for="(item, index) in navigation" :key="index">
                            <router-link :to="{ name: item.route }" class="nav-link" aria-current="page">{{
                                item.title
                            }}</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000">Login</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    </header>
</template>

<style lang="scss" scoped>

</style>