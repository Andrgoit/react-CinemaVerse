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
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = t("registerForm.errors.emptyField");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)) {
      errors.login = t("registerForm.errors.invalidEmail");
    }

    if (!values.name) {
      errors.name = t("registerForm.errors.emptyField");
    } else if (values.name.length < 3) {
      errors.name = t("registerForm.errors.nameLength");
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
        <h2 className={styles.title}>{t("registerForm.title")}</h2>
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
