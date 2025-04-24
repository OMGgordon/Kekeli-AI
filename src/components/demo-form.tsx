"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  title: z.string().optional(),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function DemoForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            id="firstName"
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
            placeholder="John"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            id="lastName"
            className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
          placeholder="john@example.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-300">
          Company
        </label>
        <input
          {...register("company")}
          type="text"
          id="company"
          className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
          placeholder="Acme Inc."
        />
        {errors.company && (
          <p className="mt-1 text-sm text-red-500">{errors.company.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-300">
          Title (Optional)
        </label>
        <input
          {...register("title")}
          type="text"
          id="title"
          className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
          placeholder="CEO"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message (Optional)
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-600 text-gray-100 px-3 py-2 focus:border-violet-500 focus:ring-violet-500 sm:text-sm"
          placeholder="Tell us about your needs..."
        />
      </div>

      {submitStatus === "success" && (
        <div className="rounded-md bg-green-900/50 p-4">
          <p className="text-sm text-green-400">
            Thank you! We'll get back to you soon.
          </p>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="rounded-md bg-red-900/50 p-4">
          <p className="text-sm text-red-400">
            Something went wrong. Please try again.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin h-5 w-5 mr-2" />
            Submitting...
          </>
        ) : (
          "Request Demo"
        )}
      </button>
    </form>
  );
} 