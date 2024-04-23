"use client";

import { Dialog, Button, Flex, TextField, Text } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";
import { showToast } from "../../components/ui-lib";

const CustomDialog = ({ children }: PropsWithChildren) => {
  const phoneRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleSubmit = async () => {
    try {
      if (!phoneRef.current || !emailRef.current) return;
      const phone = phoneRef.current.value;
      const email = emailRef.current.value;
      if (!phone || !email)
        return showToast("请填写手机号和邮箱", undefined, 3000);
      showToast("正在提交，请稍候", undefined, 1000);
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, email }),
      });
      const data = await res.json();
      if (data.msg === "ok") {
        showToast(
          "提交成功, 请注意查收邮件，我们会尽快与您联系",
          undefined,
          2000,
        );
        setTimeout(() => {
          setOpen(false);
        }, 2000);
      } else {
        showToast(`提交失败, ${data.msg}`, undefined, 2000);
      }
    } catch (error) {
      showToast("提交失败, 请稍后再试", undefined, 2000);
    }
  };
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>{children}</Dialog.Trigger>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title>立即申请</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          请填写必要信息以便我们能与您取得联系
        </Dialog.Description>

        <Flex direction="column" gap="3">
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              手机号
            </Text>
            <TextField.Root ref={phoneRef} placeholder="输入您的手机号" />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Email
            </Text>
            <TextField.Root ref={emailRef} placeholder="输入您的邮箱" />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              取消
            </Button>
          </Dialog.Close>
          {/* <Dialog.Close> */}
          <Button color="violet" onClick={handleSubmit}>
            申请
          </Button>
          {/* </Dialog.Close> */}
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default CustomDialog;
