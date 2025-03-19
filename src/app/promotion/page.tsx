"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Space, notification } from "antd";
import type { FieldTypePromotion } from "../interfaces/interface";
import { Breadcrumb } from "antd";
import { useRouter } from "next/navigation";
import { doPromotion } from "../services/interfaces";

export default function Promotion() {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const [api, contextHolder] = notification.useNotification();
  const onFinishFailed: FormProps<FieldTypePromotion>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  async function onFinish(values: FieldTypePromotion) {
    setLoading(true);
    const result = await doPromotion(values);
    if (result.code == "0") {
      openNotificationSuccess();
    } else {
      openNotificationFail(result.message || "Submit failed !");
    }
  }
  const openNotificationSuccess = () => {
    api["success"]({
      message: `promotion`,
      description: `Submit successful !`,
      placement: "topRight",
    });
    setLoading(false);
  };
  const openNotificationFail = (message: string) => {
    api["error"]({
      message: `promotion`,
      description: `${message}`,
      placement: "topRight",
    });
    setLoading(false);
  };
  // const openNotificationFormFail = () => {
  //   api['error']({
  //     message: `promotion`,
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
            title: "promotion",
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
        <Form.Item<FieldTypePromotion>
          label="Bearer token"
          name="authorization"
          rules={[{ required: true, message: "Please input authorization" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldTypePromotion>
          label="End time"
          name="end_time"
          rules={[{ required: false, message: "Please input end time" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldTypePromotion>
          label="Promotion key"
          name="promotion_key"
          rules={[{ required: false, message: "Please input promotion key" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldTypePromotion>
          label="Promotion type"
          name="promotion_type"
          rules={[{ required: false, message: "Please input promotion type" }]}
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
