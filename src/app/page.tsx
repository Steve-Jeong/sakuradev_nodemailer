import { Button } from "@/components/ui/button";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

export default function Home() {
  const send = async () => {
    "use server";
    await sendMail({
      to: ["jst0930@gmail.com", "steve.john.cusack@gmail.com"],
      subject: "nodemailer Test Mail",
      body: `<h1>Second Hello Nodemailer!</h1>`,
    });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <form>
        <Button formAction={send}>test</Button>
      </form>
    </main>
  );
}