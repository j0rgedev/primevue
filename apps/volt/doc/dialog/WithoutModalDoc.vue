<template>
    <DocSectionText v-bind="$attrs">
        <p>Mask layer behind the Dialog is configured with the <i>modal</i> property. By default, no modal layer is added.</p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" header="Edit Profile" class="sm:w-100 w-9/10">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <SecondaryButton type="button" label="Cancel" @click="visible = false" />
                <Button type="button" label="Save" @click="visible = false" />
            </div>
        </Dialog>
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import Dialog from '@/volt/Dialog.vue';
import InputText from '@/volt/InputText.vue';
import SecondaryButton from '@/volt/SecondaryButton.vue';
import { ref } from 'vue';

const visible = ref(false);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible" header="Edit Profile" class="sm:w-100 w-9/10">
            <span class="text-surface-500 dark:text-surface-400 block mb-8">Update your information.</span>
            <div class="flex items-center gap-4 mb-4">
                <label for="username" class="font-semibold w-24">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex items-center gap-4 mb-8">
                <label for="email" class="font-semibold w-24">Email</label>
                <InputText id="email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-end gap-2">
                <SecondaryButton type="button" label="Cancel" @click="visible = false" />
                <Button type="button" label="Save" @click="visible = false" />
            </div>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import Button from '@/volt/Button.vue';
import SecondaryButton from '@/volt/SecondaryButton.vue';
import Dialog from '@/volt/Dialog.vue';
import InputText from '@/volt/InputText.vue';
import { ref } from 'vue';

const visible = ref(false);
<\/script>
`);
</script>
