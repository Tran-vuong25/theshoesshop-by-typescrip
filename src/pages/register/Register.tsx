import { Col, Input, Radio, RadioChangeEvent, Row } from "antd";
import Password from "antd/es/input/Password";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "src/services";
import * as Y from "yup";

/**
 * *2 cách sử dụng formik
 * - 1. Sử dụng các component có sẵn của formik: thông qua context Provider để chia sẽ dữ liệu giữa các component. <Formik/>
 * - 2. Chỉ sử dụng hook của nó. useFormik
 *
 */
// -------------------Validate thủ công------------------
// const validate = (formik.values) => {
//   // console.log({ values });

//   // *trim() loại bỏ khoảng trống đầu và cuối của chuỗi, giữa thì ko bỏ
//   // console.log({ length: values.email.trim().length });

//   //* Cho biết errors có kiểu giữ liệu của pram values
//   type A = typeof values; // typeof lấy type của giá trị values
//   type B = keyof A; // keyof: lấy property của kiểu dữ liệu
//   const errors: Record<B, string> = {};

//   if (values.email.trim().length === 0) {
//     errors.email = "Email không đươc bỏ trống";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Địa chỉ email sai định dạng";
//   }

//   if (values.passWord.trim().length === 0) {
//     errors.passWord = "Pass word không đươc bỏ trống";
//   } else if (!(values.passWord.length >= 7)) {
//     errors.passWord = "Pass word không được ít hơn 7 ký tự";
//   }

//   if (values.confirmPassword.trim().length === 0) {
//     errors.confirmPassword = "Confirm Password không đươc bỏ trống";
//   } else if (values.confirmPassword !== values.passWord) {
//     errors.confirmPassword = "Sai pass word";
//   }

//   if (values.name.trim().length === 0) {
//     errors.name = "Name không đươc bỏ trống";
//   } else if (!(values.name.length <= 30 && values.name.length >= 10)) {
//     errors.name = "Sai định dạng của name";
//   }

//   if (values.phone.trim().length === 0) {
//     errors.phone = "Phone không đươc bỏ trống";
//   } else if (!(values.phone.length <= 11 && values.phone.length >= 10)) {
//     errors.phone = "Sai định dạng của phone";
//   }

//   if (!(values.gender === false && values.gender === true)) {
//     errors.gender = "Gender không đươc bỏ trống";
//   }

//   return errors;
// };
// -------------------Validate thủ công------------------

//* Validate với Schema (Yup)
const validationSchema = Y.object({
  email: Y.string().email("Email không hợp lệ").required(),
  name: Y.string()
    .min(10, "Không được ngắn hơn 10 ký tự")
    .max(30, "Không được dài hơn 30 ký tự")
    .required(),
  passWord: Y.string()
    .min(6, "PassWord tối thiểu 6 ký tự")
    .max(50, "PassWord tối đa 50 ký tự")
    .required(),
  confirmPassword: Y.string()
    .min(6, "PassWord tối thiểu 6 ký tự")
    .max(50, "PassWord tối đa 50 ký tự")
    .required()
    .oneOf([Y.ref("passWord"), null]),
  phone: Y.string()
    .required()
    .min(10, "Phone tối thiểu 10 số")
    .max(11, "Phone tối thiểu 11 số nếu bắt đầu là 84"),
});

export default function Register() {
  const navigate = useNavigate();

  // -- Start Form --
  const formik = useFormik({
    initialValues: {
      email: "",
      passWord: "",
      confirmPassword: "",
      name: "",
      phone: "",
      gender: true,
    },

    // !validate thủ công
    // validate,

    // *validate với yup github
    validationSchema,

    onSubmit: (values) => {
      // ! Check errors === undefined hay là một object rỗng thì mới cho phép submit

      // console.log(values)
      // alert(JSON.stringify(values, null, 2));

      // *convert
      const payload = {
        email: values.email,
        password: values.passWord,
        name: values.name,
        phone: values.phone,
        gender: values.gender,
      };

      signUp(payload).then((resp) => {
        // console.log(resp);

        navigate('/login')
      });
    },
  });
  // -- End Form --

  // console.log({ errors: formik.errors });
  // console.log({ getFileProps: formik.getFieldProps() });

  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="px-16 py-16">
      <Row gutter={16}>
        <Col span={12}>
          <label htmlFor="email">Email</label>
          <Input
            id="email"
            // name="email"
            // value={formik.values.email}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}

            {...formik.getFieldProps("email")}
          />
          {/* touched: check xem đã click vào ô đó chưa && và có lỗi errors ko mới thông báo lỗi <p/> */}
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-700 text-xl">{formik.errors.email}</p>
          )}

          <label htmlFor="passWord">Pass word</label>
          <Input
            id="passWord"
            // name="passWord"
            // value={formik.values.passWord}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("passWord")}
          />
          {formik.touched.passWord && formik.errors.passWord && (
            <p className="text-red-700 text-xl">{formik.errors.passWord}</p>
          )}

          <label htmlFor="confirmPassword">ConfirmPassword</label>
          <Input
            id="confirmPassword"
            // name="confirmPassword"
            // value={formik.values.confirmPassword}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("confirmPassword")}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-700 text-xl">
              {formik.errors.confirmPassword}
            </p>
          )}
        </Col>

        <Col span={12}>
          <label htmlFor="name">Name</label>
          <Input
            id="name"
            // name="name"
            // value={formik.values.name}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-700 text-xl">{formik.errors.name}</p>
          )}

          <label htmlFor="phone">Phone</label>
          <Input
            id="phone"
            // name="phone"
            // value={formik.values.phone}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-700 text-xl">{formik.errors.phone}</p>
          )}

          <label htmlFor="gender">Gender</label>
          <Radio.Group id="gender" {...formik.getFieldProps("gender")}>
            <Radio value={true}>Male</Radio>
            <Radio value={false}>Female</Radio>
          </Radio.Group>

          <div>
            <button className="rounded-full bg-[#6200EE] text-[#fff] px-24 py-10">
              Register
            </button>
          </div>
        </Col>
      </Row>
    </form>
  );
}
