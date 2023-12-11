export interface Reservation {
    id?: number,
    r_date: Date,
    diners: number,
    notes?: string,
    user_id?: number,
    spot_id?: number,
    shift_id?: number
}