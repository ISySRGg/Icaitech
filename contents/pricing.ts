import { Pricing } from "@/types"

export const RegistrationPricing: Pricing[] = [
  {
    type: "International Participant/Foreign (in USD)",
    listPricing: [
      {
        category: "Professional with paper",
        prices: [
          {
            subCategory: "Non Member (Early Bird)",
            price: 175,
          },
          {
            subCategory: "Non Member (Normal)",
            price: 200,
          },
          {
            subCategory: "IEEE Member (Early Bird)",
            price: 150,
          },
          {
            subCategory: "IEEE Member (Normal)",
            price: 175,
          },
        ],
      },
      {
        category: "Student with paper",
        prices: [
          {
            subCategory: "Non Member (Early Bird)",
            price: 150,
          },
          {
            subCategory: "Non Member (Normal)",
            price: 175,
          },
          {
            subCategory: "IEEE Member (Early Bird)",
            price: 125,
          },
          {
            subCategory: "IEEE Member (Normal)",
            price: 150,
          },
        ],
      },
      {
        category: "Non-presenter participant",
        prices: [
          {
            subCategory: "Non Member (Early Bird)",
            price: 10,
          },
          {
            subCategory: "Non Member (Normal)",
            price: 10,
          },
          {
            subCategory: "IEEE Member (Early Bird)",
            price: 10,
          },
          {
            subCategory: "IEEE Member (Normal)",
            price: 10,
          },
        ],
      },
    ],
  },
  {
    type: "Local Participant/Indonesian (in IDR)",
    listPricing: [
      {
        category: "Professional with paper",
        prices: [
          {
            subCategory: "Non Member (Early Bird)",
            price: 2000000,
          },
          {
            subCategory: "Non Member (Normal)",
            price: 2250000,
          },
          {
            subCategory: "IEEE Member (Early Bird)",
            price: 1750000,
          },
          {
            subCategory: "IEEE Member (Normal)",
            price: 2000000,
          },
        ],
      },
      {
        category: "Student with paper",
        prices: [
          {
            subCategory: "Non Member (Early Bird)",
            price: 1500000,
          },
          {
            subCategory: "Non Member (Normal)",
            price: 1750000,
          },
          {
            subCategory: "IEEE Member (Early Bird)",
            price: 1250000,
          },
          {
            subCategory: "IEEE Member (Normal)",
            price: 1500000,
          },
        ],
      },
      {
        category: "Non-presenter participant",
        prices: [
          {
            subCategory: "Non Member (Early Bird)",
            price: 100000,
          },
          {
            subCategory: "Non Member (Normal)",
            price: 100000,
          },
          {
            subCategory: "IEEE Member (Early Bird)",
            price: 100000,
          },
          {
            subCategory: "IEEE Member (Normal)",
            price: 100000,
          },
        ],
      },
    ],
  },
]
