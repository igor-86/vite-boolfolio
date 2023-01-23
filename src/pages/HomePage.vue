<script>
export default {
    name: 'HomePage',
}
</script>

<template>
    <main>
        <div class="jumbotron">
            <div class="container py-3 d-flex justify-content-center">
                <div class="title">
                    <h1 class="t-1 mb-4">My Projects,</h1>
                    <p class="t-2 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Explicabo necessitatibus ut quae cumque sed reprehenderit labore officia,
                        mollitia.
                    </p>
                    <a href="" class="btn btn-warning rounded-0 text-uppercase t-b px-4 py-2">Projects</a>
                </div>

            </div>
        </div>
    </main>

</template>

<style lang="scss">
@use "../styles/general.scss" as *;

.jumbotron {
    width: 100%;
    padding: 6rem 0;
    background-color: #eeeeee;

    .title {



        .t-1 {
            font-size: 4.5rem;
            text-transform: uppercase;
            font-weight: bolder;
        }

        .t-2 {
            width: 750px;
            font-size: 1.6rem;
            color: #525252;
        }

        .t-b {
            font-weight: bolder;

        }
    }
}
</style>