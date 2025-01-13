<script lang="ts" setup>
import type { VxeGridListeners, VxeGridProps } from '#/adapter/vxe-table';
import type { ApplicationInfo } from '#/api/application/model/applicationModel';
import { useRouter } from 'vue-router';

import { h, ref } from 'vue';

import { Page, useVbenModal, useVbenDrawer, type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { Button, Modal } from 'ant-design-vue';
import { isPlainObject } from 'remeda';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import {
  deleteApplication,
  getApplicationList,
} from '#/api/application/application';
import { type ActionItem, TableAction } from '#/components/table/table-action';

import ApplicationForm from './form.vue';
import ProjectDetailForm from './projectDetailForm.vue';
import UserCaseDetailForm from './userCaseDetailForm.vue';
import AllocationPlanForm from './allocationPlanForm.vue';
import ApplicationDetailForm from './detail.vue';
import { searchFormSchemas, tableColumns } from './schemas';

import storageProviderListDrawer from './storage/storageProviderListDrawer.vue';

defineOptions({
  name: 'ApplicationManagement',
});

const [StorageProviderDrawer, drawerStorageProviderApi] = useVbenDrawer({
  connectedComponent: storageProviderListDrawer,
  class: 'sc-w80',
});

// ---------------- form -----------------

const [FormDetailModal, formDetailModalApi] = useVbenModal({
  connectedComponent: ApplicationDetailForm,
  class: 'sc-w80',
});

const [FormModal, formModalApi] = useVbenModal({
  connectedComponent: ApplicationForm,
});

const [FormProjectDetailModal, formProjectDetailModalApi] = useVbenModal({
  connectedComponent: ProjectDetailForm,
});

const [FormUseCaseDetailModal, formUseCaseDetailModalApi] = useVbenModal({
  connectedComponent: UserCaseDetailForm,
});

const [FormAllocationPlanModal, formAllocationPlanModalApi] = useVbenModal({
  connectedComponent: AllocationPlanForm,
});

const showDeleteButton = ref<boolean>(false);
const applicationList = ref<any>();

const gridEvents: VxeGridListeners<any> = {
  checkboxChange(e) {
    showDeleteButton.value = e.$table.getCheckboxRecords().length > 0;
  },
  checkboxAll(e) {
    showDeleteButton.value = e.$table.getCheckboxRecords().length > 0;
  },
};

const formOptions: VbenFormProps = {
  // 默认展开
  collapsed: false,
  schema: [...(searchFormSchemas.schema as any)],
  // 控制表单是否显示折叠按钮
  showCollapseButton: true,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

// ------------- table --------------------

const gridOptions: VxeGridProps<ApplicationInfo> = {
  checkboxConfig: {
    highlight: true,
  },
  toolbarConfig: {
    slots: {
      buttons: 'toolbar-buttons',
    },
  },
  columns: [
    ...(tableColumns.columns as any),
    {
      title: $t('common.action'),
      fixed: 'right',
      field: 'action',
      slots: {
        default: ({ row }) =>
          h(TableAction, {
            actions: [
              {
                type: 'link',
                icon: 'ant-design:book-outlined',
                tooltip: $t('application.application.DetailApplication'),
                onClick: openFormDetailModal.bind(null, row),
              },
              {
                type: 'link',
                icon: 'ant-design:api-outlined',
                tooltip: $t('application.application.DetailStorageProvider'),
                onClick: openStorageProviderDrawer.bind(null,row),
              },
              // {
              //   type: 'link',
              //   icon: 'clarity:note-edit-line',
              //   tooltip: $t('common.edit'),
              //   onClick: openFormModal.bind(null, row),
              // },
              // {
              //   type: 'link',
              //   icon: 'clarity:note-edit-line',
              //   tooltip: $t('common.editProjectDetails'),
              //   onClick: openFormProjectDetaiModal.bind(null, row),
              // },
              // {
              //   type: 'link',
              //   icon: 'clarity:note-edit-line',
              //   tooltip: $t('common.editUseCaseDetail'),
              //   onClick: openFormUseCaseDetailModal.bind(null, row),
              // },
              // {
              //   type: 'link',
              //   icon: 'clarity:note-edit-line',
              //   tooltip: $t('common.editAllocationPlan'),
              //   onClick: openFormAllocationPlanModal.bind(null, row),
              // },
              // {
              //   icon: 'ant-design:delete-outlined',
              //   type: 'link',
              //   color: 'error',
              //   tooltip: $t('common.delete'),
              //   popConfirm: {
              //     title: $t('common.deleteConfirm'),
              //     placement: 'left',
              //     confirm: batchDelete.bind(null, [row.id]),
              //   },
              // },
            ] as ActionItem[],
          }),
      },
    },
  ],
  // height: 'auto',
  keepSource: true,
  pagerConfig: {},
  proxyConfig: {
    ajax: {
      query: async ({ page }, formValues) => {
        const res = await getApplicationList({
          page: page.currentPage,
          pageSize: page.pageSize,
          ...formValues,
        });
        const d = res.data
        d.data.forEach(item=>{
          item['applicationId'] = item.id
        })
        applicationList.value = d.data;
        return d;
      },
    },
  },
};

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions,
  gridOptions,
  gridEvents,
});

function openStorageProviderDrawer(record: any) {
  drawerStorageProviderApi.setData({
    applicationId: record.id,
  });
  drawerStorageProviderApi.open();
}

function openFormDetailModal(record: any) {
  if (isPlainObject(record)) {
    formDetailModalApi.setData({
      record,
      isUpdate: true,
      gridApi,
    });
  } else {
    formDetailModalApi.setData({
      record: null,
      isUpdate: false,
      gridApi,
    });
  }
  formDetailModalApi.open();
}

