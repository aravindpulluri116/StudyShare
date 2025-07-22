export interface Resource {
  id: string;
  title: string;
  subject: string;
  subjectCode: string;
  uploadedBy: string;
  uploadDate: string;
  fileSize: string;
  description?: string;
  fileName: string;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
  resourceCount: number;
  description: string;
  subjectCode: string;
}