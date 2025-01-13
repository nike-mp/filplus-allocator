<script lang="ts" setup>
    import type { ProjectDetailInfo } from '#/api/project_detail/model/projectDetailModel';

    import { ref, defineEmits } from 'vue';

    import { useVbenModal } from '@vben/common-ui';
    import { $t } from '@vben/locales';

    import { message } from 'ant-design-vue';

    import { useVbenForm } from '#/adapter/form';
    import { createProjectDetail, updateProjectDetail } from '#/api/project_detail/projectDetail';

    import { projectDetailFormSchemas } from './schemas';
    const emit = defineEmits(['upInit']);

    defineOptions({
        name: 'ProjectDetailForm',
    });

    const record = ref();
    const isUpdate = ref(false);
    const gridApi = ref();

    async function onSubmit(values: Record<string, any>) {
        const result = isUpdate.value
            ? await updateProjectDetail(values as ProjectDetailInfo)
            : await createProjectDetail(values as ProjectDetailInfo);
        if (result.code === 0) {
            message.success(result.msg);
            gridApi.value.reload();
            emit('upInit', record.value.applicationId);
            modalApi.close();
        }
    }

    const [Form, formApi] = useVbenForm({
        handleSubmit: onSubmit,
        schema: [...(projectDetailFormSchemas.schema as any)],
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
                title: isUpdate.value ? $t('project_detail.projectDetail.editProjectDetail') : $t('project_detail.projectDetail.addProjectDetail'),
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
