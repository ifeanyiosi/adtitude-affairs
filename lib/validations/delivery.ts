import * as z from "zod";

export const DeliveryValidation = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(30),
  email: z
    .string()
    .min(2, { message: "Minimum of two characters" })
    .max(30, { message: "Maximum of thirty characters" }),
  phone: z.string().min(2).max(30),
  deliveryMethod: z.string().min(2).max(30),
  location: z.string().min(2).max(30),
  address: z.string().min(2).max(30),
  expectedDeliveryDate: z.string().min(2).max(30),
});
