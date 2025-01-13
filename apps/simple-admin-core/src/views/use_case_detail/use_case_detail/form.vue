<script lang="ts" setup>
    import type { UseCaseDetailInfo } from '#/api/use_case_detail/model/useCaseDetailModel';

    import { ref } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message } from 'ant-design-vue';

    import { useVbenForm } from '#/adapter/form';
    import { createUseCaseDetail, updateUseCaseDetail } from '#/api/use_case_detail/useCaseDetail';

    import { dataFormSchemas } from './schemas';

    defineOptions({
        name: 'UseCaseDetailForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();

    async function onSubmit(values: Record<string, any>) {
        const result = isUpdate.value
            ? await updateUseCaseDetail(values as UseCaseDetailInfo)
            : await createUseCaseDetail(values as UseCaseDetailInfo);
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
                title: isUpdate.value ? $t('use_case_detail.useCaseDetail.editUseCaseDetail') : $t('use_case_detail.useCaseDetail.addUseCaseDetail'),
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
