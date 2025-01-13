import { type BaseDataResp, type BaseListReq, type BaseResp, type BaseIDsReq, type BaseIDReq } from '#/api/model/baseModel';
import { requestClient } from '#/api/request';
import { type UseCaseDetailInfo, type UseCaseDetailListResp } from './model/useCaseDetailModel';

enum Api {
  CreateUseCaseDetail = '/filplus-api/use_case_detail/create',
  UpdateUseCaseDetail = '/filplus-api/use_case_detail/update',
  GetUseCaseDetailList = '/filplus-api/use_case_detail/list',
  DeleteUseCaseDetail = '/filplus-api/use_case_detail/delete',
  GetUseCaseDetailById = '/filplus-api/use_case_detail_by_appid',
}

/**
 * @description: Get use case detail list
 */

export const getUseCaseDetailList = (params: BaseListReq) => {
  return requestClient.post<BaseDataResp<UseCaseDetailListResp>>(Api.GetUseCaseDetailList, params);
};

/**
 *  @description: Create a new use case detail
 */
export const createUseCaseDetail = (params: UseCaseDetailInfo) => {
  return requestClient.post<BaseResp>(Api.CreateUseCaseDetail, params);
};

/**
 *  @description: Update the use case detail
 */
export const updateUseCaseDetail = (params: UseCaseDetailInfo) => {
  return requestClient.post<BaseResp>(Api.UpdateUseCaseDetail, params);
};

/**
 *  @description: Delete use case details
 */
export const deleteUseCaseDetail = (params: BaseIDsReq) => {
  return requestClient.post<BaseResp>(Api.DeleteUseCaseDetail, params);
};

/**
 *  @description: Get use case detail By ID
 */
export const getUseCaseDetailById = (params: BaseIDReq) => {
  return requestClient.post<BaseDataResp<UseCaseDetailInfo>>(Api.GetUseCaseDetailById, params);
};
