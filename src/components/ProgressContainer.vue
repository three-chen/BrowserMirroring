<script setup>
</script>

<template>
    <div class="progress">
        <div class="progress_area">
            <div class="progress_innerbox">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
.progress {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: block;
}

.progress_area {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.progress_area .progress_innerbox {
    width: 700px;
    border-radius: 20px;
    padding: 50px 50px 0 50px;
    border: 1px solid #FFF;
    background: #FFFFFF33;
}
</style>