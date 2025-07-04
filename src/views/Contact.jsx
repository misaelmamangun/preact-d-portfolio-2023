// Libraries
import { useState } from "preact/hooks";
import axios from "axios";
// UI Components
import MainLayout from "src/components/MainLayout";
// Models
import contact from "src/schemas/contact.json";
// Services
import { formSubmit } from "src/services/api/formSubmitService";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const clearFields = () => {
    setDetails({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  const onChange = (e) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowMessage(false);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    try {
      await formSubmit(details);
      setIsLoading(true);
      setShowMessage(true);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setShowMessage(false);
        clearFields();
      }, 2000);
    }
  };

  const { title, infos } = contact;

  return (
    <MainLayout className="py-4">
      <div className="container mx-auto px-4 mt-8">
        <h1 className="md:text-7xl text-4xl uppercase text-light-400">
          {title}
        </h1>
        <div className="md:grid grid-cols-[1fr,2fr] mt-8 gap-4">
          <div className="text-light-400">
            {infos.map((info) => (
              <div className="mb-4" key={info.title}>
                <h6 className="text-2xl">{info.title}</h6>
                <p>{info.value}</p>
              </div>
            ))}
          </div>
          <form onSubmit={onSubmit}>
            {showMessage ? (
              <div
                class="bg-green-100 border border-light-green-400 text-green-700 mb-4 px-4 py-3 rounded relative"
                role="alert"
              >
                <span class="block sm:inline">
                  Thank you for your message. It has been sent.
                </span>
              </div>
            ) : null}
            <div className="md:grid grid-cols-[1fr,1fr] gap-2">
              <div className="mb-4 grid">
                <label htmlFor="firstName" className="text-light-400">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="p-2"
                  value={details.firstName}
                  onChange={onChange}
                />
              </div>
              <div className="mb-4 grid">
                <label htmlFor="lastName" className="text-light-400">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="p-2"
                  value={details.lastName}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="mb-4 grid">
              <label htmlFor="email" className="text-light-400">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2"
                value={details.email}
                onChange={onChange}
              />
            </div>
            <div className="mb-4 grid">
              <label htmlFor="message" className="text-light-400">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="p-2"
                value={details.message}
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              disabled={true}
              className="p-2 px-6 bg-light-400"
            >
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
