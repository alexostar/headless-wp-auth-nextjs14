import UnAuthContent from '@/app/components/UnAuthContent';
import SendPasswordResetEmailForm from '@/app/components/SendPasswordResetEmailForm';

export default function ForgotPassword() {
  return (
    <div>
      <h1>Forgot Your Password?</h1>
      <UnAuthContent>
        <SendPasswordResetEmailForm />
      </UnAuthContent>
    </div>
  );
}
