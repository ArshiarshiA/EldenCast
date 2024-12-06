type DropItems = string[]

interface IAttackStatic{
    name: string
    amount: number
}

export interface ITrowData {
    id?: string
    image?: string
    name?: string
    healthPoints?: string
    location?: string
    region?: string
    effect?: string
    type?: string
    categorieName?: string
    drops?: DropItems
    attack?: IAttackStatic[]
    defence?: IAttackStatic[]
    description?: string
    category?: string
    quote?: string
    role?: string
    fpCost?: string
    hpCost?: string
    affinity?: string
    skill?: string
    weight: number
}