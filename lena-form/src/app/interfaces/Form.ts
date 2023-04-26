import { Field } from "./Field";

export interface Form {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  createdBy: number;
  fields: Field[];
}