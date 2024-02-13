import React from "react";
import { useForm } from "react-hook-form";
import Forminput from "./Forminput";
import FormTextArea from "./FormtextArea";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

const formSchema = z.object({
  fullName: z.string().min(3).max(20),
  email: z.string().email(),
  subject: z.string().min(10).max(150),
  desc: z.string().min(50).max(500),
});

const contactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });
  //console.log(register);
  const sendInfo = (data) => {
    console.log(data);
  };
  return (
    <div className="m-10 max-w-xl mx-auto">
      <div className="bg-white p-10 rounded mb-2">
        <h4 className="font-semibold text-xl text-center">Contact Form</h4>
        <form className="my-5 space-y-4" onSubmit={handleSubmit(sendInfo)}>
          <Forminput
            name="fullName"
            label="Full Name"
            placeholder="Enter your Full Name!"
            required
            register={register("fullName", {
              required: "This field is required",
            })}
            error={errors.fullName}
          />
          <Forminput
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter your Email Address!"
            required
            register={register("email", {
              required: "This field is required",
            })}
            error={errors.email}
          />
          <Forminput
            name="subject"
            label="Subject"
            placeholder="Enter your Subject title!"
            required
            register={register("subject", {
              required: "This field is required",
            })}
            error={errors.subject}
          />

          <FormTextArea
            name="desc"
            label="Description"
            placeholder="Write your description briefly!"
            required
            register={register("desc", {
              required: "This field is required",
            })}
            error={errors.desc}
          />

          {/* <input
            type="text"
            name="fullName"
            className=" px-4 py-2 bg-gray-200 outline-none rounded w-full block"
            placeholder="Full Name"
            {...register("fullName", {
              required: "Dei, intha field romba mukiyam Da ! ",
              minLength: {
                value: 3,
                message: "This Field Should have atleast 3 characters",
              },
              maxLength: {
                value: 20,
                message: "This Field Should not allow more then 20 characters",
              },
            })}
          />
          {errors.fullName && (
            <small className="text-red-500">{errors.fullName.message}</small>
          )}
          <input
            type="text"
            name="subject"
            className="px-4 py-2 bg-gray-200 outline-none rounded w-full"
            placeholder="Subject"
            {...register("subject")}
          />
          <textarea
            name="description"
            placeholder="Enter your description briefly!"
            className="px-4 py-2 bg-gray-200 outline-none rounded w-full
            "
            {...register("description")}
          ></textarea> */}
          <button className="px-4 py-2 rounded bg-yellow-500">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contactPage;
