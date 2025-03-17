"use client";
import { Button } from "antd";
export default function Home() {
  return (
    <div>
      <Button
        onClick={() => {
          alert("hello kity");
        }}
      >
        {" "}
        click me{" "}
      </Button>
    </div>
  );
}
