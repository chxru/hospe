export interface CreateChannelingDto {
  readonly docId: string;
  readonly docType: string;
  readonly date: Date;
  readonly time: string;
  readonly maximumPatients: number;
  readonly doctorFee: number;
  readonly docName: string;
  readonly activePatients: number;
}

export type UpdateChannelingDto = Partial<CreateChannelingDto>;
