import { Divisions } from "@/enums/divisions";
import { Conferences } from "@/enums/conferences";
import { FileModel } from "@/models/fileModel";

export interface TeamModel {
  id: number;
  name: string;
  code: string;
  city: string;
  division: Divisions;
  conference: Conferences;
  stadium: string;
  founded: number;
  logo?: FileModel;
}
