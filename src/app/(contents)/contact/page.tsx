import { Mail, MapPin, UserRound } from "lucide-react"

import PageHeader from "@/components/page-header"

import { address, contacts, email } from "../../../../contents/contact"

export default function Page() {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="container mt-8 md:mt-16">
        <p className="text-lg md:text-xl">
          All questions about submissions should be contact.
        </p>

        <div className="mt-6 flex flex-col divide-y">
          <div className="flex items-start gap-2 py-4">
            <span className="rounded-full bg-black p-1.5">
              <Mail className="size-[1em] text-white" />
            </span>
            <div>
              <p className="font-semibold md:text-lg">Email</p>
              <p className="mt-0.5 max-w-prose text-sm md:text-base">{email}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 py-4">
            <span className="rounded-full bg-black p-1.5">
              <MapPin className="size-[1em] text-white" />
            </span>
            <div>
              <p className="font-semibold md:text-lg">Address</p>
              <p className="mt-0.5 max-w-prose text-sm md:text-base">
                {address}
              </p>
            </div>
          </div>

          <ul className="flex flex-col gap-4 py-4">
            {contacts.map((contact, i) => (
              <li
                key={i}
                className="flex max-w-lg items-start gap-2 md:items-center"
              >
                <span className="rounded-full bg-black p-1.5">
                  <UserRound className="size-[1em] text-white" />
                </span>
                <div className="w-full">
                  <p>{contact.name}</p>
                  <div className="grid w-full md:grid-cols-2 md:text-lg">
                    <p className="text-sm md:text-base">
                      {contact.contact.whatsapp}
                    </p>
                    <p className="text-sm md:text-base">
                      {contact.contact.email}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
