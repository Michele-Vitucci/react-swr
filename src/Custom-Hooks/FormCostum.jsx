import { useState } from "react";

export function useForm(initialValues = { username: "", password: "" }) {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  return { formData, handleChange };
}
