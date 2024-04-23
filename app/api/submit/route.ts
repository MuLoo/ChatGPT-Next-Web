import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    // console.log(body);
    const { email } = body;
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_SENDER,
      to: body.email,
      subject: "感谢您申请试用Law-Chat",
      text: `
      尊敬的用户, 您好：
      感谢您申请试用Law-Chat, 我们将尽快审核您的申请。
      请耐心等待，我们将在24小时内给您回复。
      如果有任何问题，请联系我们。
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
