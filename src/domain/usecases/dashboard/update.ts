import { Dashboard } from "../../models/Dashboard";

export interface DashboardUpdateInterface {
  update(dashboard: Dashboard): Promise<Dashboard>;
}