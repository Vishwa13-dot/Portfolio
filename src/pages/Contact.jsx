import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const ContactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is required"),

  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[85vh] bg-slate-950 text-white pt-24 pb-16 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-blue-400 uppercase tracking-[0.35em] text-sm font-medium">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">
            Feel free to reach out for internships,
            freelance work, collaborations or software
            development opportunities.
          </p>

        </div>

        {/* Main Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7 h-full flex flex-col">

            <span className="text-blue-400 uppercase tracking-[0.3em] text-sm font-medium">
              Get In Touch
            </span>

            <h3 className="text-4xl font-bold mt-4 leading-tight">
              Let's Connect 👋
            </h3>

            <p className="text-slate-400 leading-8 mt-6 mb-10">
              I'm always excited to discuss internship opportunities,
              software development, AI projects, freelance work,
              or simply connect with fellow developers.
            </p>

            <div className="space-y-5">

              {/* Email */}

              <a
                href="mailto:vishwaparmar1309@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-slate-700 p-4 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4 flex-1 min-w-0">

                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400 flex-shrink-0">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-slate-500">
                      Email
                    </p>

                    <h4 className="font-medium text-sm break-all">
                      vishwaparmar1309@gmail.com
                    </h4>
                  </div>

                </div>

                <span className="ml-3 flex-shrink-0 group-hover:translate-x-1 transition">
                  ↗
                </span>
              </a>

              {/* LinkedIn */}

              <a
                href="https://linkedin.com/in/work-vishwa"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-700 p-4 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300 mb-4"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <FaLinkedin />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      LinkedIn
                    </p>

                    <h4 className="font-medium">
                      Connect Professionally
                    </h4>
                  </div>

                </div>

                <span className="group-hover:translate-x-1 transition">
                  ↗
                </span>

              </a>

              {/* GitHub */}

              <a
                href="https://github.com/Vishwa13-dot"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-xl border border-slate-700 p-4 hover:border-blue-500 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-blue-600/20 flex items-center justify-center text-blue-400">
                    <FaGithub />
                  </div>

                  <div>
                    <p className="text-xs text-slate-500">
                      GitHub
                    </p>

                    <h4 className="font-medium">
                      Explore My Projects
                    </h4>
                  </div>

                </div>

                <span className="group-hover:translate-x-1 transition">
                  ↗
                </span>

              </a>

            </div>

            {/* Bottom */}

            <div className="mt-auto pt-10">

              <div className="border-t border-slate-700 pt-6 flex items-center justify-between">

                <div>
                  <p className="text-slate-500 text-sm">
                    Availability
                  </p>

                  <p className="text-green-400 font-semibold">
                    ● Open for Internship
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-slate-500 text-sm">
                    Location
                  </p>

                  <p className="font-medium">
                    Ahmedabad, India
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-7">

            <h3 className="text-3xl font-bold mb-2">
              Send Message
            </h3>

            <p className="text-slate-400 mb-8">
              Fill in the details below and I'll reply as soon as possible.
            </p>

            <Formik
              initialValues={{
                name: "",
                email: "",
                mobile: "",
                message: "",
              }}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm, setSubmitting }) => {

                // Save message to localStorage

                const savedMessages =
                  JSON.parse(localStorage.getItem("messages")) || [];

                savedMessages.unshift({
                  id: Date.now(),
                  name: values.name,
                  email: values.email,
                  subject: "Portfolio Contact",
                  mobile: values.mobile,
                  message: values.message,
                  date: new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  }),
                });

                localStorage.setItem(
                  "messages",
                  JSON.stringify(savedMessages)
                );

                // Send Email

                emailjs
                  .send(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID,
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                    {
                      from_name: values.name,
                      from_email: values.email,
                      mobile: values.mobile,
                      message: values.message,
                    },
                    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                  )
                  .then(() => {
                    alert("Message Sent Successfully!");
                    resetForm();
                    setSubmitting(false);
                  })
                  .catch(() => {
                    alert("Failed to send message!");
                    setSubmitting(false);
                  });
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">

                  {/* Full Name */}

                  <div>
                    <label className="block mb-2 text-slate-300 font-medium">
                      Full Name
                    </label>

                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />

                    <ErrorMessage
                      name="name"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>

                  {/* Email */}

                  <div>
                    <label className="block mb-2 text-slate-300 font-medium">
                      Email Address
                    </label>

                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />

                    <ErrorMessage
                      name="email"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>

                  {/* Mobile */}

                  <div>
                    <label className="block mb-2 text-slate-300 font-medium">
                      Mobile Number
                    </label>

                    <Field
                      type="text"
                      name="mobile"
                      placeholder="Enter your mobile number"
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />

                    <ErrorMessage
                      name="mobile"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label className="block mb-2 text-slate-300 font-medium">
                      Message
                    </label>

                    <Field
                      as="textarea"
                      rows="6"
                      name="message"
                      placeholder="Write your message..."
                      className="w-full rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-white placeholder:text-slate-500 resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none transition"
                    />

                    <ErrorMessage
                      name="message"
                      component="p"
                      className="mt-2 text-sm text-red-400"
                    />
                  </div>

                  {/* Submit Button */}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition duration-300 hover:bg-blue-700 disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                </Form>
              )}
            </Formik>

          </div>

        </div>

      </div>
    </section >
  );
}

export default Contact;


