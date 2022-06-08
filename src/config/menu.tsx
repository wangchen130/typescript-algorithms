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
        route: '/sortAlgorithms/bubbleSort',
      },
      {
        id: 'selectSort',
        name: '选择排序',
        route: '/sortAlgorithms/selectSort',
      },
      {
        id: 'insertSort',
        name: '插入排序',
        route: '/sortAlgorithms/insertSort',
      },
      {
        id: 'shellSort',
        name: '希尔排序',
        route: '/sortAlgorithms/shellSort',
      },
      {
        id: 'quickSort',
        name: '快速排序',
        route: '/sortAlgorithms/quickSort',
      },
      {
        id: 'mergeSort',
        name: '归并排序',
        route: '/sortAlgorithms/mergeSort',
      },
      {
        id: 'radixSort',
        name: '基数排序',
        route: '/sortAlgorithms/radixSort',
      },
    ]
  },
  {
    id: 'searchAlgorithms',
    name: '查找算法',
    children: [
      {
        id: 'binarySearch',
        name: '二分查找',
        route: '/searchAlgorithms/binarySearch',
      },
      {
        id: 'insertValueSearch',
        name: '插值查找',
        route: '/searchAlgorithms/insertValueSearch',
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
        route: '/otherAlgorithms/josepfuQuestion',
      },
      {
        id: 'mazeQuestion',
        name: '迷宫问题',
        route: '/otherAlgorithms/mazeQuestion',
      },
      {
        id: 'eightQueens',
        name: '八皇后问题',
        route: '/otherAlgorithms/eightQueens',
      },
    ]
  },
];

export const menu = treeToArray(menuTreeOrigin);
export const menuTree = arrayToTree(menu);
