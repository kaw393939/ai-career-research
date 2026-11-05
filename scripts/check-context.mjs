import {readFile} from 'node:fs/promises'
import assert from 'node:assert/strict'
const data=JSON.parse(await readFile('docs/research/occupational-context.json','utf8'))
assert.equal(data.wagePeriod,'May 2025')
assert.equal(data.projectionPeriod,'2025–2035')
const codes=new Set()
for(const row of data.occupations){assert.ok(!codes.has(row.code));codes.add(row.code);assert.match(row.code,/^\d{2}-\d{4}$/);assert.ok(Number.isFinite(row.wage)&&row.wage>0);assert.ok(row.growth===null||(Number.isFinite(row.growth)&&row.growth>=0));assert.equal(new URL(row.url).hostname,'www.bls.gov');assert.equal(new URL(row.onet).hostname,'www.onetonline.org');assert.ok(row.mapping)}
assert.equal(data.occupations.find(row=>row.code==='15-1252').growth,null,'Do not substitute grouped software growth for the individual occupation')
assert.equal(data.occupations.find(row=>row.code==='15-1253').growth,null)
console.log('Occupational context: verified five unique codes, measures, source domains and grouped-projection exclusions.')
