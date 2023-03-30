import Button from "@/components/Button";
import Head from "next/head";
import { AiOutlineArrowRight, AiOutlineMail } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-lg text-red-500">Hello</h1>
        <div className="flex flex-row gap-4 items-center">
          <Button>Hello</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button isLoading>Loading Button</Button>
          <Button leftIcon={<AiOutlineMail />} variant="link">
            Email
          </Button>
          <Button rightIcon={<AiOutlineArrowRight />}>Continue</Button>
        </div>
      </main>
    </>
  );
}
