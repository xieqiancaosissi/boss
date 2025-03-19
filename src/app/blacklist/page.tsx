"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Space, notification } from "antd";
import type { FieldTypeBlacklist } from "../interfaces/interface";
import { Breadcrumb } from "antd";
import { useRouter } from "next/navigation";
import { setBlackList } from "../services/interfaces";

export default function Blacklist() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const onFinishFailed: FormProps<FieldTypeBlacklist>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  async function onFinish(values: FieldTypeBlacklist) {
    setLoading(true);
    const result = await setBlackList(values);
    if (result.code == 100000) {
      openNotificationSuccess(result.message);
    } else {
      openNotificationFail(result.message || "Submit failed !");
    }
  }
  const openNotificationSuccess = (message?: string) => {
    api["success"]({
      message: `blacklist`,
      description: `${message || "Submit successful !"}`,
      placement: "topRight",
    });
    setLoading(false);
  };
  const openNotificationFail = (message: string) => {
    api["error"]({
      message: `blacklist`,
      description: `${message}`,
      placement: "topRight",
    });
    setLoading(false);
  };
  // const openNotificationFormFail = () => {
  //   api['error']({
  //     message: `blacklist`,
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
            title: "blackList",
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
        <Form.Item<FieldTypeBlacklist>
          label="Bearer token"
          name="authorization"
          rules={[{ required: true, message: "Please input authorization" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldTypeBlacklist>
          label="Address"
          name="address"
          rules={[{ required: true, message: "Please input address" }]}
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
