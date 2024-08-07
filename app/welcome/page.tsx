import "@radix-ui/themes/styles.css";
import "./custom_globals.scss";
import {
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Separator,
  Strong,
  Text,
} from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import styles from "./page.module.scss";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import CustomDialog from "./_component/CustomDialog";

const Logo = () => (
  <Image
    src="/favicon-32x32.jpg"
    alt="Logo"
    width="32"
    height="32"
    style={{ marginRight: "8px" }}
  />
);

const page = () => {
  const Header = () => (
    <Flex
      className={styles.header}
      align="center"
      justify="between"
      px={{ initial: "3", md: "6" }}
      style={{
        height: 70,
        width: "100%",
      }}
    >
      <Flex justify="center" align="center" gap="2">
        <Logo />
        <Text size="4" weight="bold">
          LawChat 智能助手
        </Text>
      </Flex>
      <CustomDialog>
        <Text size="2" weight="bold" color="violet">
          申请试用
        </Text>
      </CustomDialog>
    </Flex>
  );

  const Content = () => (
    <Flex direction="column" gap="5">
      <Section
        pt={{ initial: "9", md: "0" }}
        size={{ initial: "2", md: "3" }}
        style={{ borderBottom: "1px solid var(--violet-6)" }}
      >
        <Flex
          p="5"
          mt="6"
          style={{
            justifyContent: "space-around",
          }}
          className={styles.flexibleSection}
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            gap="4"
            mb={{ initial: "4", sm: "8" }}
            style={{ marginBottom: 50 }}
          >
            <Text size={{ initial: "5", md: "6" }} weight="bold" mb="4">
              使用AI, 打造属于你自己的智能助手
            </Text>
            <Text size="4">人人都想八面玲珑</Text>
            <Text size="4">则需要三头六臂的AI助手</Text>
            <Text size="4">使用LawChat接入AI时代</Text>
            <CustomDialog>
              <Button
                variant="solid"
                color="violet"
                style={{ width: "150px" }}
                mt="4"
                radius="large"
              >
                申请试用
              </Button>
            </CustomDialog>
          </Flex>
          <Image
            src="/first.jpg"
            alt="LawChat Logo"
            width={600}
            height={342}
            style={{
              width: "90vw",
              height: "51.4vw",
              maxWidth: 600,
              maxHeight: 342,
            }}
          />
        </Flex>
      </Section>
      <Section size={{ initial: "2", md: "3" }}>
        <Flex justify="center" align="center" gap="4" direction="column">
          <Heading
            size="6"
            mb="6"
            style={{
              paddingBottom: 24,
            }}
          >
            你可以用LawChat做什么
          </Heading>
          {/* <Flex justify="between" px="9" py="5"> */}
          <Flex
            className={styles.flexibleSection}
            py="5"
            px={{ initial: "4", md: "5", lg: "9" }}
            justify="center"
            gap={{ initial: "1", md: "9" }}
          >
            <Flex
              direction="column"
              align="start"
              justify="center"
              gap="4"
              className={styles.flexibleSectionContent}
              style={{
                maxWidth: "420px",
                width: "100%",
              }}
              mb={{ initial: "8", sm: "0" }}
            >
              <Text
                size={{ initial: "4", md: "5" }}
                weight={{ initial: "medium", md: "bold" }}
                mb="4"
              >
                案例匹配，判例推演
              </Text>
              <Text
                size={{ initial: "3", md: "3" }}
                weight={{ initial: "light", md: "regular" }}
              >
                根据描述的按键基本情况，在海量的案例库中匹配类似案件，找到判决依据和判决思维。
              </Text>
              <Text
                size={{ initial: "3", md: "3" }}
                weight={{ initial: "light", md: "regular" }}
              >
                根据案件情况结合法律条文和判例，推演本案件可能的裁判方向和适用的法律意见。
              </Text>
            </Flex>
            <video
              autoPlay
              muted
              loop
              src="/second.mp4"
              width={600}
              height={342}
              style={{
                width: "90vw",
                height: "51.4vw",
                maxWidth: 600,
                maxHeight: 342,
              }}
            />
          </Flex>
        </Flex>
      </Section>
      <Section size={{ initial: "2", md: "3" }}>
        <Flex justify="center" align="center" direction="column">
          <Flex
            px={{ initial: "4", md: "5", lg: "9" }}
            py="5"
            justify="center"
            gap={{ initial: "1", md: "9" }}
            className={`${styles.flexibleSection} ${styles.reverseSection}`}
            // style={{
            //   display: "flex",
            //   flexDirection: "column-reverse",
            // }}
          >
            <video
              autoPlay
              muted
              loop
              src="/third.mp4"
              width={600}
              height={342}
              style={{
                width: "90vw",
                height: "51.4vw",
                maxWidth: 600,
                maxHeight: 342,
              }}
            />
            <Flex
              className={styles.reverseSectionContent}
              direction="column"
              align="start"
              justify="center"
              gap="4"
              style={{
                maxWidth: "420px",
              }}
              mb={{ initial: "8", sm: "0" }}
            >
              <Text
                size={{ initial: "4", md: "5" }}
                weight={{ initial: "medium", md: "bold" }}
                mb="4"
              >
                自动撰写，自定义合同模板
              </Text>
              <Text
                size={{ initial: "3", md: "3" }}
                weight={{ initial: "light", md: "regular" }}
              >
                给出撰写命令，机器人将开始级自动撰写，如果还需要调用模板，加入合同的模板名称则开始指定撰写格式
              </Text>
              <Text
                size={{ initial: "3", md: "3" }}
                weight={{ initial: "light", md: "regular" }}
              >
                不要你觉得，我要我觉得，LawChat实现完全自定义的文档模板合同模板，说出文档名称，实现多年积累一秒调用。
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Section>
      <Section size={{ initial: "2", md: "3" }}>
        <Flex justify="center" align="center" gap="4" direction="column">
          <Flex
            className={styles.flexibleSection}
            justify="center"
            px={{ initial: "4", md: "5", lg: "9" }}
            py="5"
            gap={{ initial: "1", md: "9" }}
          >
            <Flex
              direction="column"
              align="start"
              justify="center"
              gap="4"
              className={styles.flexibleSectionContent}
              style={{
                maxWidth: "420px",
              }}
              mb={{ initial: "8", sm: "0" }}
            >
              <Text
                size={{ initial: "4", md: "5" }}
                weight={{ initial: "medium", md: "bold" }}
                mb="4"
              >
                PDF、WORD、公众号总结
              </Text>
              <Text
                size={{ initial: "3", md: "3" }}
                weight={{ initial: "light", md: "regular" }}
              >
                文章太长不想看，可用机器人自动总结功能，可总结PDF、Word、Txt等多种类型。抓住文中重点，秒看万字长文。
              </Text>
            </Flex>
            <video
              src="/four.mp4"
              autoPlay
              muted
              loop
              width={547}
              height={480}
              style={{
                width: "90vw",
                height: "78.9vw",
                maxWidth: 547,
                maxHeight: 480,
              }}
            />
          </Flex>
        </Flex>
      </Section>
      <Section style={{ borderTop: "1px solid var(--violet-6)" }}>
        <Flex justify="center" align="center" gap="4" direction="column">
          <Heading size={{ initial: "4", md: "6" }} mb="8">
            对话LawChat助手，让知识成为你的翅膀
          </Heading>
          <Flex direction="row" gap="8">
            <Grid
              columns={{ initial: "1", md: "3" }}
              gap={{ initial: "4", md: "8" }}
            >
              <PriceItemFree />
              <PriceItemSmall />
              <PriceItemEnterprise />
            </Grid>
          </Flex>
        </Flex>
      </Section>
    </Flex>
  );

  const PriceItemFree = () => (
    <Flex
      className={styles.PriceItem}
      direction="column"
      align="start"
      justify="center"
      gap="6"
      p="5"
      style={{
        width: 300,
        border: "1px solid var(--violet-3)",
        borderRadius: 10,
        boxShadow: "var(--shadow-3)",
      }}
    >
      <Heading size="4" mt="5">
        个人助手版
      </Heading>
      <Text size="2">
        适合尝鲜体验和偶尔使用的用户。可以建立知识库，使用AI问答和写作、以及使用量消耗比较小的AI任务
      </Text>
      <Text size="2">
        ￥：
        <Text size="6" mx="2" weight="bold" color="bronze">
          0
        </Text>
        /月
      </Text>
      <Separator size="4" />
      <Flex direction="column" align="start" gap="1">
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          账号数量
          <Text size="4" weight="bold" color="bronze" mx="2">
            1
          </Text>
          个
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          微信机器人
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          网页机器人
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          法条匹配
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          案件分析
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          判例推演
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          文书自动撰写
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          合同模板库
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          公众号文章总结
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          word文档总结
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          网页内容总结
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          PDF文档总结
        </Text>
      </Flex>
      <CustomDialog>
        <Button
          color="violet"
          radius="large"
          style={{ width: "90%" }}
          size="2"
          variant="soft"
        >
          立即申请
        </Button>
      </CustomDialog>
    </Flex>
  );

  const PriceItemSmall = () => (
    <Flex
      className={`${styles.PriceItem} ${styles.bronze}`}
      direction="column"
      align="start"
      justify="center"
      gap="6"
      p="5"
      style={{
        width: 300,
        border: "1px solid var(--bronze-3)",
        borderRadius: 10,
        boxShadow: "var(--shadow-3)",
      }}
    >
      <Heading size="4" mt="5">
        小团队助手
      </Heading>
      <Text size="2">
        适合小团队用户使用。在个人助手版的基础上，增加合同模板库和公众号文章总结功能
      </Text>
      <Text size="2">
        ￥：
        <Text size="6" mx="2" weight="bold" color="bronze">
          59
        </Text>
        /月
      </Text>
      <Separator size="4" />
      <Flex direction="column" align="start" gap="1">
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          账号数量
          <Text size="4" weight="bold" color="bronze" mx="2">
            5
          </Text>
          个
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          微信机器人
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          网页机器人
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          法条匹配
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          案件分析
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          判例推演
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          文书自动撰写
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          合同模板库
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          公众号文章总结
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          word文档总结
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          网页内容总结
        </Text>
        <Text size="2">
          <Cross2Icon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="gray"
          />
          PDF文档总结
        </Text>
      </Flex>
      <CustomDialog>
        <Button
          color="bronze"
          radius="large"
          style={{ width: "90%" }}
          size="2"
          variant="soft"
        >
          立即申请
        </Button>
      </CustomDialog>
    </Flex>
  );

  const PriceItemEnterprise = () => (
    <Flex
      className={`${styles.PriceItem} ${styles.blue}`}
      direction="column"
      align="start"
      justify="center"
      gap="6"
      p="5"
      style={{
        width: 300,
        border: "1px solid var(--bronze-3)",
        borderRadius: 10,
        boxShadow: "var(--shadow-3)",
      }}
    >
      <Heading size="4" mt="5">
        企业级团队版
      </Heading>
      <Text size="2">
        适合企业团队用户。可以建立知识库，使用word文档总结、网页内容总结、PDF文档总结
      </Text>
      <Text size="2">
        ￥：
        <Text size="6" mx="2" weight="bold" color="bronze">
          139
        </Text>
        /月
      </Text>
      <Separator size="4" />
      <Flex direction="column" align="start" gap="1">
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          账号数量
          <Text size="4" weight="bold" color="bronze" mx="2">
            15
          </Text>
          个
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          微信机器人
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          网页机器人
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          法条匹配
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          案件分析
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          判例推演
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          文书自动撰写
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          合同模板库
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          公众号文章总结
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          word文档总结
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          网页内容总结
        </Text>
        <Text size="2">
          <CheckIcon
            width={20}
            height={20}
            style={{ transform: "translateY(5px)", marginRight: "5px" }}
            color="green"
          />
          PDF文档总结
        </Text>
      </Flex>
      <CustomDialog>
        <Button
          color="blue"
          radius="large"
          style={{ width: "90%" }}
          size="2"
          variant="soft"
        >
          立即申请
        </Button>
      </CustomDialog>
    </Flex>
  );

  const Footer = () => (
    <Flex
      direction="column"
      justify="center"
      align="center"
      py="4"
      gap="2"
      style={{ borderTop: "1px solid var(--violet-6)" }}
    >
      <Text size="3">Copyright 2024</Text>
      <Text size="1" color="gray">
        ICP备案信息
      </Text>
    </Flex>
  );
  return (
    <Container
      className={styles.welcome}
      size="4"
      py="0"
      px={{ sm: "3", md: "5", lg: "9" }}
      style={{
        minHeight: "100vh",
        height: "100%",
        overflow: "scroll",
        width: "100vw",
      }}
    >
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};

export default page;
