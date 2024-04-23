import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

// 邮箱校验的正则表达式
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
// 手机号校验的正则表达式
const phoneReg = /^1[3456789]\d{9}$/;

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_SENDER,
    pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    if (!body.email || !emailReg.test(body.email)) {
      return NextResponse.json({ msg: "非法邮件格式" }, { status: 400 });
    }
    if (!body.phone || !phoneReg.test(body.phone)) {
      return NextResponse.json({ msg: "非法手机号码格式" }, { status: 400 });
    }
    const { email, phone, company } = body;
    // 将信息存储在本地文件csv中
    const now = new Date();
    const fileName = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getUTCDate()}.csv`;

    const dirPath = path.join(process.cwd(), "public", "csv");
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true }); // 创建目录，如果目录不存在
    }
    const filePath = path.join(dirPath, fileName);
    const ws = fs.createWriteStream(filePath, { flags: "a" });
    ws.write("\ufeff", "utf8");
    ws.once("open", function () {
      console.log("CSV文件开始写入");
    });
    ws.once("close", () => console.log("CSV文件写入完成"));
    ws.write(`单位:${company}, 邮箱:${email}, 手机:${phone}\r\n`);
    ws.end();
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
      to: body.email,
      subject: "感谢您申请试用Law-Chat",
      text: `
      尊敬的用户, 您好：

      感谢您申请试用LawChat, 我们将尽快回复您的申请。
      请耐心等待，我们将在24小时内给您回复。
      如果有任何问题，请联系我们申请页面下方的微信。
      谢谢！


      Law-Chat团队
    `,
    };
    const info = await transporter.sendMail(mailOptions);
    return NextResponse.json({ msg: "ok" }, { status: 200 });
  } catch (error) {
    console.log("发送失败：", error);
    return NextResponse.json({ msg: "发送失败" }, { status: 500 });
  }
}
