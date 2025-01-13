import { type BaseListResp } from '../../model/baseModel';

/**
 *  @description: Application info response
 */
export interface ApplicationInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  applicant?: string;
  owner?: string;
  country?: string;
  industry?: string;
  website?: string;
  social?: string;
  socialType?: string;
  role?: string;
  totalAmount?: number;
  expectedSize?: number;
  replicas?: number;
  weeklyAllocation?: number;
  address?: string;
  dataType?: number;
  identifier?: string;
  progress?: number;
}

/**
 *  @description: Application list response
 */

export type ApplicationListResp = BaseListResp<ApplicationInfo>;
