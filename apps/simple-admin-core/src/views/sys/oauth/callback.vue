<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

import { $t } from '@vben/locales';
import { useAccessStore } from '@vben/stores';

import { message } from 'ant-design-vue';

import { oauthLoginCallback } from '#/api/sys/oauthProvider';
import { useAuthStore } from '#/store';

const router = useRouter();

export default defineComponent({
  name: 'OauthCallbackPage',
  components: {},
  setup() {
    let qs = null
    if(router.currentRoute.value.redirectedFrom && router.currentRoute.value.redirectedFrom.query && router.currentRoute.value.redirectedFrom.query.code && router.currentRoute.value.redirectedFrom.query.state){
      qs = router.currentRoute.value.redirectedFrom.query
    }
    if(router.currentRoute.value.query.state && router.currentRoute.value.query.code){
      qs = router.currentRoute.value.query
    }
    if (
      qs
    ) {
      const query = ref<string>('');
      query.value += `?state=${qs.state}`;
      query.value += `&code=${qs.code}`;
    async function login(url: string) {
      try {
        const result = await oauthLoginCallback(url);
        const { token } = result;

        const accessStore = useAccessStore();
        const authStore = useAuthStore();
        // save token
        accessStore.setAccessToken(token);
        await authStore.fetchUserInfo();
      } catch {
        message.error($t('sys.oauth.createAccount'), 5);
        router.replace('/auth/login');
      }
    }

    login(query.value);
    return {};
  },
});
</script>
<template>
  <div></div>
</template>
