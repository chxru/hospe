export interface CreateBookingDto {
  readonly bookingId: string;
  readonly docID: string;
  readonly docName: string;
  readonly bookingDate: string;
  readonly bookingTime: string;
  readonly bookingFee: number;
}
