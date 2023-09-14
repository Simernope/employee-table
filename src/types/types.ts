export enum Subscription {
    subscribed= 'Subscribed',
    notsubscribed ='Not Subscribed',
    other = 'Other'
}

export type RowData = {
    id: number
    name: string
    age: number
    subscription: string
    employment: 'Employed' | 'Unemployed'
}