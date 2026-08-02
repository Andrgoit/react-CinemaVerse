import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Filled_Warning from "@/assets/icons/error.svg?react";
import styles from "./RegisterForm.module.css";

export default function RegisterForm({ userRegistration, formChanger }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState(false);
  const errorCounts = Object.keys(errors).length;
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = "This field cannot be empty";
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)) {
      errors.login = "Invalid email address";
    }

    if (!values.name) {
      errors.name = "This field cannot be empty";
    } else if (values.name.length < 3) {
      errors.firstName = "Must be 3 characters or more";
    }

    if (!values.password) {
      errors.password = "This field cannot be empty";
    } else if (values.password.length < 8) {
      errors.password = "Must be 8 characters or more";
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = "This field cannot be empty";
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Wrong confirm password";
    }
    setErrors(errors);
    return errors;
  };

  const formik = useFormik({
    initialValues: { login: "", name: "", password: "", confirmPassword: "" },
    validate,
    onSubmit: (values) => {
      userRegistration(values);

      formik.resetForm({
        login: "",
        name: "",
        password: "",
        confirmPassword: "",
      });
    },
  });

  const handlerClickShowPassword = (id) => {
    if (id === "password") {
      return setIsShowPassword(!isShowPassword);
    }
    if (id === "confirmPassword") {
      return setIsShowConfirmPassword(!isShowConfirmPassword);
    }
  };

  return (
    <>
      <form
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.8 }}

        onSubmit={formik.handleSubmit}
        className={styles.form}
      >
        <h2 className={styles.title}>Sign Up</h2>
        <div className="w-full">
          <div className={styles.inputWrapper}>
            <input
              id="login"
              name="login"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.login}
              autoComplete="off"
              className={styles.input}
              placeholder={t("registerForm.loginPlaceholder")}
            />
          </div>
          {formik.touched.login && formik.errors.login ? (
            <div className={styles.inputErrorMessage}>
              <Filled_Warning />
              {formik.errors.login}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className={styles.inputWrapper}>
            <input
              id="name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
              autoComplete="off"
              className={styles.input}
              placeholder={t("registerForm.namePlaceholder")}
            />
          </div>
          {formik.touched.name && formik.errors.name ? (
            <div className={styles.inputErrorMessage}>
              <Filled_Warning />
              {formik.errors.name}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className={styles.inputWrapper}>
            <input
              id="password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder={t("registerForm.passwordPlaceholder")}
              className={styles.input}
            />
            <div
              className="absolute top-1/2 right-3 translate-y-[-50%]"
              onClick={() => handlerClickShowPassword("password")}
            >
              {isShowPassword ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </div>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.inputErrorMessage}>
              <Filled_Warning />
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className={styles.inputWrapper}>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={isShowConfirmPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              placeholder={t("registerForm.confirmPasswordPlaceholder")}
              className={styles.input}
            />
            <div
              className="absolute top-1/2 right-3 translate-y-[-50%]"
              onClick={() => handlerClickShowPassword("confirmPassword")}
            >
              {isShowConfirmPassword ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </div>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className={styles.inputErrorMessage}>
              <Filled_Warning />
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>

        <button type="submit" className={styles.button}>
          Sign Up
        </button>
      </form>
      <div className={styles.questionWrapper}>
        <p className={styles.questionText}>Already have an account? </p>
        <button
          type="button"
          className={styles.questionButton}
          onClick={formChanger}
        >
          Login
        </button>
      </div>
    </>
  );
}
