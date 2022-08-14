export class CreateChannelingSessionDto {
  readonly channelingSessionId: string;
  readonly channelingDoctorId: string;
  readonly channelingDoctorName: string;
  readonly channelingDate: Date;
  readonly channelingStartTime: string;
  readonly channelingEndTime: string;
  readonly maximiumPatient: number;
}
