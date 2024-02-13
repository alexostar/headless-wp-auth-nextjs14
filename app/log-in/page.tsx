'use client';

import UnAuthContent from '@/app/components/UnAuthContent';
import LogInForm from '@/app/components/LogInForm';

export default function LogIn() {
  return (
    <div>
      <h1>Log In</h1>
      <UnAuthContent>
        <LogInForm />
      </UnAuthContent>
    </div>
  );
}
