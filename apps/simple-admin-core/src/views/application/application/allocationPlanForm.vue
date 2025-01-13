<script lang="ts" setup>
    import type { AllocationPlanInfo } from '#/api/allocation_plan/model/allocationPlanModel';

    import { ref, defineEmits } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message } from 'ant-design-vue';

    import { useVbenForm } from '#/adapter/form';
    import { createAllocationPlan, updateAllocationPlan } from '#/api/allocation_plan/allocationPlan';

    import { allocationPlanFormSchemas } from './schemas';
    const emit = defineEmits(['upInit']);

    defineOptions({
        name: 'AllocationPlanForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();

    function convertArraysToString(obj: Record<string, any>): Record<string, any> {
      const result: Record<string, any> = {};
      for (const [key, value] of Object.entries(obj)) {
        if (Array.isArray(value)) {
          result[key] = value.join(',');
        } else {
          result[key] = value;
        }
      }
      return result;
    }

    async function onSubmit(values: Record<string, any>) {
      const convertedObject = convertArraysToString(values as AllocationPlanInfo);
        const result = isUpdate.value
            ? await updateAllocationPlan(convertedObject)
            : await createAllocationPlan(convertedObject);
        if (result.code === 0) {
            message.success(result.msg);
            gridApi.value.reload();
            emit('upInit', record.value.applicationId);
            modalApi.close();
        }
    }

    const [Form, formApi] = useVbenForm({
        handleSubmit: onSubmit,
        schema: [...(allocationPlanFormSchemas.schema as any)],
        showDefaultActions: false,
        layout: 'vertical',
    });

    const [Modal, modalApi] = useVbenModal({
        fullscreenButton: false,
        onCancel() {
            modalApi.close();
        },
        onConfirm: async () => {
            await formApi.validateAndSubmitForm();
        },
        onOpenChange(isOpen: boolean) {
            isUpdate.value = modalApi.getData()?.isUpdate;
            record.value = isOpen ? modalApi.getData()?.record || {} : {};
            gridApi.value = isOpen ? modalApi.getData()?.gridApi : null;
            if (isOpen) {
                formApi.setValues(record.value);
            }
            modalApi.setState({
                title: isUpdate.value ? $t('allocation_plan.allocationPlan.editAllocationPlan') : $t('allocation_plan.allocationPlan.addAllocationPlan'),
            });
        },
    });

    defineExpose(modalApi);
</script>
<template>
    <Modal>
        <Form />
    </Modal>
</template>
