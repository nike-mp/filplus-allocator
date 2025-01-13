<script lang="ts" setup>
    import type { AllocationPlanInfo } from '#/api/allocation_plan/model/allocationPlanModel';

    import { ref } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message } from 'ant-design-vue';

    import { useVbenForm } from '#/adapter/form';
    import { createAllocationPlan, updateAllocationPlan } from '#/api/allocation_plan/allocationPlan';

    import { dataFormSchemas } from './schemas';

    defineOptions({
        name: 'AllocationPlanForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();

    async function onSubmit(values: Record<string, any>) {
        const result = isUpdate.value
            ? await updateAllocationPlan(values as AllocationPlanInfo)
            : await createAllocationPlan(values as AllocationPlanInfo);
        if (result.code === 0) {
            message.success(result.msg);
            gridApi.value.reload();
        }
    }

    const [Form, formApi] = useVbenForm({
        handleSubmit: onSubmit,
        schema: [...(dataFormSchemas.schema as any)],
        showDefaultActions: false,
        layout: 'vertical',
    });

    const [Modal, modalApi] = useVbenModal({
        fullscreenButton: false,
        onCancel() {
            modalApi.close();
        },
        onConfirm: async () => {
            await formApi.submitForm();
            modalApi.close();
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
