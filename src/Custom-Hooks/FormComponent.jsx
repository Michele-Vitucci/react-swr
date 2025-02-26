import { useForm } from "../Custom-Hooks/FormCostum";

export function FormComponent() {
  const { formData, handleChange } = useForm();

  return (
    <div>
      <h2>Login Form</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <button>Submit</button>
    </div>
  );
}
