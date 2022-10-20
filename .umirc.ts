import { defineConfig } from 'umi';

export default defineConfig({
  // layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mfsu: {},
  plugins: [require.resolve('@umijs/plugins/dist/unocss')],
  unocss: {
    watch: ['pages/**/*.tsx'], // 添加其他包含 unocss 的 classname 的文件目录
  },
});