function openFormModal(record: any) {
  if (isPlainObject(record)) {
    formModalApi.setData({
      record,
      isUpdate: true,
      gridApi,
    });
  } else {
    formModalApi.setData({
      record: null,
      isUpdate: false,
      gridApi,
    });
  }
  formModalApi.open();
}

function openFormProjectDetaiModal(record: any) {
  if (isPlainObject(record)) {
    formProjectDetailModalApi.setData({
      record,
      isUpdate: true,
      gridApi,
    });
  } else {
    formProjectDetailModalApi.setData({
      record: null,
      isUpdate: false,
      gridApi,
    });
  }
  formProjectDetailModalApi.open();
}

function openFormUseCaseDetailModal(record: any) {
  if (isPlainObject(record)) {
    formUseCaseDetailModalApi.setData({
      record,
      isUpdate: true,
      gridApi,
    });
  } else {
    formUseCaseDetailModalApi.setData({
      record: null,
      isUpdate: false,
      gridApi,
    });
  }
  formUseCaseDetailModalApi.open();
}

function openFormAllocationPlanModal(record: any) {
  if (isPlainObject(record)) {
    formAllocationPlanModalApi.setData({
      record,
      isUpdate: true,
      gridApi,
    });
  } else {
    formAllocationPlanModalApi.setData({
      record: null,
      isUpdate: false,
      gridApi,
    });
  }
  formAllocationPlanModalApi.open();
}

function handleBatchDelete() {
  Modal.confirm({
    title: $t('common.deleteConfirm'),
    async onOk() {
      const ids = gridApi.grid.getCheckboxRecords().map((item: any) => item.id);

      batchDelete(ids);
    },
  });
}

async function batchDelete(ids: any[]) {
  const result = await deleteApplication({
    ids,
  });
  if (result.code === 0) {
    await gridApi.reload();
    showDeleteButton.value = false;
  }
}

const handleChildEvent = (value: any) => {
  applicationList.value.forEach((item: any)=>{
    if(value.id == item.id){
      if (value.type.value) {
        // 更新
        item['applicationId'] = item.id
        formProjectDetailModalApi.setData({
          record: {...value.detailData.value},
          isUpdate: true,
          gridApi,
        });
      } else {
        // 创建
        formProjectDetailModalApi.setData({
          record: {
            applicationId: item.id
          },
          isUpdate: false,
          gridApi,
        });
      }
      formProjectDetailModalApi.open();
    }
  })
};

const handleChildEventBasciInfo = (value: any) => {
  applicationList.value.forEach((item: any)=>{
    if(value.id == item.id){
      if (value.type.value) {
        // 更新
        item['applicationId'] = item.id
        formModalApi.setData({
          record: {...value.basciInfo.value},
          isUpdate: true,
          gridApi,
        });
      } else {
        // 创建
        formModalApi.setData({
          record: {
            applicationId: item.id
          },
          isUpdate: false,
          gridApi,
        });
      }
      formModalApi.open();
    }
  })
};

const handleChildEventUseCase = (value: any) => {
  applicationList.value.forEach((item: any)=>{
    if(value.id == item.id){
      if (value.type.value) {
        // 更新
        item['applicationId'] = item.id
        formUseCaseDetailModalApi.setData({
          record: {...value.UseCaseDetail.value},
          isUpdate: true,
          gridApi,
        });
      } else {
        // 创建
        formUseCaseDetailModalApi.setData({
          record: {
            applicationId: item.id
          },
          isUpdate: false,
          gridApi,
        });
      }
      formUseCaseDetailModalApi.open();
    }
  })
}

const handleChildEventAllocationPlan = (value: any) => {
  applicationList.value.forEach((item: any)=>{
    if(value.id == item.id){
      if (value.type.value) {
        // 更新
        item['applicationId'] = item.id
        formAllocationPlanModalApi.setData({
          record: {...value.AllocationPlan.value},
          isUpdate: true,
          gridApi,
        });
      } else {
        // 创建
        formAllocationPlanModalApi.setData({
          record: {
            applicationId: item.id
          },
          isUpdate: false,
          gridApi,
        });
      }
      formAllocationPlanModalApi.open();
    }
  })
}

const upInit = (value: any) => {
  formDetailModalApi.close()
  applicationList.value.forEach((item: any)=>{
    if(value == item.id){
      formDetailModalApi.setData({
        record: item,
        isUpdate: true,
        gridApi,
      });
      formDetailModalApi.open();
    }
  })
}
</script>

<template>
  <Page auto-content-height>
    <FormDetailModal @childEvent="handleChildEvent" @childEventBasciInfo="handleChildEventBasciInfo" @childEventUseCase="handleChildEventUseCase" @childEventAllocationPlan="handleChildEventAllocationPlan"/>
    <FormModal @upInit="upInit"/>
    <FormProjectDetailModal @upInit="upInit"/>
    <FormUseCaseDetailModal @upInit="upInit"/>
    <FormAllocationPlanModal @upInit="upInit"/>
    <StorageProviderDrawer />
    <Grid>
      <template #toolbar-buttons>
        <Button
          v-show="showDeleteButton"
          danger
          type="primary"
          @click="handleBatchDelete"
        >
          {{ $t('common.delete') }}
        </Button>
      </template>

      <template #toolbar-tools>
        <Button type="primary" @click="openFormModal">
          {{ $t('application.application.addApplication') }}
        </Button>
      </template>
    </Grid>
  </Page>
</template>
<style lang="less">
.sc-w80{
  width: 80%;
}
</style>
