<template>
    <DocSectionText v-bind="$attrs">
        <p>Configure the <i>variant</i> value as <i>outlined</i> for messages with borders and no background.</p>
    </DocSectionText>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success" variant="outlined">Success Message</Message>
        <Message severity="info" variant="outlined">Info Message</Message>
        <Message severity="warn" variant="outlined">Warn Message</Message>
        <Message severity="error" variant="outlined">Error Message</Message>
        <Message severity="secondary" variant="outlined">Secondary Message</Message>
        <Message severity="contrast" variant="outlined">Contrast Message</Message>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const code = ref(`
<template>
    <div class="card flex flex-wrap gap-4 justify-center">
        <Message severity="success" variant="outlined">Success Message</Message>
        <Message severity="info" variant="outlined">Info Message</Message>
        <Message severity="warn" variant="outlined">Warn Message</Message>
        <Message severity="error" variant="outlined">Error Message</Message>
        <Message severity="secondary" variant="outlined">Secondary Message</Message>
        <Message severity="contrast" variant="outlined">Contrast Message</Message>
    </div>
</template>

<script setup lang="ts">
import Message from '@/volt/Message.vue';
<\/script>
`);
</script>
