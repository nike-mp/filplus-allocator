import { type BaseDataResp, type BaseListReq, type BaseResp, type BaseIDsReq, type BaseIDReq } from '#/api/model/baseModel';
import { requestClient } from '#/api/request';
import { type ApplicationInfo, type ApplicationListResp } from './model/applicationModel';

enum Api {
  CreateApplication = '/filplus-api/application/create',
  UpdateApplication = '/filplus-api/application/update',
  GetApplicationList = '/filplus-api/application/list',
  DeleteApplication = '/filplus-api/application/delete',
  GetApplicationById = '/filplus-api/application',
}

/**
 * @description: Get application list
 */

export const getApplicationList = (params: BaseListReq) => {
  return requestClient.post<BaseDataResp<ApplicationListResp>>(Api.GetApplicationList, params);
};

/**
 *  @description: Create a new application
 */
export const createApplication = (params: ApplicationInfo) => {
  return requestClient.post<BaseResp>(Api.CreateApplication, params);
};

/**
 *  @description: Update the application
 */
export const updateApplication = (params: ApplicationInfo) => {
  return requestClient.post<BaseResp>(Api.UpdateApplication, params);
};

/**
 *  @description: Delete applications
 */
export const deleteApplication = (params: BaseIDsReq) => {
  return requestClient.post<BaseResp>(Api.DeleteApplication, params);
};

/**
 *  @description: Get application By ID
 */
export const getApplicationById = (params: BaseIDReq) => {
  return requestClient.post<BaseDataResp<ApplicationInfo>>(Api.GetApplicationById, params);
};
