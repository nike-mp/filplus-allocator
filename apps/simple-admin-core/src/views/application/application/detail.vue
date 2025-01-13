<script lang="ts" setup>
    import { ref, defineEmits } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message,Descriptions, DescriptionsItem, Button } from 'ant-design-vue';

    import { useVbenForm } from '#/adapter/form';
    import { getApplicationById } from '#/api/application/application';
    import { getProjectDetailById } from '#/api/project_detail/projectDetail';
    import { getUseCaseDetailById } from '#/api/use_case_detail/useCaseDetail';
    import { getAllocationPlanById } from '#/api/allocation_plan/allocationPlan';

    defineOptions({
        name: 'ApplicationDetailForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();

    const basciInfo = ref();
    const showBasciInfo = ref<boolean>(false);

    const detailData = ref();
    const showProjectDetail = ref<boolean>(false);

    const UseCaseDetail = ref();
    const showUseCaseDetail = ref<boolean>(false);

    const AllocationPlan = ref();
    const showAllocationPlan = ref<boolean>(false);

    const emit = defineEmits(['childEvent','childEventBasciInfo','childEventUseCase','childEventAllocationPlan']);
    const sendToParent = () => {
      emit('childEvent', {type: showProjectDetail, id: record.value.id, detailData: detailData});
    };
    const sendToParentBasciInfo = () => {
      emit('childEventBasciInfo', {type: showBasciInfo, id: record.value.id, basciInfo: basciInfo});
    }
    const sendToParentUserCase = () => {
      emit('childEventUseCase', {type: showUseCaseDetail, id: record.value.id, UseCaseDetail: UseCaseDetail});
    };
    const sendToParentAllocationPlan = () => {
      emit('childEventAllocationPlan', {type: showAllocationPlan, id: record.value.id, AllocationPlan: AllocationPlan});
    }

    async function getInitData() {

      const rs1 = await getApplicationById({
        id: record.value.id
      })
      if(rs1.code == 0) {
        basciInfo.value = rs1.data
        showBasciInfo.value = true;
      }else{
        showBasciInfo.value = false;
      }

      const result = await getProjectDetailById({
        id: record.value.id
      });
      if(result.code == 0) {
        detailData.value = result.data
        showProjectDetail.value = true;
      }else{
        showProjectDetail.value = false;
      }

      const resultUseCaseDetail = await getUseCaseDetailById({
        id: record.value.id
      });
      if(resultUseCaseDetail.code == 0) {
        UseCaseDetail.value = resultUseCaseDetail.data
        showUseCaseDetail.value = true;
      }else{
        showUseCaseDetail.value = false;
      }

      const resultAllocationPlan = await getAllocationPlanById({
        id: record.value.id
      });
      if(resultAllocationPlan.code == 0) {
        AllocationPlan.value = resultAllocationPlan.data
        showAllocationPlan.value = true;
      }else{
        showAllocationPlan.value = false;
      }
    }
    

    const [Form, formApi] = useVbenForm({
        showDefaultActions: false,
        layout: 'vertical',
    });

    const [Modal, modalApi] = useVbenModal({
        fullscreenButton: false,
        onCancel() {
            modalApi.close();
        },
        onConfirm: async () => {
            modalApi.close();
        },
        async onOpenChange(isOpen: boolean) {
            isUpdate.value = modalApi.getData()?.isUpdate;
            record.value = isOpen ? modalApi.getData()?.record || {} : {};
            gridApi.value = isOpen ? modalApi.getData()?.gridApi : null;
            if (isOpen) {
              getInitData()
              formApi.setValues(record.value);
            }
            modalApi.setState({
                title: $t('application.application.DetailApplication'),
            });
        },
    });

    defineExpose(modalApi);
</script>
<template>
    <Modal>
      <!-- ProjectDetail -->
      <template v-if="showBasciInfo">
        <Descriptions :title="$t('application.application.DetailApplication')" bordered :column="2">
            <template #extra>
              <Button type="primary" @click="sendToParentBasciInfo">{{ $t('application.application.editApplication') }}</Button>
            </template>
            <DescriptionsItem :label="$t('application.application.applicant')">{{ basciInfo.applicant }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.owner')">{{ basciInfo.owner }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.country')">{{ basciInfo.country }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.industry')">{{ basciInfo.industry }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.website')">{{ basciInfo.website }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.social')">{{ basciInfo.social }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.socialType')">{{ basciInfo.socialType }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.role')">{{ basciInfo.role }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.totalAmount')">{{ basciInfo.totalAmount / 1024 }}PiB</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.expectedSize')">{{ basciInfo.expectedSize }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.replicas')">{{ basciInfo.replicas }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.weeklyAllocation')">{{ basciInfo.weeklyAllocation }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.address')">{{ basciInfo.address }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.dataType')">{{ basciInfo.dataType }}</DescriptionsItem>
            <DescriptionsItem :label="$t('application.application.identifier')">{{ basciInfo.identifier || '-' }}</DescriptionsItem>
        </Descriptions>
      </template>
      <template v-else>
        <Descriptions title="Project Details" bordered :column="1" layout="vertical">
          <template #extra>
              <Button type="primary" @click="sendToParentBasciInfo">{{ $t('application.application.addApplication') }}</Button>
            </template>
          <DescriptionsItem label="Add ProjectDetail">No Project Details</DescriptionsItem>
        </Descriptions>
      </template>

      <!-- ProjectDetail -->
      <br />
      <template v-if="showProjectDetail">
        <Descriptions title="Project Details" bordered :column="1" layout="vertical">
            <template #extra>
              <Button type="primary" @click="sendToParent">{{ $t('project_detail.projectDetail.editProjectDetail') }}</Button>
            </template>
            <DescriptionsItem :label="$t('project_detail.projectDetail.history')">{{ detailData.history }}</DescriptionsItem>
            <DescriptionsItem :label="$t('project_detail.projectDetail.associated')">{{ detailData.associated ? 'YES' : 'NO' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('project_detail.projectDetail.associatedAdd')">{{  detailData.associatedAdd || '-' }}</DescriptionsItem>
        </Descriptions>
      </template>
      <template v-else>
        <Descriptions title="Project Details" bordered :column="1" layout="vertical">
          <template #extra>
              <Button type="primary" @click="sendToParent">{{ $t('project_detail.projectDetail.addProjectDetail') }}</Button>
            </template>
          <DescriptionsItem label="Add ProjectDetail">{{ $t('common.Please') }}{{ $t('project_detail.projectDetail.addProjectDetail') }}</DescriptionsItem>
        </Descriptions>
      </template>

      <!-- UseCaseDetail -->
       <br />
      <template v-if="showUseCaseDetail">
        <Descriptions title="Use-case Details" bordered :column="1" layout="vertical">
            <template #extra>
              <Button type="primary" @click="sendToParentUserCase">{{ $t('use_case_detail.useCaseDetail.editUseCaseDetail') }}</Button>
            </template>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.describe')">{{ UseCaseDetail.describe }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.sourcedFrom')">{{ UseCaseDetail.sourcedFrom || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.sourcedFromAdd')">{{  UseCaseDetail.sourcedFromAdd }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.region')">{{ UseCaseDetail.region }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.preparedDes')">{{ UseCaseDetail.preparedDes || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.preparedNo')">{{ UseCaseDetail.preparedNo || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.explain')">{{ UseCaseDetail.explain || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.sample')">{{ UseCaseDetail.sample || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.confirm')">{{ UseCaseDetail.confirm ? 'YES' : 'NO' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.confirmAdd')">{{ UseCaseDetail.confirmAdd || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.retrievalFre')">{{ UseCaseDetail.retrievalFre || '-' }}</DescriptionsItem>
            <DescriptionsItem :label="$t('use_case_detail.useCaseDetail.storedTime')">{{ UseCaseDetail.storedTime }}</DescriptionsItem>
        </Descriptions>
      </template>
      <template v-else>
        <Descriptions title="Use-case Details" bordered :column="1" layout="vertical">
          <template #extra>
              <Button type="primary" @click="sendToParentUserCase">{{ $t('use_case_detail.useCaseDetail.addUseCaseDetail') }}</Button>
            </template>
          <DescriptionsItem label="Add UseCaseDetail">{{ $t('common.Please') }}{{ $t('use_case_detail.useCaseDetail.addUseCaseDetail') }}</DescriptionsItem>
        </Descriptions>
      </template>

      <!-- ProjectDetail -->
      <br />
      <template v-if="showAllocationPlan">
        <Descriptions title="DataCap Allocation Plan" bordered :column="1" layout="vertical">
            <template #extra>
              <Button type="primary" @click="sendToParentAllocationPlan">{{ $t('allocation_plan.allocationPlan.editAllocationPlan') }}</Button>
            </template>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.geography')">{{ AllocationPlan.geography }}</DescriptionsItem>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.distributeMethod')">{{ AllocationPlan.distributeMethod }}</DescriptionsItem>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.findMethod')">{{ AllocationPlan.findMethod }}</DescriptionsItem>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.findMethodAdd')">{{ AllocationPlan.findMethodAdd }}</DescriptionsItem>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.dealsPlan')">{{ AllocationPlan.dealsPlan }}</DescriptionsItem>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.dealsPlanAdd')">{{ AllocationPlan.dealsPlanAdd }}</DescriptionsItem>
            <DescriptionsItem :label="$t('allocation_plan.allocationPlan.followed')">{{ AllocationPlan.followed ? 'YES' : 'NO' }}</DescriptionsItem>
        </Descriptions>
      </template>
      <template v-else>
        <Descriptions title="DataCap Allocation Plan" bordered :column="1" layout="vertical">
          <template #extra>
              <Button type="primary" @click="sendToParentAllocationPlan">{{ $t('allocation_plan.allocationPlan.addAllocationPlan') }}</Button>
            </template>
          <DescriptionsItem label="Add AllocationPlan">{{ $t('common.Please') }}{{ $t('allocation_plan.allocationPlan.addAllocationPlan') }}</DescriptionsItem>
        </Descriptions>
      </template>
    </Modal>
</template>
