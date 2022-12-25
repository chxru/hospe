import axios from 'axios';
import { createTestAccount, createTransport, Transporter } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const DISCORD_HOOK = process.env.DISCORD_HOOK;
const enableDiscordHook = !!DISCORD_HOOK;

let transporter: Transporter<SMTPTransport.SentMessageInfo>;

export const InitiateEmailService = async () => {
  const testAccount = await createTestAccount();

  console.log('testAccount', testAccount);

  transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  try {
    if (!enableDiscordHook) return;

    await axios.post(DISCORD_HOOK, {
      content:
        'Credentials for email service: \r user: ' +
        testAccount.user +
        '\r pass: ' +
        testAccount.pass +
        '\r',
    });
  } catch (error) {
    console.error('discord webhook error', error);
  }
};

type EmailParams = Omit<SMTPTransport.Options, 'from'>;

export const SendEmail = async (params: EmailParams) => {
  await transporter.sendMail({
    ...params,
    from: 'noreply@hospe.com',
  });
};
