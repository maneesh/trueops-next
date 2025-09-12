"use client";

import { createRegister } from "./action";

// Match the expected structure exactly
export interface RegisterData {
  fullname: string;
  email: string;
  password: string;
  mobile: string;
  roleId: number;
  createdBy?: number; // Optional field
}

// Register user
export async function createRegisterClient(data: RegisterData) {
  return await createRegister(data);
}

// Verify OTP – if you're using same data, use same type
export async function verifyOtp(data: RegisterData) {
  return await createRegister(data);
}
