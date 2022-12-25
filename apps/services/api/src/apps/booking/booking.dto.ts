export interface CreateBookingDto {
  readonly userId: string;
  readonly userName: string;
  readonly sessionId: string;
}
export type UpdateBookingDto = Partial<CreateBookingDto>;
