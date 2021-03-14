import Head from 'next/head';
import { useRouter } from 'next/router';

import Code from '../components/Code/Code';
import { Divider } from '../components/Divider/Divider';
import ExternalLink from '../components/ExternalLink/ExternalLink';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import Headline from '../components/Headline/Headline';

function Index() {
  const router = useRouter();

  const title = 'Linkdienst | Stefan Kühnel';
  const description = 'The official link shortener by Stefan Kühnel.';
  const canonical = 'https://l.stefankuehnel.com' + router.pathname;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta itemProp="name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>
      <Header></Header>
      <Divider></Divider>
      <main>
        <p>
          Below you can find some frequently asked questions about Linkdienst
          <Code content="https://l.stefankuehnel.com" spaceBefore></Code>, the official link
          shortener by
          <ExternalLink
            href="https://9bn.de/sk"
            text="Stefan
					Kühnel"
            spaceBefore></ExternalLink>
          .
        </p>
        <Headline value="How does link shortening work?"></Headline>
        <p>
          Short links consist of the main address
          <Code content="l.stefankuehnel.com" spaceBefore spaceAfter></Code> and a unique
          alphanumeric identifier. So instead of the descriptive link
          <ExternalLink
            href="https://github.com/stefankuehnel"
            text="github.com/stefankuehnel"
            spaceBefore></ExternalLink>
          , as it is visible in the address bar of the browser, the short address
          <ExternalLink
            href="https://l.stefankuehnel.com/github"
            text="l.stefankuehnel.com/github"
            spaceBefore
            spaceAfter></ExternalLink>
          can be used.
        </p>
        <Headline value="Why do you use Linkdienst?"></Headline>
        <ul>
          <li>
            With shortened links, long URLs can be shared on different platforms while still
            maintaining the maximum number of characters for a message.
          </li>
          <li>
            Linkdienst collects information such as how often a link was clicked. This is an
            important signal to determine how relevant and interesting the corresponding content is.
          </li>
          <li>
            Linkdienst protects users from harmful websites that spread malware, from phishing
            attacks and from other harmful activities, because links under
            <Code content="l.stefankuehnel.com" spaceBefore spaceAfter></Code>
            can only be created by me.
          </li>
        </ul>
        <Headline value="URL safety tips"></Headline>
        <ul>
          <li>
            Some URLs can be harmful. Please be careful when clicking links, especially ones that
            were shortened using an external link shortening service.
          </li>
          <li>
            Always check to see what website you're on before giving out your password or
            downloading any software.
          </li>
          <li>
            To check whether a page is actually operated by me, you can use the following
            <ExternalLink
              href="https://wsc.egisty.com/?lang=en"
              text="security tool"
              spaceBefore></ExternalLink>
            .
          </li>
        </ul>
      </main>
      <Divider></Divider>
      <Footer></Footer>
    </>
  );
}

export default Index;
