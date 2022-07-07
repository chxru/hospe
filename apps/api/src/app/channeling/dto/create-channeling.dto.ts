export class CreateChannelingDto {
  readonly channelingId: string;
  readonly channelingPatientId: string;
  readonly channelingDoctorId: string;
  readonly channelingType: string;
  readonly channelingDate: Date;
  readonly channelingTime: string;
  readonly channelingDescription: string;
  readonly channelingStatus: string;
}
