<script setup>
</script>

<template>
    <div id="confirm-container">
        <div class="confirm-dialog">
            <div class="dialog_header">
                <slot name="header"></slot>
            </div>
            <div class="dialog-body">
                <slot name="body"></slot>
            </div>
            <div class="dialog_footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
#confirm-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}

.confirm-dialog {
    width: calc(50%);
    max-width: 500px;
    top: 50%;
    left: 50%;
    margin-top: 0;
    position: absolute;
    background-color: #fff;
    transform: translate(-50%, -50%);
}

.dialog_header {
    padding-bottom: 20px;
    padding-top: 20px;
    border-bottom: 1px solid #E9E9E9;
    margin-left: 20px;
    padding-left: 0;
    margin-right: 20px;
}

.dialog-body {
    font-size: 14px;
    color: #666;
    line-height: 13px;
    font-weight: 400;
    padding-top: 20px;
    padding-bottom: 20px;
    word-break: normal;
    text-shadow: none;
    margin-left: 20px;
}

.dialog_footer {
    padding: 20px;
    text-align: right;
    box-sizing: border-box;

}
</style>