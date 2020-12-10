import { Dashboard } from "../../models/Dashboard";

export interface DashboardFindOneInterface {
  show(): Promise<Dashboard>;
}