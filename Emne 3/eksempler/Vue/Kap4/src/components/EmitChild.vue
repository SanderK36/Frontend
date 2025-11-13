<script setup lang="ts">
type EmitEvents = {
    (e: 'userClicked', payload: { id: number; name: string }): void
    (e: 'cancelled'): void
}

const emit = defineEmits<EmitEvents>()

function handleClick() {
    emit('userClicked', { id: 1, name: 'Terje' })
}

function handleCancel() {
    emit('cancelled')
}
</script>

<template>
    <div>
        <button @click="handleClick">Velg bruker</button>
        <button @click="handleCancel">Avbryt</button>
    </div>
</template>
