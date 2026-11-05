<script setup lang="ts">
import { computed, ref } from 'vue'
import { withBase } from 'vitepress'
import { roles } from '../../data/roles'
const selected = ref('')
const choices = [
 {field:'Software & applications',title:'Build useful applications',hint:'Turn an idea into something people can use.'},
 {field:'Security & governance',title:'Protect people and systems',hint:'Investigate risks, permissions, and safeguards.'},
 {field:'Networking & telecom',title:'Connect things reliably',hint:'Understand the networks behind AI workloads.'},
 {field:'Data & models',title:'Find meaning in data',hint:'Prepare data, test ideas, and explain results.'},
 {field:'Cloud & platform',title:'Make systems run well',hint:'Explore infrastructure, performance, and reliability.'},
 {field:'Quality & reliability',title:'Find out why things fail',hint:'Design tests and make quality measurable.'},
 {field:'Customer & product',title:'Solve problems with people',hint:'Connect user needs to technical decisions.'},
 {field:'Embedded & robotics',title:'Work with physical systems',hint:'Connect software, autonomy, and the real world.'}
]
const matches = computed(()=>roles.filter(role=>role.field===selected.value))
</script>
<template>
<section id="first-step" class="student-start" aria-labelledby="student-start-heading">
 <div class="student-start-intro"><div><p class="eyebrow">A SMALL FIRST STEP</p><h2 id="student-start-heading">Start with what <em>interests you.</em></h2></div><p>You can explore before you decide. Choose a kind of problem to see related roles, or browse the full atlas below.</p></div>
 <fieldset class="interest-picker"><legend>What kind of problem catches your attention?</legend><div class="interest-options"><button v-for="choice in choices" :key="choice.field" type="button" :aria-pressed="selected===choice.field" @click="selected=selected===choice.field?'':choice.field"><strong>{{choice.title}}</strong><span>{{choice.hint}}</span><span aria-hidden="true" class="choice-arrow">{{selected===choice.field?'✓':'↗'}}</span></button></div></fieldset>
 <p class="interest-status" aria-live="polite">{{selected?`${matches.length} related ${matches.length===1?'profile':'profiles'} in ${selected}. A starting point to investigate, not a fit assessment.`:'Your choice stays on this page for this visit. You can change it at any time.'}}</p>
 <div v-if="selected" class="interest-results"><div class="interest-results-heading"><h3>Read one profile. Write down one question.</h3><button type="button" @click="selected=''">Reset my choice</button></div><p>Notice what the work involves and which foundations you already recognize. Check job eligibility separately.</p><div class="interest-role-grid"><a v-for="role in matches" :key="role.id" :href="withBase(role.link)"><span>{{role.field}}</span><h4>{{role.title}} <span aria-hidden="true">↗</span></h4><p>{{role.description}}</p><small>Foundations: {{role.foundations.join(' · ')}}</small></a></div></div>
 <div class="worksheet-offer"><div><h3>Take your thinking with you.</h3><p>A simple worksheet to compare a role, check the evidence, and choose one project. Download it directly; no account or email needed.</p></div><a :href="withBase('/first-role-worksheet.md')" download="ai-career-first-role-worksheet.md">Get the first-role worksheet <span aria-hidden="true">↓</span><small>Markdown file · editable text</small></a></div>
</section>
</template>
