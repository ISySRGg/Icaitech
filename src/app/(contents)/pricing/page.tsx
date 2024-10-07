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
            <>
              <h2 className="mt-10 text-xl font-semibold md:mt-14 md:text-2xl">
                {pricing.type}
              </h2>
              <ul key={i} className="flex flex-col divide-y md:mt-4">
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
                        <p className="text-xl font-medium text-gray-700 md:text-2xl">
                          {price.price.toLocaleString()}
                        </p>
                        <p className="text-xs italic text-gray-400 md:text-sm">
                          {price.subCategory}
                        </p>
                      </div>
                    ))}
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </section>
      <section className="container mt-8 md:mt-16">
        <div className="rounded-lg bg-gray-200/70 p-10 md:px-14 md:py-20">
          <h2 className="text-xl font-semibold">
            Payment by Wire Transfer/Bank Draft
          </h2>
          <div className="prose prose-li:marker:text-gray-500">
            <ul>
              <li>
                Bank Account name (please be exact)/Beneficiary: Nama Rekening
              </li>
              <li>Bank Name: BNI KCP UNSRI PALEMBANG</li>
              <li>Bank Address: Jl. Srijaya Negara No.72</li>
              <li>City: Palembang</li>
              <li>State: Sumatera Selatan</li>
              <li>Country: Indonesia</li>
              <li>SWIFT/BIC: BNINIDJAXXX</li>
              <li>Bank Account #: No_REK – IDR</li>
              <li>
                Message for Beneficiary: Registration fee for ICAITech 2024 from
                [Paper ID /Author’s Name]
              </li>
            </ul>
            <p className="italic">
              Note: Please ensure we receive the full amount, ICAITECH
              secretariat should receive the exact amount of registration fees.
              If not, the participant has to pay the balance due at the
              registration desk.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
