<template>
    <main class="main">
        <div class="container">
            <div class="row">
                <p class="error-txt">Error</p>
            </div>
        </div>
    </main>
</template>

<script>

export default {
    name: '404'
}

</script>

<style lang="scss" scoped>

.main {
    width: 100%;
    height: 100%;
    padding: 50px 0;

    .row {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .error-txt {
        font-size: 100px;
    }
}

</style>