import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Heading } from "../components/heading";
import { Text } from "../components/text";
import { Topbar } from "../components/topbar";
import { BackgroundBeams } from "@/components/background-beams";
import { Input } from "@/components/input";
import { AuthDisabledNotice } from "@/components/auth-disabled-notice";
import { pricingPlans } from "@/config/pricing";

const features = [
  {
    title: "Classroom timer",
    description:
      "A calm, readable countdown for the whole room — built for invigilators.",
  },
  {
    title: "Multi-exam sessions",
    description:
      "Run several papers in parallel when cohorts and rooms overlap.",
  },
  {
    title: "Timetables & seating",
    description:
      "Plan exam weeks and room layouts without juggling spreadsheets.",
  },
  {
    title: "School-ready plans",
    description:
      "Grow from personal use to school-scale planning with clear tiers.",
  },
];

const Web = () => {
  const title = "ExamManager Landing";
  const description =
    "Deprecated waitlist and marketing landing — an early ExamManager portfolio demo.";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
      </Head>
      <div className="relative z-20 mx-auto flex min-h-[calc(100dvh-3.25rem)] max-w-7xl flex-col px-4 pb-16">
        <Topbar />
        <div className="relative mx-auto flex max-w-3xl flex-col justify-center pt-8">
          <div className="max-w-[725px] text-center">
            <div className="mb-8 flex items-center justify-center">
              <Image
                alt="ExamManager logo"
                height="120"
                src="/static/logo-transparent.png"
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

          <div className="mt-10 flex flex-col items-center justify-center gap-3">
            <AuthDisabledNotice />
            <fieldset
              disabled
              className="flex items-center justify-center gap-4"
            >
              <form
                className="flex items-center justify-center gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <Input
                  id="email"
                  placeholder="Signup unavailable"
                  type="email"
                  className="w-80"
                  value=""
                  readOnly
                  aria-label="Email (signup unavailable)"
                />
                <button
                  className="bg-gradient-to-br relative block h-10 w-40 rounded-md font-medium text-white opacity-60 group/btn from-black to-neutral-600 shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                  type="submit"
                  disabled
                >
                  Unavailable
                  <BottomGradient />
                </button>
              </form>
            </fieldset>
          </div>
        </div>

        <section className="mx-auto mt-24 w-full max-w-5xl">
          <div className="mb-10 text-center">
            <Heading className="!text-white/85" size="7">
              Built for exam day
            </Heading>
            <Text size="3" className="mt-3 text-white/55">
              The same product story as ExamManager V1 — timer, planning, and
              school workflows.
            </Text>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-white/10 bg-black/35 p-6 backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 w-full max-w-5xl">
          <div className="mb-10 text-center">
            <Heading className="!text-white/85" size="7">
              Simple pricing
            </Heading>
            <Text size="3" className="mt-3 text-white/55">
              Standard, Basic, and Professional — aligned across every
              ExamManager showcase.
            </Text>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border bg-black/40 p-5 text-center backdrop-blur ${
                  plan.popular
                    ? "border-cyan-400/50"
                    : "border-white/10"
                }`}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-3 py-0.5 text-xs font-semibold text-black">
                    {plan.badge}
                  </span>
                ) : null}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <p className="mt-3 text-4xl font-bold text-white">
                  {plan.priceLabel}
                  <span className="text-sm font-normal text-white/45">/mo</span>
                </p>
                <p className="mt-3 text-sm text-white/55">{plan.features[0]}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/pricing"
              className="rounded-md border border-white/20 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/5"
            >
              See full pricing
            </Link>
          </div>
        </section>

        <section className="mx-auto mt-24 mb-8 w-full max-w-3xl rounded-2xl border border-white/10 bg-black/40 px-6 py-10 text-center backdrop-blur">
          <Heading className="!text-white/90" size="6">
            Portfolio demo
          </Heading>
          <Text size="3" className="mt-3 text-white/55">
            Signup is unavailable. Explore the public ExamManager repositories
            on GitHub instead.
          </Text>
          <div className="mt-6">
            <Link
              href="https://github.com/ExamManager"
              className="inline-flex rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
              target="_blank"
              rel="noreferrer"
            >
              GitHub org
            </Link>
          </div>
        </section>

        <Footer />
      </div>
      <BackgroundBeams className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0 brightness-125" />
    </>
  );
};

export default Web;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500" />
      <span className="group-hover/btn:opacity-100 absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500" />
    </>
  );
};
