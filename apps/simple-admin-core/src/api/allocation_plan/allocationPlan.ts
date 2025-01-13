import { type BaseDataResp, type BaseListReq, type BaseResp, type BaseIDsReq, type BaseIDReq } from '#/api/model/baseModel';
import { requestClient } from '#/api/request';
import { type AllocationPlanInfo, type AllocationPlanListResp } from './model/allocationPlanModel';

enum Api {
  CreateAllocationPlan = '/filplus-api/allocation_plan/create',
  UpdateAllocationPlan = '/filplus-api/allocation_plan/update',
  GetAllocationPlanList = '/filplus-api/allocation_plan/list',
  DeleteAllocationPlan = '/filplus-api/allocation_plan/delete',
  GetAllocationPlanById = '/filplus-api/allocation_plan_by_appid',
}

/**
 * @description: Get allocation plan list
 */

export const getAllocationPlanList = (params: BaseListReq) => {
  return requestClient.post<BaseDataResp<AllocationPlanListResp>>(Api.GetAllocationPlanList, params);
};

/**
 *  @description: Create a new allocation plan
 */
export const createAllocationPlan = (params: AllocationPlanInfo) => {
  return requestClient.post<BaseResp>(Api.CreateAllocationPlan, params);
};

/**
 *  @description: Update the allocation plan
 */
export const updateAllocationPlan = (params: AllocationPlanInfo) => {
  return requestClient.post<BaseResp>(Api.UpdateAllocationPlan, params);
};

/**
 *  @description: Delete allocation plans
 */
export const deleteAllocationPlan = (params: BaseIDsReq) => {
  return requestClient.post<BaseResp>(Api.DeleteAllocationPlan, params);
};

/**
 *  @description: Get allocation plan By ID
 */
export const getAllocationPlanById = (params: BaseIDReq) => {
  return requestClient.post<BaseDataResp<AllocationPlanInfo>>(Api.GetAllocationPlanById, params);
};
