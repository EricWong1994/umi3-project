import React from 'react';
import HugeA from './HugeA';

// 像使用普通组件一样即可
// dynamic 为你做:
// 1. 异步加载该模块的 bundle
// 2. 加载期间 显示 loading（可定制）
// 3. 异步组件加载完毕后，显示异步组件

export default () => {
  return <HugeA />;
};
