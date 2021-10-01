import React from "react";

import Head from "next/head";
import Router from "next/router";

import BaseLayout from "../layouts/base";

import { Intro, Header, SocialIcons, Projects, Tech, About, Footer } from "../components";

export default function Home() {
  React.useEffect(() => {
    Router.push("/");
  }, []);

  return (
    <BaseLayout>
      <Head>
        <title>Francisco Seco</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <SocialIcons />
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <About />
      <Footer />
    </BaseLayout>
  );
}
