export interface Review {
    id: number,
    rating: number,
    content: string,
    date_added: Date,
    user_id: number,
    reservation_id: number,
    r_date?: string,
    name?: string,
    email?: string,
    daytime?: string
}