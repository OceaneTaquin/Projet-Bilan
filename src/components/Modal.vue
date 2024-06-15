<template>
    <Transition name="modal-fade">
        <div v-if="isOpen" class="modal-overlay" @click="$emit('close')">
            <div class="modal" @click.stop>
                <span class="close" @click="$emit('close')">&times;</span>
                <slot></slot>
            </div>
        </div>
    </Transition>
</template>

<script setup>
defineProps(["isOpen"]);
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    }

.modal {
    position: relative;
    background-color: #fff;
    padding: 40px;
    border-radius: 0px;
    width: 80%;
    max-width: 50%;
    max-height: 80%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transition: opacity 0.5s ease;
    overflow-y: scroll;
    }

.close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    font-size: 24px;
    color: rgb(232, 80, 255);
    transition: color 0.5s ease;
    }

.close:hover {
    color: rgba(155, 0, 169, 0.923);
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
    opacity: 0;
}
</style>