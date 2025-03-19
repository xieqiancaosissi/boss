import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, List } from "antd";
import { ManOutlined } from "@ant-design/icons";

export default function InterfaceList() {
  const router = useRouter();
  const [list] = useState([
    {
      title: "add/project",
      description: "导入Token",
      url: "/addToken",
    },
    {
      title: "promotion",
      description: "设置推荐",
      url: "/promotion",
    },
    {
      title: "blacklist",
      description: "设置token黑名单",
      url: "/blacklist",
    },
  ]);
  function jump(url: string) {
    router.push(url);
  }
  return (
    <div className="px-10">
      <List
        grid={{ gutter: 20, column: 4 }}
        dataSource={list}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={
                <div className="flex items-center justify-between">
                  {item.title}
                  <ManOutlined className="cursor-pointer" />
                </div>
              }
              onClick={() => jump(item.url)}
            >
              {item.description}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}
