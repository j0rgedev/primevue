<template>
    <DocSectionText v-bind="$attrs">
        <p>
            Listbox is used with the <i>v-model</i> property for two-way value binding along with the <i>options</i> collection. Label and value of an option are defined with the <i>optionLabel</i> and <i>optionValue</i> properties respectively. Note
            that, when options are simple primitive values such as a string array, no <i>optionLabel</i> and <i>optionValue</i> would be necessary.
        </p>
    </DocSectionText>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script setup lang="ts">
import Listbox from '@/volt/Listbox.vue';
import { ref } from 'vue';

const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const code = ref(`
<template>
    <div class="card flex justify-center">
        <Listbox v-model="selectedCity" :options="cities" optionLabel="name" class="w-full md:w-56" />
    </div>
</template>

<script setup lang="ts">
import Listbox from '@/volt/Listbox.vue';
import { ref } from 'vue';

const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
<\/script>
`);
</script>
