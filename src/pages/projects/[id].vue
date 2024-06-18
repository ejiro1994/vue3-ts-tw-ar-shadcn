<script lang="ts" setup>
import {useRoute} from 'vue-router/auto'
const route = useRoute()
</script>

<template>
{{  route.params?.id }}:id Page
</template>
