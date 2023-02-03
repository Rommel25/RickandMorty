import { getAuth, signOut } from 'firebase/auth'
import { useAuthState } from '../Firebase/init'

export const Account = () => {
    const { user } = useAuthState()

    return (
        <>
            <h1>Welcome {user?.email}</h1>
            <button onClick={() => signOut(getAuth())}>Sign out</button>
        </>
    )
}
