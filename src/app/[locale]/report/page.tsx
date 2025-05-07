import { Orbitron } from 'next/font/google'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import ReportWizard from '@/components/reporting/reportwizard'
import { getRepoAndLabels } from '@/util/GitHub/get-repo-labels'
import CountDownTimer from '@/components/countdown/countdownTimer'

export const metadata: Metadata = {
    title: 'Report an Issue',
    description: 'Report a bug to the Oblivion Remastered Community Patch team for review and fixing. Only issues with the base game will be accepted.',
  }

const orb = Orbitron({ subsets: ['latin'] })

export default async function ReportPage() {

    const repoInfo = await getRepoAndLabels();

    return (
        <div>
            <h1>Report an Issue</h1>
            <Suspense fallback={<p>Loading...</p>}>
                <ReportWizard repo={repoInfo} />
            </Suspense>
        </div>
    )
}
