<script setup>
import ProgramLayout from '../components/ProgramLayout.vue'
import { getProgram } from '../data/programs'

const program = getProgram('blis')
</script>
<template><ProgramLayout :program="program" /></template>
