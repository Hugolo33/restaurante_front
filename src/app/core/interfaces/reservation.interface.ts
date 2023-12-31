export interface Reservation {
    id?: number,
    r_date: string,
    diners: number,
    notes?: string,
    user_id?: number,
    spot_id?: number,
    shift_id?: number,
    review_id?: number
    time?: string,
    content?: string,
    name?: string,
    phone_number?: string,
    email?: string
}