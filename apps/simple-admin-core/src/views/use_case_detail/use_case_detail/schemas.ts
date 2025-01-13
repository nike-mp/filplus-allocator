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
    title: $t('use_case_detail.useCaseDetail.describe'),
    field: 'describe',
  },
  {
    title: $t('use_case_detail.useCaseDetail.sourcedFrom'),
    field: 'sourcedFrom',
  },
  {
    title: $t('use_case_detail.useCaseDetail.sourcedFromAdd'),
    field: 'sourcedFromAdd',
  },
  {
    title: $t('use_case_detail.useCaseDetail.region'),
    field: 'region',
  },
  {
    title: $t('use_case_detail.useCaseDetail.preparedDes'),
    field: 'preparedDes',
  },
  {
    title: $t('use_case_detail.useCaseDetail.preparedNo'),
    field: 'preparedNo',
  },
  {
    title: $t('use_case_detail.useCaseDetail.explain'),
    field: 'explain',
  },
  {
    title: $t('use_case_detail.useCaseDetail.sample'),
    field: 'sample',
  },
  {
    title: $t('use_case_detail.useCaseDetail.confirm'),
    field: 'confirm',
  },
  {
    title: $t('use_case_detail.useCaseDetail.confirmAdd'),
    field: 'confirmAdd',
  },
  {
    title: $t('use_case_detail.useCaseDetail.retrievalFre'),
    field: 'retrievalFre',
  },
  {
    title: $t('use_case_detail.useCaseDetail.storedTime'),
    field: 'storedTime',
  },
  {
    title: $t('use_case_detail.useCaseDetail.applicationId'),
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
    fieldName: 'describe',
    label: $t('use_case_detail.useCaseDetail.describe'),
    component: 'Input',
     },
  {
    fieldName: 'sourcedFrom',
    label: $t('use_case_detail.useCaseDetail.sourcedFrom'),
    component: 'Input',
     },
  {
    fieldName: 'sourcedFromAdd',
    label: $t('use_case_detail.useCaseDetail.sourcedFromAdd'),
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
    fieldName: 'describe',
    label: $t('use_case_detail.useCaseDetail.describe'),
    component: 'Input',
  },
  {
    fieldName: 'sourcedFrom',
    label: $t('use_case_detail.useCaseDetail.sourcedFrom'),
    component: 'Input',
  },
  {
    fieldName: 'sourcedFromAdd',
    label: $t('use_case_detail.useCaseDetail.sourcedFromAdd'),
    component: 'Input',
  },
  {
    fieldName: 'region',
    label: $t('use_case_detail.useCaseDetail.region'),
    component: 'Input',
  },
  {
    fieldName: 'preparedDes',
    label: $t('use_case_detail.useCaseDetail.preparedDes'),
    component: 'Input',
  },
  {
    fieldName: 'preparedNo',
    label: $t('use_case_detail.useCaseDetail.preparedNo'),
    component: 'Input',
  },
  {
    fieldName: 'explain',
    label: $t('use_case_detail.useCaseDetail.explain'),
    component: 'Input',
  },
  {
    fieldName: 'sample',
    label: $t('use_case_detail.useCaseDetail.sample'),
    component: 'Input',
  },
  {
    fieldName: 'confirm',
    label: $t('use_case_detail.useCaseDetail.confirm'),
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
    fieldName: 'confirmAdd',
    label: $t('use_case_detail.useCaseDetail.confirmAdd'),
    component: 'Input',
  },
  {
    fieldName: 'retrievalFre',
    label: $t('use_case_detail.useCaseDetail.retrievalFre'),
    component: 'Input',
  },
  {
    fieldName: 'storedTime',
    label: $t('use_case_detail.useCaseDetail.storedTime'),
    component: 'Input',
  },
  {
    fieldName: 'applicationId',
    label: $t('use_case_detail.useCaseDetail.applicationId'),
    component: 'InputNumber',
  },
  ],
};
