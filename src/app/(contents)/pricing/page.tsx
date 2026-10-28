import { Pricing } from "@/types"

import PageHeader from "@/components/page-header"

import { RegistrationPricing } from "../../../../contents/pricing"

export default function Page() {
  return (
    <>
      <PageHeader title="Registration Pricing" crumbs={["For Author"]} />
      <section className="container mt-8 md:mt-16">
        <p className="text-lg md:text-xl">
          Refer the pricing list below for conference fee.
        </p>
        <div className="mt-8 md:mt-10">
          {RegistrationPricing.map((pricing: Pricing, i) => (
            <div key={i}>
              <h2 className="mt-10 text-xl font-semibold md:mt-14 md:text-2xl">
                {pricing.type}
              </h2>
              <ul className="flex flex-col divide-y md:mt-4">
                {pricing.listPricing.map((pricingItem, j) => (
                  <li
                    key={j}
                    className="grid items-center gap-2 py-4 md:grid-cols-6"
                  >
                    <p className="col-span-2 text-lg font-medium">
                      {pricingItem.category}
                    </p>
                    {pricingItem.prices.map((price, k) => (
                      <div key={k} className="flex flex-col">
                        <p className="text-xl font-medium text-slate-700 md:text-2xl">
                          {price.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-slate-400 italic md:text-sm">
                          {price.subCategory}
                        </p>
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mt-8 md:mt-16">
        <div className="rounded-lg bg-slate-200/70 p-10 md:px-14 md:py-20">
          <h2 className="text-xl font-semibold">
            Payment by Wire Transfer/Bank Draft
          </h2>

          <div className="prose prose-li:marker:text-slate-500">
            <ul>
              <li>
                Bank Account name: BNI-2104389119 a.n ICAITECH ORGANISASI
              </li>
              <li>Bank Name: BNI</li>
              <li>Bank Address: MUSI PALEMBANG</li>
              <li>City: Palembang</li>
              <li>State: Sumatera Selatan</li>
              <li>Country: Indonesia</li>
              <li>SWIFT/BIC: BNINIDJAXXX</li>
              <li>Bank Account #: 2104389119 – IDR</li>
              <li>
                Message for Beneficiary: Registration fee for ICAITech from
                [Paper ID /Author’s Name]
              </li>
            </ul>

            <p className="italic">Note:</p>

            <div className="italic">
              <p>
                1. This{" "}
                <a href="/assets/Surat Permohonan Free APC.docx">
                  document
                </a>{" "}
                is intended especially for lecturers and active
                undergraduate and postgraduate students of the Faculty
                of Computer Science, Universitas Sriwijaya. Please take
                a moment to fill it out.
              </p>

              <p>
                2. Please ensure we receive the full amount. The ICAITECH
                secretariat should receive the exact amount of registration
                fees. If not, the participant has to pay the balance due
                at the registration desk.
              </p>
            </div>
          </div>

          {/* Payment by PayPal */}
          <div className="mt-10 border-t border-slate-300 pt-8">
            <h2 className="text-xl font-semibold">
              Payment by PayPal
            </h2>

            <div className="mt-4 space-y-3 text-slate-700">
              <p>
                You can also pay the ICAITech registration fee via PayPal.
                Please use the following account information.
              </p>

              <p>
                <span className="font-semibold">PayPal Account:</span>{" "}
                passarella.rossi@gmail.com
              </p>

              <p>
                <span className="font-semibold">PayPal Payment Link:</span>{" "}
                <a
                  href="https://paypal.me/RossiPassarella"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-700 underline hover:text-blue-900"
                >
                  https://paypal.me/RossiPassarella
                </a>
              </p>

              <a
                href="https://paypal.me/RossiPassarella"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white no-underline transition hover:bg-blue-700"
              >
                Pay via PayPal
              </a>

              <p className="pt-3 text-sm italic text-slate-600">
                Please include your Paper ID and Author's Name in the
                payment note or provide the payment details to the
                ICAITech secretariat for registration verification.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
