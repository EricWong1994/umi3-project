import styles from './index.less';
import React from 'react';
// import AsyncHugeA from '../components/AsyncHugeA'
import Hello from '../components/Hello';

export default function IndexPage() {
  return (
    <div>
      {/* <AsyncHugeA></AsyncHugeA> */}
      <h1 className={styles.title}>Page index</h1>
      <div>unocss test哈哈哈哈</div>
      <Hello></Hello>
    </div>
  );
}
