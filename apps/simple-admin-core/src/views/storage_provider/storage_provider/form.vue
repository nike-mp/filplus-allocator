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

    async function onSubmit(values: Record<string, any>) {
        const result = isUpdate.value
            ? await updateStorageProvider(values as StorageProviderInfo)
            : await createStorageProvider(values as StorageProviderInfo);
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
