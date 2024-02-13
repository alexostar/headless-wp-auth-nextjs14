import UnAuthContent from '@/app/components/UnAuthContent';
import SignUpForm from '@/app/components/SignUpForm';

export default function SignUp() {
  return (
    <div>
      <h1>Sign Up</h1>
      <UnAuthContent>
        <SignUpForm />
      </UnAuthContent>
    </div>
  );
}
