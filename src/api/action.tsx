// "use server";

// import { _endpoint_createRegister, _endpoint_login } from "@/apiConfig";
// import HTTP from "@/service/http";

// export async function createRegister(data: {
//   fullname: string;
//   email: string;
//   password: string;
//   mobile: string;
//   roleId: number;
//   createdBy?: number;
// }) {
//   try {
//     const res = await HTTP.post(_endpoint_createRegister, data);
//     return { success: true,
//        data: res.data, }; //  success case
//   } catch (error: any) {
//     // console.error("Error in createRegister:", error);

//     //  extract proper error message
//     const message =
//       error?.response?.data?.message ||
//       error?.message ||
//       "Something went wrong on server";

//     //  return structured error instead of throwing
//     return { success: false, message };
//   }
// }

// export async function login(data: { email: string; password: string }) {
//   try {
//     const res = await HTTP.post(_endpoint_login, data);
//     return { success: true, data: res.data }; //  success case
//   } catch (error: any) {
//     // console.error("Error in login:", error);

//     const message =
//       error?.response?.data?.message ||
//       error?.message ||
//       "Something went wrong on server";

//     return { success: false, message }; //  structured error
//   }
// }





// // "use server";

// // import type { AxiosError } from "axios"; // ✅ Import AxiosError

// // import { _endpoint_createRegister, _endpoint_login } from "@/apiConfig";
// // import HTTP from "@/service/http";

// // export async function createRegister(data: {
// //   fullname: string;
// //   email: string;
// //   password: string;
// //   mobile: string;
// //   roleId: number;
// //   createdBy?: number;
// // }) {
// //   try {
// //     const res = await HTTP.post(_endpoint_createRegister, data);
// //     return { success: true, data: res.data };
// //   } catch (error: unknown) {
// //     let message = "Something went wrong on server";

// //     if (isAxiosError(error)) {
// //       message =
// //         error.response?.data?.message ??
// //         error.message ??
// //         message;
// //     } else if (error instanceof Error) {
// //       message = error.message;
// //     }

// //     return { success: false, message };
// //   }
// // }

// // export async function login(data: { email: string; password: string }) {
// //   try {
// //     const res = await HTTP.post(_endpoint_login, data);
// //     return { success: true, data: res.data };
// //   } catch (error: unknown) {
// //     let message = "Something went wrong on server";

// //     if (isAxiosError(error)) {
// //       message =
// //         error.response?.data?.message ??
// //         error.message ??
// //         message;
// //     } else if (error instanceof Error) {
// //       message = error.message;
// //     }

// //     return { success: false, message };
// //   }
// // }

// // // ✅ Helper function to check if error is an AxiosError
// // function isAxiosError(error: unknown): error is AxiosError<{ message?: string }> {
// //   return (
// //     typeof error === "object" &&
// //     error !== null &&
// //     "isAxiosError" in error &&
// //     (error as AxiosError).isAxiosError === true
// //   );
// // }





"use server";

import axios from "axios";

import { _endpoint_createRegister, _endpoint_login } from "@/apiConfig";
import HTTP from "@/service/http";

export async function createRegister(data: {
  fullname: string;
  email: string;
  password: string;
  mobile: string;
  roleId: number;
  createdBy?: number;
}) {
  try {
    const res = await HTTP.post(_endpoint_createRegister, data);
    return {
      success: true,
      data: res.data,
    };
  } catch (error: unknown) {
    let message = "Something went wrong on server";

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message || message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    return { success: false, message };
  }
}

export async function login(data: { email: string; password: string }) {
  try {
    const res = await HTTP.post(_endpoint_login, data);
    return {
      success: true,
      data: res.data,
    };
  } catch (error: unknown) {
    let message = "Something went wrong on server";

    if (axios.isAxiosError(error)) {
      message = error.response?.data?.message || error.message || message;
    } else if (error instanceof Error) {
      message = error.message;
    }

    return { success: false, message };
  }
}
