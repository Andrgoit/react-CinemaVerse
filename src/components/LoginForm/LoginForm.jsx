import { useFormik } from "formik";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import { motion } from "framer-motion";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import Filled_Warning from "@/assets/icons/error.svg?react";
import styles from "./LoginForm.module.css";

export default function LoginForm({ userLogination, formChanger }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};

    if (!values.login) {
      errors.login = t("loginForm.errors.emptyField");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.login)) {
      errors.login = t("loginForm.errors.invalidEmail");
    }

    if (!values.password) {
      errors.password = t("loginForm.errors.emptyField");
    } else if (values.password.length < 8) {
      errors.password = t("loginForm.errors.passwordLength");
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: { login: "test@example.com", password: "1234567890" },
    validate,
    onSubmit: (values) => {
      userLogination(values);

      formik.resetForm({ login: "test@example.com", password: "1234567890" });
    },
  });

  return (
    <>
      <form
        //   initial={{ opacity: 0, scale: 0.5 }}
        //   animate={{ opacity: 1, scale: 1 }}
        //   transition={{ duration: 0.8 }}

        onSubmit={formik.handleSubmit}
        className={styles.form}
      >
        <h2 className={styles.title}>{t("loginForm.title")}</h2>
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
              placeholder={t("loginForm.loginPlaceholder")}
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
              id="password"
              name="password"
              type={isShowPassword ? "text" : "password"}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder={t("loginForm.passwordPlaceholder")}
              className={styles.input}
            />

            <div
              className="absolute top-1/2 right-3 translate-y-[-50%]"
              onClick={() => setIsShowPassword(!isShowPassword)}
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

        <button type="submit" className={styles.button}>
          {t("loginForm.title")}
        </button>
      </form>
      <div className={styles.questionWrapper}>
        <p className={styles.questionText}>{t("loginForm.haveAnAccount")} </p>
        <button
          type="button"
          className={styles.questionButton}
          onClick={formChanger}
        >
          {t("loginForm.signUp")}
        </button>
      </div>
    </>
  );
}
