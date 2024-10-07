export type SiteConfig = typeof siteConfig

export const siteConfig = {
  mainNav: [
    { label: "About", href: "/#about" },
    { label: "Keynote Speakers", href: "/#keynote-speakers" },
    { label: "Scopes", href: "/scopes" },
    {
      label: "For Author",
      children: [
        {
          label: "Important Date",
          href: "/important-date",
        },
        {
          label: "Conference Tracks",
          href: "/conference-tracks",
        },
        {
          label: "Submission",
          href: "/submission",
        },
        {
          label: "Registration",
          href: "/registration",
        },
        {
          label: "Pricing",
          href: "/pricing",
        },
      ],
    },
    { label: "Committee", href: "/committee" },
    { label: "Contact", href: "/contact" },
  ],
}
