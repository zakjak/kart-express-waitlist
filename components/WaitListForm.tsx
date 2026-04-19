"use client";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { MdOutlineElectricMoped } from "react-icons/md";
import { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "./ui/spinner";

const formSchema = z
  .object({
    name: z.string().min(1, { message: "Name field cannot be empty" }),
    company: z.string().optional(),
    email: z.email().optional(),
    phone: z.string().min(1, { message: "Phone field cannot be empty" }),
    interested: z.string(),
    other: z.string(),
  })
  .refine(
    (data) => {
      if (data.interested === "other") {
        return data.other && data.other.trim().length > 0;
      }
      return true;
    },
    {
      message: "Please specify your interest",
      path: ["other"],
    },
  );

const WaitListForm = () => {
  const [joined, setJoined] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: undefined,
      interested: "",
      other: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    const result = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify(values),
    });

    const data = await result.json();

    try {
      if (!data.success) {
        toast(data.message);

        setIsSubmitting(false);
      } else {
        toast("Successfully joined waitlist 🎉🎉🎉");
        setIsSubmitting(false);
      }

      setJoined(data);
    } catch (err) {
      console.log(err);
      toast("Server error. try again shortly");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="wait-list-section"
      className="mx-auto  text-center relative bg-[#EDF8FF] py-20"
    >
      <Card className="w-[90%] lg:w-[60%] mx-auto bg-white text-center relative shadow-2xl">
        <MdOutlineElectricMoped
          size={100}
          className="absolute right-8 top-5 opacity-10 text-[#EA7704]"
        />
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold mt-4">
            Reserve Your Spot
          </CardTitle>
          <CardDescription className="mt-2 text-xs w-[60%] mx-auto">
            Be the first to experience the kinetic flow. Join the exclusive
            waitlist for early access, zero delivery fees for 3 months, and
            founding member perks
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="form-rhf" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="name"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-name">Full Name</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter name..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="company"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-company">
                      Company Name
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter company's name..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-email">
                      Email Address
                    </FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter email address..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-phone">Phone #</FieldLabel>
                    <Input
                      {...field}
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter phone number..."
                      autoComplete="off"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="interested"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-interested">
                      I AM INTERESTED IN...
                    </FieldLabel>
                    <Select
                      name={field.name}
                      value={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger
                        id="form-rhf-select-interested"
                        aria-invalid={fieldState.invalid}
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectItem value="customer">
                          Ordering Food and Essentials
                        </SelectItem>
                        <SelectItem value="rider">Becomimg a Rider</SelectItem>
                        <SelectItem value="merchant">
                          Listing my Business
                        </SelectItem>
                        <SelectItem value="partner">
                          Partnering KartExpress
                        </SelectItem>
                        <SelectItem value="investor">
                          Investing / Supporting
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {form.watch("interested") === "other" && (
                <Controller
                  name="other"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="form-rhf-phone">
                        Other (optional)
                      </FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter other..."
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              )}
            </FieldGroup>
            <CardFooter>
              <Button
                disabled={isSubmitting}
                className="bg-linear-to-r from-[#9A4C00] to-[#F17B02] w-full text-[1rem] tracking-wide py-5 font-bold cursor-pointer"
                type="submit"
                form="form-rhf"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    {"Submitting Waitlist"} <Spinner />
                  </div>
                ) : (
                  "Join the Waitlist"
                )}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaitListForm;
