export interface ChannelingSession {
  channelingSessionId?: string;
  channelingDoctorId: string;
  channelingDoctorName: string;
  channelingDate: Date;
  channelingStartTime: string;
  channelingEndTime: string;
  maximumPatients: number;
}
