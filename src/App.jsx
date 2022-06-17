import { useForm } from "react-hook-form";

import "./styles.css";

export default function App() {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>React Hook Form Tutorial</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name: <br />
          <input {...register("name", { required: true })} type="text" />
          <br />
          {errors.name?.type === "required" && <p>*name is required</p>}
        </label>
        <label htmlFor="email">
          Email: <br />
          <input {...register("email", { required: true })} type="email" />
          <br />
          {errors.email?.type === "required" && <p>*email is required</p>}
        </label>
        <label htmlFor="username">
          Username: <br />
          <input
            {...register("username", { required: true, maxLength: 30 })}
            type="text"
          />
          <br />
          {errors.username?.type === "required" && <p>*username is required</p>}
        </label>
        <label htmlFor="password">
          Password: <br />
          <input
            {...register("password", { required: true, maxLength: 8 })}
            type="password"
          />
          <br />
          {errors.password?.type === "required" && <p>*password is required</p>}
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
