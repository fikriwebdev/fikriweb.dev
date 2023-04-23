import Button from "@/components/Button";
import Tooltip from "@/components/Tooltip";
import Layout from "@/layout";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Tooltip label="This is tooltip!">
          <Button>Hover</Button>
        </Tooltip>
      </Layout>
    </>
  );
}
