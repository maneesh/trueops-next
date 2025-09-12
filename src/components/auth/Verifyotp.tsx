"use client";
import { Field, Form, Formik } from "formik";
import { useRouter} from "next/navigation";

import Notifier from "@/utils/notify";

import { verifyOtp } from "../../api/clientAction";

export default function VerifyOtp() {
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const email = searchParams.get("email"); // Removed because unused

  const signupData = JSON.parse(localStorage.getItem("signupData") || "{}");

  return (
    <div className="flex items-center justify-center min-h-screen bg-grey-100">
      <div className=" p-6 rounded shadow w-full max-w-md bg-orange-50">
        <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
        <Formik
          initialValues={{ otp: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              if (!signupData.email) {
                Notifier.error("Signup data missing. Please register again.");
                router.push("/");
                return;
              }

              const payload = { ...signupData, otp: values.otp };
              const res = await verifyOtp(payload);
              // eslint-disable-next-line no-console
              console.log("OTP Response >>>>", res);

              if (res?.success) {
                Notifier.success(res.data?.message || "OTP verified successfully!");
                localStorage.removeItem("signupData");
                router.push("/");
              } else {
                Notifier.error(res?.data?.message || "OTP verification failed");
              }
            } catch (err: unknown) {
              if (err instanceof Error) {
                Notifier.error(err.message);
              } else {
                Notifier.error("Something went wrong!");
              }
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                name="otp"
                type="text"
                placeholder="Enter OTP"
                className="w-full border px-3 py-2 rounded"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-1/2 mx-auto block bg-green-700 text-white py-2 rounded"
              >
                {isSubmitting ? "Verifying..." : "Verify OTP"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
