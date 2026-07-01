import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Full Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Mobile Number must be exactly 10 digits")
    .required("Mobile Number is Required"),

  message: Yup.string()
    .min(5, "Message must be at least 5 characters")
});

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="max-w-6xl mx-auto">
        <div className="border-t border-slate-800 pt-16">
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em] mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Let's build
            <br />
            something great.
          </h2>

          <p className="text-slate-400 text-lg mt-8 max-w-2xl">
            I'm currently looking for internships, software development
            opportunities, and exciting projects in AI, Machine Learning,
            and Data Science.
          </p>

          <div className="grid md:grid-cols-2 gap-16 mt-16">
            {/* Left Side */}
            <div>
              <h2 className="text-3xl font-semibold mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <a
                  href="mailto:vishwaparmar1309@gmail.com"
                  className="flex items-center gap-4 text-xl font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>Email</span>
                  <span className="text-sm">↗</span>
                </a>

                <a
                  href="https://linkedin.com/in/work-vishwa"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-xl font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                >
                  <FaLinkedin className="text-2xl" />
                  <span>LinkedIn</span>
                  <span className="text-sm">↗</span>
                </a>

                <a
                  href="https://github.com/Vishwa13-dot"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 text-xl font-medium text-slate-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                >
                  <FaGithub className="text-2xl" />
                  <span>GitHub</span>
                  <span className="text-sm">↗</span>
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  mobile: "",
                  message: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { resetForm, setSubmitting }) => {

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
                    .then((result) => {
                      console.log(result.text);

                      alert("Message Sent Successfully!");

                      resetForm();

                      setSubmitting(false);
                    })

                    .catch((error) => {
                      console.log(error.text);

                      alert("Failed to send message!");

                      setSubmitting(false);
                    });

                }}
              >
                <Form className="space-y-6">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg mb-8">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Contact Me
                    </h3>
                    <p className="text-slate-400">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <div className="space-y-6">

                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Full Name
                      </label>
                      <Field
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="w-full bg-slate-800/70 border border-slate-700 rounded-xl px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />

                      <ErrorMessage
                        name="name"
                        component="p"
                        className="mt-2 text-sm text-red-400"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>

                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="w-full bg-slate-800/70 border border-slate-700 rounded-xl px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />

                      <ErrorMessage
                        name="email"
                        component="p"
                        className="mt-2 text-sm text-red-400"
                      />
                    </div>

                    {/* Mobile */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Mobile Number
                      </label>

                      <Field
                        type="text"
                        name="mobile"
                        placeholder="Enter your mobile number"
                        className="w-full bg-slate-800/70 border border-slate-700 rounded-xl px-5 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />

                      <ErrorMessage
                        name="mobile"
                        component="p"
                        className="mt-2 text-sm text-red-400"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Your Message
                      </label>

                      <Field
                        as="textarea"
                        rows="6"
                        name="message"
                        placeholder="Write your message..."
                        className="w-full bg-slate-800/70 border border-slate-700 rounded-xl px-5 py-3 text-white placeholder:text-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                      />

                      <ErrorMessage
                        name="message"
                        component="p"
                        className="mt-2 text-sm text-red-400"
                      />
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      Send Message
                    </button>

                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;