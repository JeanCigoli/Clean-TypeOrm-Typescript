import { Dashboard } from "../../models/Dashboard";

export interface DashboardFindAllInterface {
  index(): Promise<Dashboard[]>;
}