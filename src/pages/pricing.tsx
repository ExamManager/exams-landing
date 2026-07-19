import Head from "next/head";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Heading } from "@/components/heading";
import { Text } from "@/components/text";
import { Topbar } from "@/components/topbar";
import { BackgroundBeams } from "@/components/background-beams";
import { customPlanNote, pricingPlans } from "@/config/pricing";

const PricingPage = () => {
  const title = "Pricing | ExamManager Landing";
  const description =
    "ExamManager Landing pricing — Standard $0, Basic $9.99, Professional $19.99. Portfolio demo aligned with V1.";

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
        <div className="mx-auto mt-10 w-full max-w-5xl">
          <div className="mb-12 text-center">
            <Heading className="!text-white/90" size="8">
              Prices that fit every need
            </Heading>
            <Text size="4" className="mt-3 text-white/60">
              Same plans as ExamManager V1 — illustrative for this portfolio
              demo. Signup and billing are disabled.
            </Text>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border bg-black/40 p-6 backdrop-blur ${
                  plan.popular
                    ? "border-cyan-400/60 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
                    : "border-white/10"
                }`}
              >
                {plan.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cyan-400 px-3 py-1 text-xs font-semibold text-black">
                    {plan.badge}
                  </span>
                ) : null}
                <h2 className="text-center text-2xl font-semibold text-white">
                  {plan.name}
                </h2>
                <p className="mt-4 text-center text-5xl font-bold text-white">
                  {plan.priceLabel}
                  <span className="text-base font-normal text-white/50">
                    /mo
                  </span>
                </p>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-sm text-white/70"
                    >
                      <span className="text-cyan-400">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/"
                  className={`mt-8 block rounded-md px-4 py-3 text-center text-sm font-medium ${
                    plan.popular
                      ? "bg-cyan-400 text-black"
                      : "border border-white/20 text-white hover:bg-white/5"
                  }`}
                >
                  Demo only
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/45">
            {customPlanNote}
          </p>
        </div>
        <Footer />
      </div>
      <BackgroundBeams className="absolute top-[220px] left-0 z-[10] h-full w-full select-none md:top-0 brightness-125" />
    </>
  );
};

export default PricingPage;
