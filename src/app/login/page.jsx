"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {

  const router = useRouter();

  const handleSubmit = async (e) => {
   e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      const res = await fetch("http://localhost:9000/authentication/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      res.status === 200 && router.push("/products");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login to get the xact!</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {/* <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        /> */}
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Email"
         required
          className={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />

        <button className={styles.button}>Login</button>
        {/* {error && "Something went wrong!"} */}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/">
        Login with google
      </Link>
    </div>
  );
};

export default Login;



















