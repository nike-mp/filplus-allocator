import { type BaseListResp } from '../../model/baseModel';

/**
 *  @description: UseCaseDetail info response
 */
export interface UseCaseDetailInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  describe?: string;
  sourcedFrom?: string;
  sourcedFromAdd?: string;
  region?: string;
  preparedDes?: string;
  preparedNo?: string;
  explain?: string;
  sample?: string;
  confirm?: boolean;
  confirmAdd?: string;
  retrievalFre?: string;
  storedTime?: string;
  applicationId?: number;
}

/**
 *  @description: UseCaseDetail list response
 */

export type UseCaseDetailListResp = BaseListResp<UseCaseDetailInfo>;
