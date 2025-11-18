<template>
    <div class="fancy">
        <div class="title">
            <slot name="title"></slot>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<style scoped>
.fancy {
    border: 6px solid #6366f1;
    border-radius: 20px;
    padding: 2rem;
    margin: 2rem auto;
    max-width: 600px;
    background: #eef2ff;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0);
}

.title {
    font-size: 2rem;
    font-weight: bold;
    color: #4f46e5;
}

.content { margin: 1.5rem 0; }
footer {
    text-align: right;
    font-style: italic;
    color: #666;
}
</style>