<script lang="ts" setup>
import type { VxeGridListeners, VxeGridProps } from '#/adapter/vxe-table';
import type { MemberInfo } from '#/api/member/model/memberModel';

import { h, onMounted, ref } from 'vue';

import { Page, useVbenModal, type VbenFormProps } from '@vben/common-ui';
import { $t } from '@vben/locales';

import { Button, Card, Col, message, Modal, Row, Tree } from 'ant-design-vue';
import { isPlainObject } from 'remeda';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { deleteMember, getMemberList } from '#/api/member/member';
import { getMemberRankList } from '#/api/member/memberRank';
import { logout } from '#/api/member/token';
import { type ActionItem, TableAction } from '#/components/table/table-action';
import { buildDataNode } from '#/utils/tree';

import MemberForm from './form.vue';
import { searchFormSchemas, tableColumns } from './schema';

defineOptions({
  name: 'MemberManagement',
});

// ------------ department -------------------

const treeData = ref();
const selectedRankId = ref();

async function fetchRankData() {
  const deptData = await getMemberRankList({ page: 1, pageSize: 1000 });
  treeData.value = buildDataNode(deptData.data.data, {
    labelField: 'trans',
    valueField: 'id',
    idKeyField: 'id',
    childrenKeyField: 'children',
    parentKeyField: 'parentId',
  });
}

function selectRank(data: any) {
  selectedRankId.value = data[0];
  // eslint-disable-next-line no-use-before-define
  gridApi.reload();
}

onMounted(() => {
  fetchRankData();
});

// ---------------- form -----------------

const [FormModal, formModalApi] = useVbenModal({
  connectedComponent: MemberForm,
});

const showDeleteButton = ref<boolean>(false);

const gridEvents: VxeGridListeners<any> = {
  checkboxChange(e) {
    showDeleteButton.value = e.$table.getCheckboxRecords().length > 0;
  },
  checkboxAll(e) {
    showDeleteButton.value = e.$table.getCheckboxRecords().length > 0;
  },
};

// ------------- table --------------------

const formOptions: VbenFormProps = {
  // 默认展开
  collapsed: false,
  schema: [...(searchFormSchemas.schema as any)],
  // 控制表单是否显示折叠按钮
  showCollapseButton: true,
  // 按下回车时是否提交表单
  submitOnEnter: false,
};

const gridOptions: VxeGridProps<MemberInfo> = {
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
                label: '',
                type: 'link',
                size: 'small',
                tooltip: $t('common.edit'),
                icon: 'clarity:note-edit-line',
                onClick: openFormModal.bind(null, row),
              },
              {
                icon: 'bx:log-out-circle',
                type: 'link',
                color: 'error',
                tooltip: $t('sys.user.forceLoggingOut'),
                popConfirm: {
                  title: $t('sys.user.forceLoggingOut'),
                  placement: 'left',
                  confirm: handleForceLogout.bind(null, row),
                },
              },
              {
                icon: 'ant-design:delete-outlined',
                type: 'link',
                color: 'error',
                tooltip: $t('common.delete'),
                popConfirm: {
                  title: $t('common.deleteConfirm'),
                  placement: 'left',
                  confirm: batchDelete.bind(null, [row.id]),
                },
              },
            ] as ActionItem[],
          }),
      },
    },
  ],
  height: 'auto',
  keepSource: true,
  pagerConfig: {},
  proxyConfig: {
    ajax: {
      query: async ({ page }, formValues) => {
        const res = await getMemberList({
          page: page.currentPage,
          pageSize: page.pageSize,
          rankId: selectedRankId.value,
          ...formValues,
        });
        return res.data;
      },
    },
  },
};

const [Grid, gridApi] = useVbenVxeGrid({
  formOptions,
  gridOptions,
  gridEvents,
});

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

function handleBatchDelete() {
  Modal.confirm({
    title: $t('common.deleteConfirm'),
    async onOk() {
      const rowData = gridApi.grid.getCheckboxRecords();
      if (rowData.some((row) => row.nickname === 'admin')) {
        message.warn($t('common.notAllowDeleteAdminData'));
        return;
      }

      const ids = gridApi.grid.getCheckboxRecords().map((item: any) => item.id);

      batchDelete(ids);
    },
  });
}

async function batchDelete(ids: any[]) {
  const result = await deleteMember({
    ids,
  });
  if (result.code === 0) {
    await gridApi.reload();
    showDeleteButton.value = false;
  }
}

async function handleForceLogout(record: any) {
  const result = await logout(record.id);
  if (result.code === 0) {
    message.success($t('common.successful'));
  }
}
</script>

<template>
  <Row>
    <Col :span="5">
      <Page auto-content-height>
        <Card :title="$t('sys.member.rankId')" style="height: 100%">
          <Tree :tree-data="treeData" block-node @select="selectRank" />
        </Card>
      </Page>
    </Col>
    <Col :span="19">
      <Page auto-content-height>
        <FormModal />
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
              {{ $t('sys.member.addMember') }}
            </Button>
          </template>
        </Grid>
      </Page>
    </Col>
  </Row>
</template>
