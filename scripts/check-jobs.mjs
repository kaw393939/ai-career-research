import { readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'

const sources = ['internship', 'entry', 'experienced']
const levels = ['Internship', 'Entry level', 'Mid level', 'Senior']
const modes = ['On-site', 'Hybrid', 'Remote — US', 'US location; mode unspecified']
const statuses = ['Open when checked', 'Status uncertain', 'Closed example']
const records = (await Promise.all(sources.map(async group =>
  JSON.parse(await readFile(`docs/research/${group}-evidence.json`, 'utf8'))
))).flat()
const ledger = await readFile('docs/jobs/sources.md', 'utf8')
const ids = new Set()

for (const job of records) {
  for (const key of ['id', 'employer', 'title', 'role', 'location', 'eligibility', 'experience', 'levelReason', 'sourceUrl', 'sourceLabel', 'checked', 'portfolio']) {
    assert.equal(typeof job[key], 'string', `${job.id}: missing ${key}`)
    assert.ok(job[key].trim(), `${job.id}: empty ${key}`)
  }
  assert.ok(!ids.has(job.id), `Duplicate job id: ${job.id}`)
  ids.add(job.id)
  assert.ok(levels.includes(job.level), `${job.id}: invalid level`)
  assert.ok(modes.includes(job.workMode), `${job.id}: invalid work mode`)
  assert.ok(statuses.includes(job.status), `${job.id}: invalid availability`)
  assert.equal(new URL(job.sourceUrl).protocol, 'https:', `${job.id}: source must use HTTPS`)
  for (const key of ['responsibilities', 'skills', 'transferable']) {
    assert.ok(Array.isArray(job[key]) && job[key].length && job[key].every(value => typeof value === 'string' && value.trim()), `${job.id}: invalid ${key}`)
  }
  assert.ok(ledger.includes(job.sourceUrl), `${job.id}: missing from source ledger`)
}
for (const level of levels) assert.ok(records.some(job => job.level === level), `Missing career stage: ${level}`)
console.log(`Verified ${records.length} sourced job records across all four career stages and their source-ledger coverage.`)
