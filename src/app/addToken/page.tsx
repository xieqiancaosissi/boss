"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Space, notification } from "antd";
import type { FieldType } from "../interfaces/interface";
import { Breadcrumb } from "antd";
import { useRouter } from "next/navigation";
import { addToken } from "../services/interfaces";
// fc3d32bb46fe9550a3b2d73af031b70ff0ddefe1208c3f8ed883726709742221216a1a5f871c59e3fd6c278093c8e3638610e0b8cad2d45e0c2b6e4768e5193e
// https://img.ref.finance/images/NEARIcon.png
export default function AddToken() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  async function onFinish(values: FieldType) {
    setLoading(true);
    const result = await addToken(values);
    if (result.code == "100000") {
      openNotificationSuccess();
    } else {
      openNotificationFail(result.message || "Submit failed !");
    }
  }
  const openNotificationSuccess = () => {
    api["success"]({
      message: `add token`,
      description: `Submit successful !`,
      placement: "topRight",
    });
    setLoading(false);
  };
  const openNotificationFail = (message: string) => {
    api["error"]({
      message: `add token`,
      description: `${message}`,
      placement: "topRight",
    });
    setLoading(false);
  };
  // const openNotificationFormFail = () => {
  //   api['error']({
  //     message: `add token`,
  //     description: `Form validation failure !`,
  //     placement: 'topRight'
  //   });
  //   setLoading(false);
  // };
  return (
    <div>
      {contextHolder}
      <Breadcrumb
        items={[
          {
            title: (
              <a
                href="/"
                onClick={() => {
                  router.push("/");
                }}
              >
                Home
              </a>
            ),
          },
          {
            title: "addToken",
          },
        ]}
        separator=">"
        style={{
          marginBottom: "36px",
        }}
      />
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Bearer token"
          name="authorization"
          rules={[{ required: true, message: "Please input authorization" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="About us"
          name="about_us"
          rules={[{ required: false, message: "Please input about us" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Project account"
          name="account"
          rules={[{ required: true, message: "Please input account" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Project address"
          name="address"
          rules={[{ required: true, message: "Please input address" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Discord"
          name="discord"
          rules={[{ required: false, message: "Please input discord" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="project icon URL"
          name="icon"
          rules={[{ required: true, message: "Please input icon" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Pool"
          name="pool"
          rules={[{ required: true, message: "Please input pool" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Token price"
          name="price"
          rules={[{ required: true, message: "Please input price" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Tg"
          name="tg"
          rules={[{ required: false, message: "Please input tg" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Ticker"
          name="ticker"
          rules={[{ required: true, message: "Please input ticker" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Token decimals"
          name="token_decimals"
          rules={[{ required: true, message: "Please input token decimals" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Token name"
          name="token_name"
          rules={[{ required: true, message: "Please input token name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Token 总量"
          name="token_supply"
          rules={[{ required: true, message: "Please input token supply" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Token Symbol"
          name="token_symbol"
          rules={[{ required: true, message: "Please input token symbol" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Video URL"
          name="video"
          rules={[{ required: false, message: "Please input video url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Website URL"
          name="website"
          rules={[{ required: false, message: "Please input website url" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="X"
          name="x"
          rules={[{ required: false, message: "Please input x" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={null}>
          <Space>
            <Button type="primary" htmlType="submit" loading={loading}>
              Submit
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}
