import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/button";
import { Code } from "../components/code";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { IconArrowRight } from "../components/icons";
import { Text } from "../components/text";
import { Topbar } from "../components/topbar";
import { BackgroundBeams } from "@/components/background-beams";
import { Input } from "@/components/input";
import React from 'react';
import { motion } from 'framer-motion';
import { toast } from "sonner"


const Web = () => {
  const title = "ExamManager";
  const description =
    "Manage Exams more efficiently with the next generation of Exam managing";

  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  async function handleEmailSignup(email: string) {
  const promise = () => new Promise(async (resolve) => {
    setLoading(true);
    console.log('start')
    try {
      // Send email to newsletter
      // use api
      const response = await fetch('/api/resend', {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      // response send success=true or false
      const data = await response.json()
      if (!data.success) {
        throw new Error('Failed to send email')
      }

      resolve(true)
      console.log('done')
    } catch (error) {
      console.log(error);
      resolve(false);
    }
  });

  toast.promise(promise, {
    loading: 'Loading...',
    success: () => {
      setLoading(false);
      setDone(true);
      return `You have been added to the newsletter! 🎉`;
    },
    error: 'Error',
  });
}

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
      </Head>
      <div className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
          <div className="max-w-[725px] text-center">
            <div className="flex items-center justify-center mb-8">
              <Image
                alt="React Email Logo"
                height="120"
                src="/static/logo.png"
                width="120"
              />
            </div>
            <Heading
              className="before:bg-shine -mt-2 relative mb-8 !text-white/80 before:absolute before:left-0 before:top-0 before:w-full before:animate-[shine_2s_ease-in-out] before:bg-[length:200%] before:bg-clip-text before:text-transparent before:content-['The_next_generation_of_Exam_managing'] "
              size="10"
            >
              The next generation of Exam managing
            </Heading>
            <div className="sm:px-20">
              <Text size="5">
              Empowering Educators with Simplified Exam Coordination
              </Text>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: done ? 0 : 1, scale: done ? 0.9 : 1, transform: done ? "translateY(-50px)" : "translateY(0)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="mt-10 flex items-center justify-center gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleEmailSignup(email);
            }}
          >
            {/* Make email signup to newsletter */}
            <Input id="email" placeholder="support@examtimer.tech" type="email" className="w-80" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button
              className="bg-gradient-to-br w-40 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              disabled={loading}
            >
              {"Sign up ->"}
              <BottomGradient />
            </button>
          </motion.form>
        </div>
        <Footer />
      </div>
      {/* <Image
        alt=""
        className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0 brightness-125"
        fill
        priority
        src="/static/bg.png"
        style={{ position: "absolute" }}
      /> */}
      <BackgroundBeams className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0 brightness-125" />
    </>
  );
};

export default Web;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};