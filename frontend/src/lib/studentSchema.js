import { z } from "zod";

const clean = text => text.replace(/[<>()]/g, "");

const studentSchema = z.object({
    name: z.string()
        .min(4, "Minimum 4 characters")
        .max(20, "Maximum 20 characters")
        .trim()
        .regex(/^[a-zA-Z .]+$/, "Please enter only alphabets")
        .transform(clean),

    email: z.string()
        .trim()
        .toLowerCase()
        .email("Please enter a valid email")
        .transform(clean),

    age: z.coerce.number()
    .min(18, "Age must be at least 18")
    .max(70, "Age must be less than or equal to 70"),

    course: z.enum(["CSE", "CSBS", "ECE", "EEE"], {
        message: "select a valid course",
    }),
});

export default studentSchema;