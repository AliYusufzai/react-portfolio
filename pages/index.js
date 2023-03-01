import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";

export default function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("Ali Raza.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Ali Raza.pdf";
        alink.click();
      });
    });
  };

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                  onClick={onButtonClick}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Ali Raza Khan
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">JavaScript Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl">
              Full Stack MERN Developer. Im an undergraduate majoring in
              Computer Science From Virtual University of Pakistan. Proactive
              problem solver, Having good knowledge of JavaScript, ReactJS,
              NodeJS, ExpressJS, MongoDB, PostgreSQL
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16">
            <a href="https://www.linkedin.com/in/aleeraza03/">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/AliYusufzai">
              <AiFillGithub />{" "}
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-2">Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <a
                href="https://react-apptodo.netlify.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={web1}
                  alt={"React ToDO"}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://react-app-movieland.netlify.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={web2}
                  alt={"React movie app"}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a
                href="https://react-deliciousss.netlify.app/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={web3}
                  alt={"React Recipe app"}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt={"React Recipe app"}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
