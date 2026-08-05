import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Filled_Warning from "@/assets/icons/error.svg?react";
import styles from "./RegisterForm.module.css";

export default function RegisterForm({ userSignUping, formChanger }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = t("registerForm.errors.emptyField");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = t("registerForm.errors.invalidEmail");
    }

    if (!values.displayName) {
      errors.displayName = t("registerForm.errors.emptyField");
    } else if (values.displayName.length < 3) {
      errors.displayName = t("registerForm.errors.nameLength");
    }

    if (!values.password) {
      errors.password = t("registerForm.errors.emptyField");
    } else if (values.password.length < 8) {
      errors.password = t("registerForm.errors.passwordLength");
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = t("registerForm.errors.emptyField");
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = t("registerForm.errors.wrongConfirmPassword");
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "test@example.com",
      displayName: "Andrey",
      password: "1234567890",
      confirmPassword: "1234567890",
    },
    validate,
    onSubmit: (values) => {
      const { email, password, displayName } = values;
      userSignUping({ email, password, displayName });

      formik.resetForm({
        email: "test@example.com",
        displayName: "Andrey",
        password: "1234567890",
        confirmPassword: "1234567890",
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
        <h2 className={styles.title}>{t("registerForm.title")}</h2>
        <div className="w-full">
          <div className={styles.inputWrapper}>
            <input
              id="email"
              name="email"
              type="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="off"
              className={styles.input}
              placeholder={t("registerForm.loginPlaceholder")}
            />
          </div>
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.inputErrorMessage}>
              <Filled_Warning />
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div className="w-full">
          <div className={styles.inputWrapper}>
            <input
              id="displayName"
              name="displayName"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.displayName}
              autoComplete="off"
              className={styles.input}
              placeholder={t("registerForm.namePlaceholder")}
            />
          </div>
          {formik.touched.displayName && formik.errors.displayName ? (
            <div className={styles.inputErrorMessage}>
              <Filled_Warning />
              {formik.errors.displayName}
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
          {t("registerForm.title")}
        </button>
      </form>
      <div className={styles.questionWrapper}>
        <p className={styles.questionText}>{t("registerForm.haveAnAccount")}</p>
        <button
          type="button"
          className={styles.questionButton}
          onClick={formChanger}
        >
          {t("registerForm.login")}
        </button>
      </div>
    </>
  );
}
