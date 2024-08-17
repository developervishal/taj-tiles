import React from 'react'
import { Button } from '../ui/button';
import { signOut } from '@/auth';

function SignOut() {
    return (
        <form
            action={async () => {
                'use server';
                await signOut();
            }}
        >
            <Button variant='default' size={'lg'}>
                Sign Out
            </Button>
        </form>
    )
}

export default SignOut