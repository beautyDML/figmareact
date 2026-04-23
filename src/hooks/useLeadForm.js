import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";

const leadSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Valid phone number required"), // Stores full number like +9198765...
  requirements: z.string().optional(),
  acceptPolicy: z.literal(true, {
    errorMap: () => ({ message: "Please accept the policy" }),
  }),
  captchaAnswer: z.string().refine((val) => val === "4", {
    message: "Incorrect answer",
  }),
});

export const useLeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      requirements: "",
      acceptPolicy: false,
      captchaAnswer: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Submitting to DigiMantra:", data);
      toast.success("Thank you! We'll connect soon.");
      form.reset();
    } catch (error) {
      toast.error("Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { form, onSubmit: form.handleSubmit(onSubmit), isSubmitting };
};