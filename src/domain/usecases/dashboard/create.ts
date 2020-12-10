import { Dashboard } from "../../models/Dashboard";

export interface DashboardCreateInterface {
  store(dashboard: Dashboard): Promise<Dashboard>;
}