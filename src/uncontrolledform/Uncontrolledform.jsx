function UncontrolledLogin() {
  const onLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log({
      name: form.username.value,
      password: form.password.value,
      checkbox: form.remember.checked,
    });
  };

  const loginWithFormData = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target.form); 
    console.log({
      name: formData.get("username"),
      password: formData.get("password"),
      checkbox: formData.get("remember"), 
    });
  };

  return (
    <form onSubmit={onLogin}>
      <input type="text" name="username" placeholder="Username" />
      <input type="password" name="password" placeholder="Password" />
      <input type="checkbox" name="remember" />

      <button type="submit">Login</button>
      <button type="button" onClick={loginWithFormData}>FormData</button>
    </form>
  );
}

export default UncontrolledLogin;
