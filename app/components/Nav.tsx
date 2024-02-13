'use client';

import Link from 'next/link';

import useAuth from '@/hooks/useAuth';

export default function Nav() {
  const { loggedIn } = useAuth();

  return (
    <nav>
      <ul className='nav'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        {!loggedIn ? (
          <>
            <li>
              <Link href='/log-in'>Log In</Link>
            </li>
            <li>
              <Link href='/sign-up'>Sign Up</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href='/members'>Members</Link>
            </li>
            <li>
              <Link href='/create-post'>Create Post</Link>
            </li>
            <li>
              <Link href='/profile'>Profile</Link>
            </li>
            <li>
              <Link href='/log-out'>Log Out</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
