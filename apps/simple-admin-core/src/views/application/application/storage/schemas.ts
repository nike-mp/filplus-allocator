import type { VxeGridProps } from '#/adapter/vxe-table';

import { h } from 'vue';

import { type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { z } from '#/adapter/form';


    import { message, Switch } from 'ant-design-vue';
    import { updateStorageProvider } from '#/api/storage_provider/storageProvider';

export const tableColumns: VxeGridProps = {
  columns: [
    {
      type: 'checkbox',
      width: 60,
    },
   {
    title: 'ID',
    field: 'id',
  },
  {
    title: $t('storage_provider.storageProvider.address'),
    field: 'address',
  },
  {
    title: $t('storage_provider.storageProvider.location'),
    field: 'location',
  },
  {
    title: $t('storage_provider.storageProvider.organization'),
    field: 'organization',
  },
  {
    title: $t('storage_provider.storageProvider.totalDeals') + '(TiB)',
    field: 'totalDeals',
  },
  {
    title: $t('storage_provider.storageProvider.percentage'),
    field: 'percentage',
    formatter: (e)=>{
      return `${e.row.percentage * 100}%`
    },
  },
  {
    title: $t('storage_provider.storageProvider.uniqueData') + '(TiB)',
    field: 'uniqueData',
  },
  {
    title: $t('storage_provider.storageProvider.duplicate'),
    field: 'duplicate',
    formatter: (e)=>{
      return `${e.row.percentage * 100}%`
    },
  },
  {
    title: $t('storage_provider.storageProvider.retrievalRate'),
    field: 'retrievalRate',
    formatter: (e)=>{
      return `${e.row.percentage * 100}%`
    },
  },
  {
    title: $t('storage_provider.storageProvider.remark'),
    field: 'remark',
  },
  {
    title: $t('storage_provider.storageProvider.applicationId'),
    field: 'applicationId',
  },
    // {
    //   title: $t('common.status'),
    //   field: 'status',
    //   slots: {
    //     default: (e) =>
    //       h(Switch, {
    //         checked: e.row.status === 1,
    //         onClick: () => {
    //           const newStatus = e.row.status === 1 ? 2 : 1;
    //           updateStorageProvider({ id: e.row.id, status: newStatus }).then(() => {
    //             e.row.status = newStatus;
    //           });
    //         },
    //       }),
    //   },
    // },

    // {
    //   title: $t('common.createTime'),
    //   field: 'createdAt',
    //   formatter: 'formatDateTime',
    // },

  ],
};

export const searchFormSchemas: VbenFormProps = {
  schema: [
  {
    fieldName: 'address',
    label: $t('storage_provider.storageProvider.address'),
    component: 'Input',
     },
  {
    fieldName: 'location',
    label: $t('storage_provider.storageProvider.location'),
    component: 'Input',
     },
  {
    fieldName: 'organization',
    label: $t('storage_provider.storageProvider.organization'),
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
    fieldName: 'address',
    label: $t('storage_provider.storageProvider.address'),
    component: 'Input',
  },
  {
    fieldName: 'location',
    label: $t('storage_provider.storageProvider.location'),
    component: 'Input',
  },
  {
    fieldName: 'organization',
    label: $t('storage_provider.storageProvider.organization'),
    component: 'Input',
  },
  {
    fieldName: 'totalDeals',
    label: $t('storage_provider.storageProvider.totalDeals'),
    component: 'InputNumber',
    suffix: () => h('span', { class: 'text-red-400' }, 'TiB'),
    componentProps: {
      class: 'w-full',
    }
  },
  {
    fieldName: 'percentage',
    label: $t('storage_provider.storageProvider.percentage'),
    component: 'InputNumber',
    componentProps: {
      class: 'w-full',
      min: 0,
      max: 100,
      formatter: (value:any) => `${value * 100}%`,
      parser: (value:any) => Number(value.replace('%', '')) / 100,
    }
  },
  {
    fieldName: 'uniqueData',
    label: $t('storage_provider.storageProvider.uniqueData'),
    component: 'InputNumber',
    suffix: () => h('span', { class: 'text-red-400' }, 'TiB'),
    componentProps: {
      class: 'w-full',
    }
  },
  {
    fieldName: 'duplicate',
    label: $t('storage_provider.storageProvider.duplicate'),
    component: 'InputNumber',
    componentProps: {
      class: 'w-full',
      min: 0,
      max: 100,
      formatter: (value:any) => `${value * 100}%`,
      parser: (value:any) => Number(value.replace('%', '')) / 100,
    }
  },
  {
    fieldName: 'retrievalRate',
    label: $t('storage_provider.storageProvider.retrievalRate'),
    component: 'InputNumber',
    componentProps: {
      class: 'w-full',
      min: 0,
      max: 100,
      formatter: (value:any) => `${value * 100}%`,
      parser: (value:any) => Number(value.replace('%', '')) / 100,
    }
  },
  {
    fieldName: 'remark',
    label: $t('storage_provider.storageProvider.remark'),
    component: 'Input',
  },
  {
    fieldName: 'applicationId',
    label: $t('storage_provider.storageProvider.applicationId'),
    component: 'InputNumber',
    componentProps: {
      class: 'w-full',
    },
    dependencies: {
      show: false,
      triggerFields: ['applicationId'],
    },
  },
  // {
  //   fieldName: 'status',
  //   label: $t('storage_provider.storageProvider.status'),
  //   component: 'RadioButtonGroup',
  //   defaultValue: 1,
  //   componentProps: {
  //     options: [
  //       { label: $t('common.on'), value: 1 },
  //       { label: $t('common.off'), value: 2 },
  //     ],
  //   },
  // },
  ],
};
