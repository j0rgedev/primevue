<template>
    <DocSectionText v-bind="$attrs">
        <p>Multiple messages can be displayed using the standard v-for directive.</p>
    </DocSectionText>
    <div class="card flex flex-col items-center justify-center gap-4">
        <div class="flex gap-2">
            <Button label="Show" @click="addMessages()" />
            <SecondaryButton label="Clear" @click="clearMessages()" />
        </div>
        <div class="flex flex-col gap-4">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </div>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import Message from '@/volt/Message.vue';
import SecondaryButton from '@/volt/SecondaryButton.vue';
import { ref } from 'vue';

const messages = ref<Array<{ severity?: string; content?: string; id?: number }>>([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};

const code = ref(`
<template>
    <div class="card flex flex-col items-center justify-center gap-4">
        <div class="flex gap-2">
            <Button label="Show" @click="addMessages()" />
            <SecondaryButton label="Clear" @click="clearMessages()" />
        </div>
        <div class="flex flex-col gap-4">
            <Message v-for="msg of messages" :key="msg.id" :severity="msg.severity">{{ msg.content }}</Message>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton.vue';
import Message from '@/volt/Message.vue';
import { ref } from 'vue';

const messages = ref([]);
let count = ref(0);

const addMessages = () => {
    messages.value = [
        { severity: 'info', content: 'Dynamic Info Message', id: count.value++ },
        { severity: 'success', content: 'Dynamic Success Message', id: count.value++ },
        { severity: 'warn', content: 'Dynamic Warn Message', id: count.value++ }
    ];
};

const clearMessages = () => {
    messages.value = [];
};
<\/script>
`);
</script>
