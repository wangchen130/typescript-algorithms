// import React from 'react';
// import { HomeOutlined, BulbOutlined } from '@ant-design/icons';
import { treeToArray, arrayToTree } from '../utils';

export interface MenuItemType {
  // 名称
  name: string;
  // 唯一标识，与后端数据一致(部分后端不存在数据的模块例外，例如个人中心)
  id: string;
  // 图标
  icon?: string;
  // 孩子
  children?: MenuItemType[];
  // 路由
  route?: string;
}
const menuTreeOrigin = [
  {
    id: 'dataStructures',
    name: '数据结构',
    children: [
      {
        id: 'sparseArray',
        name: '稀疏数组',
        route: '/dataStructures/sparseArray',
      },
      {
        id: 'queue',
        name: '队列',
        route: '/dataStructures/queue',
      },
    ],
  },
  {
    id: 'algorithms',
    name: '算法',
    route: '/algorithms',
  },
];

export const menu = treeToArray(menuTreeOrigin);
export const menuTree = arrayToTree(menu);