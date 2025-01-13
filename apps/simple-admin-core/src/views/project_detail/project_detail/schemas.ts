import type { VxeGridProps } from '#/adapter/vxe-table';

import { h } from 'vue';

import { type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { z } from '#/adapter/form';


    import { message, Switch } from 'ant-design-vue';
    import { updateProjectDetail } from '#/api/project_detail/projectDetail';

export const tableColumns: VxeGridProps = {
  columns: [
    {
      type: 'checkbox',
      width: 60,
    },

  {
    title: $t('project_detail.projectDetail.history'),
    field: 'history',
  },
  {
    title: $t('project_detail.projectDetail.associated'),
    field: 'associated',
  },
  {
    title: $t('project_detail.projectDetail.associatedAdd'),
    field: 'associatedAdd',
  },
  {
    title: $t('project_detail.projectDetail.applicationId'),
    field: 'applicationId',
  },
    {
      title: $t('common.status'),
      field: 'status',
      slots: {
        default: (e) =>
          h(Switch, {
            checked: e.row.status === 1,
            onClick: () => {
              const newStatus = e.row.status === 1 ? 2 : 1;
              updateProjectDetail({ id: e.row.id, status: newStatus }).then(() => {
                e.row.status = newStatus;
              });
            },
          }),
      },
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
    fieldName: 'history',
    label: $t('project_detail.projectDetail.history'),
    component: 'Input',
     },
  {
    fieldName: 'associatedAdd',
    label: $t('project_detail.projectDetail.associatedAdd'),
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
    fieldName: 'history',
    label: $t('project_detail.projectDetail.history'),
    component: 'Input',
  },
  {
    fieldName: 'associated',
    label: $t('project_detail.projectDetail.associated'),
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
    fieldName: 'associatedAdd',
    label: $t('project_detail.projectDetail.associatedAdd'),
    component: 'Input',
  },
  {
    fieldName: 'applicationId',
    label: $t('project_detail.projectDetail.applicationId'),
    component: 'InputNumber',
  },
  {
    fieldName: 'status',
    label: $t('project_detail.projectDetail.status'),
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: $t('common.on'), value: 1 },
        { label: $t('common.off'), value: 2 },
      ],
    },
  },
  ],
};
