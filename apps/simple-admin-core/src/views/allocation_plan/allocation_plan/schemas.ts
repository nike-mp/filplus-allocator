import type { VxeGridProps } from '#/adapter/vxe-table';

import { h } from 'vue';

import { type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { z } from '#/adapter/form';



export const tableColumns: VxeGridProps = {
  columns: [
    {
      type: 'checkbox',
      width: 60,
    },

  {
    title: $t('allocation_plan.allocationPlan.geography'),
    field: 'geography',
  },
  {
    title: $t('allocation_plan.allocationPlan.distributeMethod'),
    field: 'distributeMethod',
  },
  {
    title: $t('allocation_plan.allocationPlan.findMethod'),
    field: 'findMethod',
  },
  {
    title: $t('allocation_plan.allocationPlan.findMethodAdd'),
    field: 'findMethodAdd',
  },
  {
    title: $t('allocation_plan.allocationPlan.dealsPlan'),
    field: 'dealsPlan',
  },
  {
    title: $t('allocation_plan.allocationPlan.dealsPlanAdd'),
    field: 'dealsPlanAdd',
  },
  {
    title: $t('allocation_plan.allocationPlan.followed'),
    field: 'followed',
  },
  {
    title: $t('allocation_plan.allocationPlan.applicationId'),
    field: 'applicationId',
  },

    {
      title: $t('common.createTime'),
      field: 'createdAt',
      formatter: 'formatDateTime',
    },

  ],
};

export const searchFormSchemas: VbenFormProps = {
  schema: [
  {
    fieldName: 'geography',
    label: $t('allocation_plan.allocationPlan.geography'),
    component: 'Input',
     },
  {
    fieldName: 'distributeMethod',
    label: $t('allocation_plan.allocationPlan.distributeMethod'),
    component: 'Input',
     },
  {
    fieldName: 'findMethod',
    label: $t('allocation_plan.allocationPlan.findMethod'),
    component: 'Input',
     },
  ],
};

export const dataFormSchemas: VbenFormProps = {
  schema: [
    {
      fieldName: 'id',
      label: 'ID',
      component: 'Input',
      dependencies: {
        show: false,
        triggerFields: ['id'],
      },
    },
  {
    fieldName: 'geography',
    label: $t('allocation_plan.allocationPlan.geography'),
    component: 'Input',
  },
  {
    fieldName: 'distributeMethod',
    label: $t('allocation_plan.allocationPlan.distributeMethod'),
    component: 'Input',
  },
  {
    fieldName: 'findMethod',
    label: $t('allocation_plan.allocationPlan.findMethod'),
    component: 'Input',
  },
  {
    fieldName: 'findMethodAdd',
    label: $t('allocation_plan.allocationPlan.findMethodAdd'),
    component: 'Input',
  },
  {
    fieldName: 'dealsPlan',
    label: $t('allocation_plan.allocationPlan.dealsPlan'),
    component: 'Input',
  },
  {
    fieldName: 'dealsPlanAdd',
    label: $t('allocation_plan.allocationPlan.dealsPlanAdd'),
    component: 'Input',
  },
  {
    fieldName: 'followed',
    label: $t('allocation_plan.allocationPlan.followed'),
    component: 'RadioButtonGroup',
    defaultValue: true,
    componentProps: {
      options: [
        { label: $t('common.on'), value: true },
        { label: $t('common.off'), value: false },
      ],
    },
  },
  {
    fieldName: 'applicationId',
    label: $t('allocation_plan.allocationPlan.applicationId'),
    component: 'InputNumber',
  },
  ],
};
