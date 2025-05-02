import { Orbitron } from 'next/font/google'
import type { Metadata } from 'next'
import IssueTable from '@/components/issue-table/issueTable'
import { Suspense } from 'react'

const orb = Orbitron({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Issue List',
    description: 'All of the issues tracked by the Starfield Community Patch, all in one place!',
}

export default function IssuePage() {
    return (
        <div>
            <h1 className={orb.className}>Community Patch Issue List</h1>
            <Suspense>
            <IssueTable />
            </Suspense>
        </div>
    )
}