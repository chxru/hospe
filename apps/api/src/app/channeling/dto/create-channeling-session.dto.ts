export class CreateChannelingSessionDto {
  readonly channelingSessionId: string;
  readonly channelingDoctorId: string;
  readonly channelingDoctorName: string;
  readonly channelingDate: Date;
  readonly channelingTime: string;
  readonly maximiumPatient: number;
}
