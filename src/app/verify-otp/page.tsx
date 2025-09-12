import { Suspense } from "react";

import VerifyOtp from "../../components/auth/Verifyotp";

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyOtp />
    </Suspense>
  );
}