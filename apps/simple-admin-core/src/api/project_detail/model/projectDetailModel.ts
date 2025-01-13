import { type BaseListResp } from '../../model/baseModel';

/**
 *  @description: ProjectDetail info response
 */
export interface ProjectDetailInfo {
  id?: number;
  createdAt?: number;
  updatedAt?: number;
  status?: number;
  history?: string;
  associated?: boolean;
  associatedAdd?: string;
  applicationId?: number;
}

/**
 *  @description: ProjectDetail list response
 */

export type ProjectDetailListResp = BaseListResp<ProjectDetailInfo>;
