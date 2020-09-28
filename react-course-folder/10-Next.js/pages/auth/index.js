import React from 'react';
import Link from 'next/link'

import User from '../../components/User'

const AuthPage = () => (
    <div>
        <h1>The Auth Page</h1>
        <p>Go to <Link href="/"><a>Home</a></Link></p>
        <User name='Bruno' age='31'/>
    </div>
);

export default AuthPage;