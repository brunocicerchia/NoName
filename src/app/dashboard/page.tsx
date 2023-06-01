'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import ContentLoader from 'react-content-loader'

function Dashboard() {
    const { data: session, status} = useSession()
    const router = useRouter()
    console.log(session, status)

    if(status === 'loading') {
        return(
            <ContentLoader
                speed={2}
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="#d9d9d9"
                foregroundColor="#ededed"
                >
                <rect x="50" y="6" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="6" rx="4" ry="4" width="35" height="38" />
                <rect x="50" y="55" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="55" rx="4" ry="4" width="35" height="38" />
                <rect x="50" y="104" rx="4" ry="4" width="343" height="38" />
                <rect x="8" y="104" rx="4" ry="4" width="35" height="38" />
            </ContentLoader>
        )
    }

    if(status === 'unauthenticated') {
        router.push('/')
    } else {
        return(
            <div>{session.user.name}</div>
        )
    }

    return (
            <div>
                
            </div>
    )
}

export default Dashboard