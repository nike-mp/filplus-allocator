import { type BaseListResp } from '../../model/baseModel';

/**
 *  @description: StorageProvider info response
 */
export interface StorageProviderInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  address?: string;
  location?: string;
  organization?: string;
  totalDeals?: number;
  percentage?: number;
  uniqueData?: number;
  duplicate?: number;
  retrievalRate?: number;
  remark?: string;
  applicationId?: number;
}

/**
 *  @description: StorageProvider list response
 */

export type StorageProviderListResp = BaseListResp<StorageProviderInfo>;
