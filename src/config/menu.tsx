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
      {
        id: 'stack',
        name: '栈',
        route: '/dataStructures/stack',
      },
      {
        id: 'linkedList',
        name: '链表',
        route: '/dataStructures/linkedList',
      },
      {
        id: 'doublyLinkedList',
        name: '双向链表',
        route: '/dataStructures/doublyLinkedList',
      },
    ],
  },
  {
    id: 'sortAlgorithms',
    name: '排序算法',
    children: [
      {
        id: 'bubbleSort',
        name: '冒泡排序',
        route: '/algorithms/bubbleSort',
      },
      {
        id: 'selectSort',
        name: '选择排序',
        route: '/algorithms/selectSort',
      },
      {
        id: 'insertSort',
        name: '插入排序',
        route: '/algorithms/insertSort',
      },
      {
        id: 'shellSort',
        name: '希尔排序',
        route: '/algorithms/shellSort',
      },
      {
        id: 'quickSort',
        name: '快速排序',
        route: '/algorithms/quickSort',
      },
    ]
  },
  {
    id: 'otherAlgorithms',
    name: '其他算法',
    children: [
      {
        id: 'josepfuQuestion',
        name: '约瑟夫问题',
        route: '/algorithms/josepfuQuestion',
      },
      {
        id: 'mazeQuestion',
        name: '迷宫问题',
        route: '/algorithms/mazeQuestion',
      },
      {
        id: 'eightQueens',
        name: '八皇后问题',
        route: '/algorithms/eightQueens',
      },
    ]
  },
];

export const menu = treeToArray(menuTreeOrigin);
export const menuTree = arrayToTree(menu);
