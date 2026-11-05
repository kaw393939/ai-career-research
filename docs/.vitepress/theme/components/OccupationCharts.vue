<script setup lang="ts">
import { computed, ref } from 'vue'
import context from '../../../research/occupational-context.json'
const metric=ref('wage')
const rows=computed(()=>context.occupations.filter(row=>metric.value==='wage'||row.growth!==null))
const max=computed(()=>metric.value==='wage'?150000:40)
const value=(row:typeof context.occupations[number])=>metric.value==='wage'?row.wage:(row.growth??0)
const label=(row:typeof context.occupations[number])=>metric.value==='wage'?new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(row.wage):row.growth+'%'
</script>
<template><section class="occupation-charts" aria-labelledby="occupation-chart-title"><h2 id="occupation-chart-title">Occupation context, with boundaries</h2><p>These are broad US occupations. They are not salaries or demand forecasts for AI job titles, and median wages are not starting salaries.</p><label class="context-metric">Measure<select v-model="metric" aria-label="Occupational chart measure"><option value="wage">National median annual wages · May 2025</option><option value="growth">Projected employment growth · 2025–2035</option></select></label>
<p aria-live="polite">{{metric==='wage'?context.wageUnit:'Projected percentage employment change; national; 2025–2035. Three single-occupation series.'}}</p>
<div class="chart-axis" aria-hidden="true"><span>{{metric==='wage'?'$0':'0%'}}</span><span>{{metric==='wage'?'$150,000':'40%'}}</span></div>
<div v-for="row in rows" :key="row.code" class="context-bar-row"><div><a :href="row.url">{{row.name}}</a><strong>{{label(row)}}</strong></div><div class="context-bar-track" aria-hidden="true"><span :style="{width:(value(row)/max*100)+'%'}"></span></div></div>
<p class="chart-note">Growth for developers and testers is omitted here because the source summary groups occupations. All bars start at zero. Review date: {{context.reviewed}}.</p>
<div class="context-data-table" tabindex="0" aria-label="Scrollable source data"><table><caption>Underlying data, occupation codes and primary sources</caption><thead><tr><th scope="col">Occupation / SOC</th><th scope="col">May 2025 median annual wage</th><th scope="col">2025–2035 growth</th></tr></thead><tbody><tr v-for="row in context.occupations" :key="row.code"><th scope="row"><a :href="row.url">{{row.name}}</a><br><a :href="row.onet">{{row.code}} · O*NET</a></th><td>{{new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(row.wage)}}</td><td>{{row.growth===null?'Not shown: grouped source':row.growth+'%'}}</td></tr></tbody></table></div>
<h3>How these occupations relate to this atlas</h3><ul><li v-for="row in context.occupations" :key="row.code"><strong>{{row.name}}:</strong> {{row.mapping}}</li></ul><p>Publisher: {{context.publisher}}. {{context.release}}. {{context.transformation}}</p></section></template>
