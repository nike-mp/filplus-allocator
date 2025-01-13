import { type BaseListResp } from '../../model/baseModel';

/**
 *  @description: AllocationPlan info response
 */
export interface AllocationPlanInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  geography?: string;
  distributeMethod?: string;
  findMethod?: string;
  findMethodAdd?: string;
  dealsPlan?: string;
  dealsPlanAdd?: string;
  followed?: boolean;
  applicationId?: number;
}

/**
 *  @description: AllocationPlan list response
 */

export type AllocationPlanListResp = BaseListResp<AllocationPlanInfo>;
