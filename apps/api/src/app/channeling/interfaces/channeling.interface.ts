export interface Channeling {
  channelingId?: string;
  channelingPatientId: string;
  channelingDoctorId: string;
  channelingType?: string;
  channelingDate: Date;
  channelingTime: string;
  channelingDescription?: string;
  channelingStatus: string;
}
