<template>
    <DocSectionText v-bind="$attrs">
        <p>Invalid state is displayed using the <i>invalid</i> prop to indicate a failed validation. You can use this style when integrating with form validation libraries.</p>
    </DocSectionText>
    <div class="card flex flex-wrap justify-center gap-4">
        <Password v-model="value1" :invalid="!value1" placeholder="Password" />
        <Password v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
    </div>
    <DocSectionCode :code="code" />
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null,
            code: {
                basic: `
<Password v-model="value1" :invalid="!value1" placeholder="Password" />
<Password v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
`,
                options: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <Password v-model="value1" :invalid="!value1" placeholder="Password" />
        <Password v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            value1: null,
            value2: null
        }
    }
};
<\/script>
`,
                composition: `
<template>
    <div class="card flex flex-wrap justify-center gap-4">
        <Password v-model="value1" :invalid="!value1" placeholder="Password" />
        <Password v-model="value2" :invalid="!value2" variant="filled" placeholder="Password" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref(null);
const value2 = ref(null);
<\/script>
`
            }
        };
    }
};
</script>
