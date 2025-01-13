<script lang="ts" setup>
    import type { ApplicationInfo } from '#/api/application/model/applicationModel';

    import { ref, defineEmits } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message } from 'ant-design-vue';

    import { useVbenForm, z } from '#/adapter/form';
    import { createApplication, updateApplication } from '#/api/application/application';

    import { dataFormSchemas } from './schemas';
    const emit = defineEmits(['upInit']);

    defineOptions({
        name: 'ApplicationForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();
    const formRef = ref();

    async function onSubmit(values: Record<string, any>) {
        const result = isUpdate.value
            ? await updateApplication(values as ApplicationInfo)
            : await createApplication(values as ApplicationInfo);
        if (result.code === 0) {
            message.success(result.msg);
            gridApi.value.reload();
            emit('upInit', record.value.id);
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
            gridApi.value = isOpen ? modalApi.getData()?.gridApi : null;
            if (isOpen) {
                formApi.setValues(record.value);
            }
            modalApi.setState({
                title: isUpdate.value ? $t('application.application.editApplication') : $t('application.application.addApplication'),
            });
        },
    });

    defineExpose(modalApi);
</script>
<template>
    <Modal>
        <Form ref="formRef" />
    </Modal>
</template>
