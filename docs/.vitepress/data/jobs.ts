import expandedEvidence from '../../research/expanded-evidence.json'
import internshipEvidence from '../../research/internship-evidence.json'
import entryEvidence from '../../research/entry-evidence.json'
import experiencedEvidence from '../../research/experienced-evidence.json'

export type JobExample = {
  id: string
  employer: string
  title: string
  level: 'Internship' | 'Entry level' | 'Mid level' | 'Senior'
  role: string
  location: string
  workMode: 'On-site' | 'Hybrid' | 'Remote — US' | 'US location; mode unspecified'
  eligibility: string
  experience: string
  levelReason: string
  responsibilities: string[]
  skills: string[]
  compensation?: string
  status: 'Open when checked' | 'Status uncertain' | 'Closed example'
  sourceUrl: string
  sourceLabel: string
  checked: string
  portfolio: string
  transferable: string[]
}

export const researchDate = 'November 5, 2026'
export const jobs = [...internshipEvidence, ...entryEvidence, ...experiencedEvidence, ...expandedEvidence] as JobExample[]
