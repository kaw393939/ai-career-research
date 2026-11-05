import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
// Node uses a JSON import attribute; load the shared pure logic with facts injected for this test.
const source = await readFile('docs/.vitepress/data/eligibility.mjs','utf8')
const facts = JSON.parse(await readFile('docs/research/eligibility-facts.json','utf8'))
const code = source.replace("import facts from '../../research/eligibility-facts.json'", `const facts = ${JSON.stringify(facts)}`)
const { assessFit } = await import('data:text/javascript;base64,'+Buffer.from(code).toString('base64'))
const empty = {degree:'',year:'',experience:'',research:'',sponsorship:'',citizenship:'',state:''}
const job = id => ({id,workMode:'US location; mode unspecified'})
assert.equal(assessFit(job('gm-ai-platform-intern-2027'),{...empty,year:'2028'}).status,'Potential match to selected checks')
assert.equal(assessFit(job('gm-ai-platform-intern-2027'),{...empty,year:'2029'}).restrictions.length,0)
assert.ok(assessFit(job('gm-ai-platform-intern-2027'),{...empty,year:'2030'}).restrictions.length)
assert.ok(assessFit(job('atlassian-ml-intern-2027'),{...empty,degree:'bachelor'}).restrictions.length)
assert.equal(assessFit(job('adobe-university-graduate-machine-learning-engineer-2027'),{...empty,degree:'bachelor'}).status,'Needs employer confirmation')
assert.ok(assessFit(job('scale-ml-research-intern-2027'),{...empty,research:'no'}).restrictions.length)
assert.ok(assessFit(job('c3-ai-federal-fde-new-grad-2027'),{...empty,citizenship:'not-us'}).restrictions.length)
assert.equal(assessFit(job('t-mobile-assoc-ai-intern-2027'),{...empty,year:'2028'}).status,'Needs employer confirmation')
assert.equal(assessFit(job('gm-ai-platform-intern-2027'),empty).status,'Not assessed')
assert.ok(assessFit({id:'nvidia-senior-ai-security',workMode:'Remote — US'},{...empty,state:'NJ'}).restrictions.length)
assert.equal(assessFit({...job('allstate-ai-software-engineer'),level:'Mid level'},{...empty,degree:'phd'}).restrictions.length,0)
assert.ok(assessFit(job('gm-ai-platform-intern-2027'),{...empty,experience:'-1'}).unknown.length)
assert.ok(assessFit(job('gm-ai-platform-intern-2027'),{...empty,stage:'graduate'}).restrictions.length)
const groups=['internship','entry','experienced','expanded']
for(const group of groups) for(const j of JSON.parse(await readFile(`docs/research/${group}-evidence.json`,'utf8'))) assert.ok(facts[j.id],`Missing structured facts: ${j.id}`)
console.log('Passed 13 eligibility boundary/unknown/restriction cases and complete structured-fact coverage.')
