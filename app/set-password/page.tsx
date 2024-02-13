'use client';

//import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';

import SetPasswordForm from '@/app/components/SetPasswordForm';

export default function SetPassword() {
  const searchParams = useSearchParams();
  //const router = useRouter();
  const resetKey = searchParams.get('key') || '';
  const login = searchParams.get('login') || '';

  console.log(resetKey, login);

  return (
    <div>
      <h1>Set Password</h1>
      <SetPasswordForm resetKey={resetKey} login={login} />
    </div>
  );
}
