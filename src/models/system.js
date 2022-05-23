export default {
  // models命名空间，需全局唯一
  namespace: 'system',
  // models存储的数据store
  state: {
    dataList: 1,
  },
  // 更新store，用新数据合并state的旧数据
  reducers: {
    save(state, { payload }) {
      console.log('system-payload: ', payload);
      console.log('system-state: ', state);
      return { ...state, ...payload };
    },
  },
};
