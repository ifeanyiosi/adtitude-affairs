"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { DeliveryValidation } from "@/lib/validations/delivery";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import StateSelect from "@/components/state-select";

export default function DeliveryDetails() {
  const form = useForm({
    resolver: zodResolver(DeliveryValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      deliveryMethod: "",
      location: "",
      address: "",
      expectedDeliveryDate: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof DeliveryValidation>) => {
    console.log(values);
  };

  return (
    <div className="min-h-screen px-6 lg: flex flex-col lg:justify-center lg:items-center w-full">
      <div className="mt-8">
        <h2 className="text-[20px] lg:text-[32px] font-bold ">
          Delivery Details
        </h2>
      </div>

      <div className="lg:max-w-[500px] pb-[50px] flex flex-col items-center justify-center mt-8  lg:mt-[70px] w-full">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col justify-start lg:justify-center w-full  space-y-8"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="flex flex-col  w-full">
                  <FormLabel className="text-base-semibold text-light-2">
                    First Name
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      className="account-form_input no-focus"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="flex flex-col  w-full">
                  <FormLabel className="text-base-semibold text-light-2">
                    Last Name
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      className="account-form_input no-focus"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col  w-full">
                  <FormLabel className="text-base-semibold text-light-2">
                    Email
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      className="account-form_input no-focus"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex flex-col  w-full">
                  <FormLabel className="text-base-semibold text-light-2">
                    Phone
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      className="account-form_input no-focus"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem className="space-y-3">
              <FormLabel className="text-base-semibold text-light-2">
                Delivery method.
              </FormLabel>
              <FormControl>
                <RadioGroup className="flex flex-col space-y-1">
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="mentions" />
                    </FormControl>
                    <FormLabel className="font-normal">Pick Up</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="none" />
                    </FormControl>
                    <FormLabel className="font-normal">Delivery</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>

            <StateSelect />

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className="flex flex-col  w-full">
                  <FormLabel className="text-base-semibold text-light-2">
                    Address
                  </FormLabel>
                  <FormControl className="">
                    <Input
                      className="account-form_input no-focus"
                      placeholder=""
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full text-gray-500 text-[20px] font-bold flex items-center justify-between">
              <h4>Subtotal:</h4>
              <h4>N300000</h4>
            </div>

            <div className="w-full text-[15px]   lg:text-[20px] tracking-tight flex items-center justify-between">
              <h4 className="text-gray-400 font-[300] ">
                Anker soundcore life P2 mini true wireless earbuds x1
              </h4>
              <h4 className="font-bold">₦38,000</h4>
            </div>

            <div className="w-full text-[15px] font-bold  lg:text-[20px] tracking-tight flex items-center justify-between">
              <h4 className="text-gray-400 font-[400] ">Delivery</h4>
              <h4>₦1,000</h4>
            </div>

            <div className="w-full h-[1px] bg-gray-400 " />

            <div className="w-full text-[15px] font-bold  lg:text-[20px] tracking-tight flex flex-col gap-2 items-end justify-end">
              <h4 className="text-gray-400 font-[400] ">TOTAL</h4>
              <h4>₦1,000</h4>
            </div>

            <div className="w-full flex flex-col gap-3 ">
              <Button className="w-full" variant="secondary">
                Back
              </Button>
              <Link href="/payment">
                <Button className="w-full">Pay</Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
