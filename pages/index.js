import Head from "next/head";
import { JobOpening } from "@/components/jobOpening";
import { InfoBox } from "@/components/infoBox";

export default function Index() {
  return (
    <>
      <Head>
        <title>Agro Trade</title>
      </Head>
      <main>
        <InfoBox>
          <ul>
            <li>watermelom</li>
            <li>orange</li>
            <li>gauva</li>
          </ul>
        </InfoBox>

        <JobOpening
          title="Next JS Hybrid Work"
          location='Nairobi'/>
        
        <JobOpening
          title="Next JS Hybrid Work"
          location='Nairobi' />
      </main>
    </>
  )
}