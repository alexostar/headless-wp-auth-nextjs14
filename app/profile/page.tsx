import AuthContent from '../components/AuthContent';

import ProfileForm from '@/app/components/ProfileForm';

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <AuthContent>
        <ProfileForm />
      </AuthContent>
    </div>
  );
}
