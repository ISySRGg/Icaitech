export type Cast = {
  name: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  linkedIn: string
}

export type Scope = string

export type Agenda = {
  name: string
  date: string
}

export type Track = {
  title: string
  subtracks: {
    title: string
    description: string
  }[]
}

export type Guideline = string

export type Pricing = {
  type: string
  listPricing: {
    category: string
    prices: {
      subCategory: string
      price: number
    }[]
  }[]
}

export type Committee = {
  name: string
  affiliation?: string
}

export type Contact = {
  name: string
  contact: {
    email: string
    whatsapp: string
  }
}
