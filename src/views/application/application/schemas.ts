import type { VxeGridProps } from '#/adapter/vxe-table';

import { h } from 'vue';

import { type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { z } from '#/adapter/form';


    import { message, Switch } from 'ant-design-vue';
    import { updateApplication } from '#/api/application/application';

export const tableColumns: VxeGridProps = {
  columns: [
    {
      type: 'checkbox',
      width: 60,
    },

  {
    title: $t('application.application.applicant'),
    field: 'applicant',
  },
  {
    title: $t('application.application.owner'),
    field: 'owner',
  },
  {
    title: $t('application.application.country'),
    field: 'country',
  },
  {
    title: $t('application.application.industry'),
    field: 'industry',
  },
  {
    title: $t('application.application.website'),
    field: 'website',
  },
  {
    title: $t('application.application.social'),
    field: 'social',
  },
  {
    title: $t('application.application.socialType'),
    field: 'socialType',
  },
  {
    title: $t('application.application.role'),
    field: 'role',
  },
  {
    title: $t('application.application.totalAmount'),
    field: 'totalAmount',
  },
  {
    title: $t('application.application.expectedSize'),
    field: 'expectedSize',
  },
  {
    title: $t('application.application.replicas'),
    field: 'replicas',
  },
  {
    title: $t('application.application.weeklyAllocation'),
    field: 'weeklyAllocation',
  },
  {
    title: $t('application.application.address'),
    field: 'address',
  },
  {
    title: $t('application.application.dataType'),
    field: 'dataType',
  },
  {
    title: $t('application.application.identifier'),
    field: 'identifier',
  },
  {
    title: $t('application.application.progress'),
    field: 'progress',
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
              updateApplication({ id: e.row.id, status: newStatus }).then(() => {
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
    fieldName: 'userId',
    label: $t('application.application.userId'),
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
    fieldName: 'applicant',
    label: $t('application.application.applicant'),
    component: 'Input',
  },
  {
    fieldName: 'owner',
    label: $t('application.application.owner'),
    component: 'Input',
  },
  {
    fieldName: 'country',
    label: $t('application.application.country'),
    component: 'Input',
  },
  {
    fieldName: 'industry',
    label: $t('application.application.industry'),
    component: 'Input',
  },
  {
    fieldName: 'website',
    label: $t('application.application.website'),
    component: 'Input',
  },
  {
    fieldName: 'social',
    label: $t('application.application.social'),
    component: 'Input',
  },
  {
    fieldName: 'socialType',
    label: $t('application.application.socialType'),
    component: 'Input',
  },
  {
    fieldName: 'role',
    label: $t('application.application.role'),
    component: 'Input',
  },
  {
    fieldName: 'totalAmount',
    label: $t('application.application.totalAmount'),
    component: 'InputNumber',
  },
  {
    fieldName: 'expectedSize',
    label: $t('application.application.expectedSize'),
    component: 'InputNumber',
  },
  {
    fieldName: 'replicas',
    label: $t('application.application.replicas'),
    component: 'InputNumber',
  },
  {
    fieldName: 'weeklyAllocation',
    label: $t('application.application.weeklyAllocation'),
    component: 'InputNumber',
  },
  {
    fieldName: 'address',
    label: $t('application.application.address'),
    component: 'Input',
  },
  {
    fieldName: 'dataType',
    label: $t('application.application.dataType'),
    component: 'InputNumber',
  },
  {
    fieldName: 'identifier',
    label: $t('application.application.identifier'),
    component: 'Input',
  },
  {
    fieldName: 'progress',
    label: $t('application.application.progress'),
    component: 'InputNumber',
  },
  {
    fieldName: 'status',
    label: $t('application.application.status'),
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
