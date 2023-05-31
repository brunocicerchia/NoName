import { getSession } from 'next-auth/react'

function Dashboard({ session }) {
    console.log(session)
    return (
        <div>
            Dashboard
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const session = await getSession(context);
    return {
        props: {
            session: session,
        },
    };
}

export default Dashboard