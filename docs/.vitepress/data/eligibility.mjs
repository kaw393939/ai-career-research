import facts from '../../research/eligibility-facts.json'
export { facts }
export function assessFit(job, profile, record = facts[job.id] || {}) {
  const restrictions = [], unknown = [], checks = []
  if (profile.degree) {
    if (!record.degrees) unknown.push('Required degree is not normalized; read the full posting.')
    else if (!record.degrees.includes(profile.degree) && !(job.level !== 'Internship' && ({bachelor:1,master:2,phd:3}[profile.degree] >= Math.min(...record.degrees.map(degree=>({bachelor:1,master:2,phd:3}[degree])))))) (record.equivalent ? unknown : restrictions).push(record.equivalent ? 'Degree differs; employer permits equivalent experience, which needs review.' : 'Selected degree does not match the stated degree requirement.')
    else checks.push('Selected degree appears in the stated requirements.')
  }
  if (profile.year) {
    const year = Number(profile.year)
    if (!Number.isInteger(year) || year < 2020 || year > 2040) unknown.push('Enter a valid graduation year between 2020 and 2040.')
    else if (!record.graduation) unknown.push('No absolute graduation-year window recorded; check the timing and completion rules.')
    else if ((record.graduation[0] != null && year < record.graduation[0]) || (record.graduation[1] != null && year > record.graduation[1])) restrictions.push(`Graduation year is outside the recorded window (${record.graduation[0] == null ? "by " + record.graduation[1] : record.graduation.join("–")}).`)
    else checks.push('Graduation year falls within the recorded window; confirm the exact month/term and remaining-enrollment rules.')
  }
  if (profile.experience !== '') {
    if (!Number.isFinite(Number(profile.experience)) || Number(profile.experience) < 0 || Number(profile.experience) > 50) unknown.push('Enter valid relevant experience between 0 and 50 years.')
    else if (record.experience == null) unknown.push('No numeric professional-experience minimum recorded; project/research requirements may still apply.')
    else if (Number(profile.experience) < record.experience) (record.equivalent ? unknown : restrictions).push(record.equivalent ? 'Experience is below the stated number, but an equivalence route needs employer review.' : `Posting asks for at least ${record.experience} relevant years.`)
    else checks.push('Selected years meet the recorded numeric minimum; relevant scope still needs review.')
  }
  if (profile.stage === 'graduate' && record.student && !record.recentGraduateAllowed) restrictions.push('The posting requires continuing student enrollment during/after the program.')
  if (profile.stage === 'student' && record.graduate) restrictions.push('This is a graduate route; degree completion by the role start needs confirmation.')
  if (profile.research === 'no' && record.research) restrictions.push('Prior research experience or a publication record is required.')
  if (profile.research === 'yes' && record.research) checks.push('Prior research is required; check whether your work meets the employer’s expectation.')
  if (profile.sponsorship === 'needed') {
    if (record.noSponsorship || record.citizen) restrictions.push('The posting excludes sponsorship or requires US citizenship.')
    else unknown.push(record.conditionalSponsorship ? 'Employer generally does not sponsor; confirm whether any exception applies.' : 'Sponsorship support is not established by this record.')
  }
  if (profile.citizenship === 'not-us' && record.citizen) restrictions.push('US citizenship is explicitly required.')
  if (profile.state && job.workMode === 'Remote — US') {
    if (profile.state === 'OTHER') unknown.push('Specify the actual state with the employer; the generic other-state option cannot establish eligibility.')
    else if (record.remoteStates && !record.remoteStates.includes(profile.state)) restrictions.push('Selected state is not among the remote states explicitly listed in this record; confirm other locations with the employer.')
    else if (!record.remoteStates) unknown.push('Remote state eligibility needs employer confirmation.')
  }
  const assessed = !!(profile.stage || profile.degree || profile.year || profile.experience !== '' || profile.research || profile.sponsorship || profile.citizenship || profile.state)
  const status = !assessed ? 'Not assessed' : restrictions.length ? 'Restriction identified' : unknown.length ? 'Needs employer confirmation' : 'Potential match to selected checks'
  return { status, restrictions, unknown, checks, assessed }
}
export function degreeSummary(job) { const f=facts[job.id]; return f?.degrees ? f.degrees.map(degree=>({bachelor: "Bachelor’s",master: "Master’s",phd:'PhD'}[degree])).join(' / ') + (f.equivalent ? ' or equivalent' : '') : 'Degree: see posting' }
export function timingSummary(job) { const f=facts[job.id]; return f?.graduation ? `Graduation ${f.graduation[0] == null ? "by " + f.graduation[1] : f.graduation.join("–")}; confirm term` : 'Timing: see posting' }
