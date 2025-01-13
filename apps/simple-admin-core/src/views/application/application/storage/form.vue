<script lang="ts" setup>
    import type { StorageProviderInfo } from '#/api/storage_provider/model/storageProviderModel';

    import { ref } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message } from 'ant-design-vue';

    import { useVbenForm } from '#/adapter/form';
    import { createStorageProvider, updateStorageProvider } from '#/api/storage_provider/storageProvider';

    import { dataFormSchemas } from './schemas';

    defineOptions({
        name: 'StorageProviderForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();
    const applicationId = ref();

    async function onSubmit(values: Record<string, any>) {
        const result = isUpdate.value
            ? await updateStorageProvider(Object.assign({},values as StorageProviderInfo,{applicationId:applicationId.value}))
            : await createStorageProvider(Object.assign({},values as StorageProviderInfo,{applicationId:applicationId.value}));
        if (result.code === 0) {
            message.success(result.msg);
            gridApi.value.reload();
            modalApi.close();
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
            await formApi.validateAndSubmitForm();
        },
        onOpenChange(isOpen: boolean) {
            isUpdate.value = modalApi.getData()?.isUpdate;
            record.value = isOpen ? modalApi.getData()?.record || {} : {};
            applicationId.value = isOpen ? modalApi.getData()?.applicationId || {} : {};
            gridApi.value = isOpen ? modalApi.getData()?.gridApi : null;
            if (isOpen) {
                formApi.setValues(applicationId.value);
                formApi.setValues(record.value);
            }
            modalApi.setState({
                title: isUpdate.value ? $t('storage_provider.storageProvider.editStorageProvider') : $t('storage_provider.storageProvider.addStorageProvider'),
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
