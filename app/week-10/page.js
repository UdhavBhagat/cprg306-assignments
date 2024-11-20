"use client"
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        await gitHubSignIn();
    }

    const handleSignOut = async () => {
        await firebaseSignOut();
    }
    return (
        <div>
            { user ? <p>
                        Welcome, {user.displayName} ({user.email})
                        </p> : <p> Plese sign in to continue</p> }
            { user ? 
            <div>
            <Link href="./week-10/shopping-list"> Shopping List</Link><br />
            <button onClick={handleSignOut}>Sign Out </ button>
            </div> :
            <button onClick={handleSignIn}>Sign In</button>}
            
        </div>
    )
}