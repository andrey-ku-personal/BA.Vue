import { Divisions } from "@/core/enums/divisions";
import { Conferences } from "@/core/enums/conferences";
import { FileModel } from "@/core/models/fileModel";

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
