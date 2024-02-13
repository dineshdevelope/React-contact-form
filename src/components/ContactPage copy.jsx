import Forminput from "./Forminput";
import FormBotton from "./FormBotton";
import FormtextArea from "./FormtextArea";
import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ fullName: "", Email: "", desc: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({
      ...form,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
    alert(`Your Form sucessfully submited...! ${form.fullName}`);
    setForm({ fullName: "", Email: "", desc: "" });
  };
  return (
    <div className="m-10 max-w-xl mx-auto">
      <div className="bg-white p-10 rounded mb-2">
        <h4 className="font-semibold text-xl text-center">Contact Form</h4>
      </div>

      <form action="" onSubmit={submitForm}>
        <div>
          <Forminput
            name="fullName"
            label="FullName"
            placeholder="Enter your Full Name"
            value={form.fullName}
            handleOnchange={handleInput}
            required
          />
          <Forminput
            name="Email"
            label="Email"
            placeholder="Enter your Email"
            value={form.Email}
            handleOnchange={handleInput}
            required
          />
          <FormtextArea
            name="desc"
            label="Share your feedback..!"
            placeholder="share you feedback briefly"
            value={form.desc}
            handleOnchange={handleInput}
            required
          />

          <div className="text-center mt-5">
            <FormBotton text="Submit" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
