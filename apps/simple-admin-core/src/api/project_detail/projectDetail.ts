import { type BaseDataResp, type BaseListReq, type BaseResp, type BaseIDsReq, type BaseIDReq } from '#/api/model/baseModel';
import { requestClient } from '#/api/request';
import { type ProjectDetailInfo, type ProjectDetailListResp } from './model/projectDetailModel';

enum Api {
  CreateProjectDetail = '/filplus-api/project_detail/create',
  UpdateProjectDetail = '/filplus-api/project_detail/update',
  GetProjectDetailList = '/filplus-api/project_detail/list',
  DeleteProjectDetail = '/filplus-api/project_detail/delete',
  GetProjectDetailById = '/filplus-api/project_detail_by_appid',
}

/**
 * @description: Get project detail list
 */

export const getProjectDetailList = (params: BaseListReq) => {
  return requestClient.post<BaseDataResp<ProjectDetailListResp>>(Api.GetProjectDetailList, params);
};

/**
 *  @description: Create a new project detail
 */
export const createProjectDetail = (params: ProjectDetailInfo) => {
  return requestClient.post<BaseResp>(Api.CreateProjectDetail, params);
};

/**
 *  @description: Update the project detail
 */
export const updateProjectDetail = (params: ProjectDetailInfo) => {
  return requestClient.post<BaseResp>(Api.UpdateProjectDetail, params);
};

/**
 *  @description: Delete project details
 */
export const deleteProjectDetail = (params: BaseIDsReq) => {
  return requestClient.post<BaseResp>(Api.DeleteProjectDetail, params);
};

/**
 *  @description: Get project detail By ID
 */
export const getProjectDetailById = (params: BaseIDReq) => {
  return requestClient.post<BaseDataResp<ProjectDetailInfo>>(Api.GetProjectDetailById, params);
};
