import { Col, Input, Row } from "antd";
import { useFormik } from "formik";
import * as Y from "yup";
import React from "react";
import { signIn } from "src/services";
import { setLocalstorage } from "src/utils/utils";
import { ACCESS_TOKEN } from "src/constant";
import { useDispatch } from "react-redux";
import { loginSuccess } from "src/redux/userSlice";

const validationSchema = Y.object({
  email: Y.string().email().required(),
  password: Y.string().required(),
});

export default function Login() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      // console.log(values);
      signIn(values).then((resp) => {
        // console.log(resp);

        //* Lưu accessToken vào localstorage: lúc nào cần sử dụng cho api private thì mình đính kèm nó vào
        setLocalstorage(ACCESS_TOKEN, resp.accessToken);

        dispatch(
          loginSuccess({
            email: resp.email,
          }),
        );
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="px-16 py-16">
      <Row>
        <Col span={24}>
          <label htmlFor="email">Email</label>
          <Input id="email" {...formik.getFieldProps("email")}></Input>
        </Col>

        <Col span={24}>
          <label htmlFor="password">Pass word</label>
          <Input id="password" {...formik.getFieldProps("password")}></Input>
        </Col>
      </Row>

      <button
        type="submit"
        className="bg-lime-950 text-[#fff] px-4 py-2 rounded-2xl mt-4"
      >
        Login
      </button>
    </form>
  );
}
