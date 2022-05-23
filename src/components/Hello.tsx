import React from 'react';
import { connect } from 'dva';

// @connect(({ system }) => ({ system })) // 装饰器应匹配类组件
const hello = (props) => {
  const btnFn = async () => {
    // 通过dispatch 调用文件下的save 改变dva 下 system 的 state的状态值
    props.dispatch({
      type: 'system/save', // type，命名空间/reducers方法名
      payload: {
        dataList: props.system.dataList + 1, // payload，参数
      },
    });
  };

  return (
    <div>
      <button onClick={btnFn}>点击</button>
      {props.system.dataList}
    </div>
  );
};

// 建立组件与dva的连接
export default connect(({ system }) => ({ system }))(hello);
// export default hello
