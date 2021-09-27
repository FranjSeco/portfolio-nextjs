import React from 'react';

import Head from "next/head";

import BaseLayout from "../layouts/base";

import { Intro, Header, SocialIcons, Projects } from "../components";

export default function Home() {
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
      <Projects />

    </BaseLayout>
  );
}
