import axios from 'axios';

export const formSubmit = async (details) => {
  const {firstName, lastName, email, message} = details;

  try {
    const res = await axios.post("https://formsubmit.co/ajax/misaelpaulmamangun@gmail.com", {
      firstName,
      lastName,
      email,
      message
    })

    return res;
  } catch (error) {
    throw new Error("Failed to submit form: " + error.message)
  }
}