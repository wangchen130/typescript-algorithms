import React from 'react';

export interface RouteItemType {
  // 路由路径
  path: string;
  // 组件
  component?: () => Promise<React.ReactNode>;
  // dva model
  models?: () => Promise<any>[];
  // 子路由
  childRoutes?: RouteItemType[];
}

const adminRoutes: RouteItemType[] = [
  {
    path: '/dataStructures',
    childRoutes: [
      {
        path: '/sparseArray',
        component: () => import('src/pages/dataStructures/sparseArray'),
      },
      {
        path: '/queue',
        component: () => import('src/pages/dataStructures/queue'),
      },
      {
        path: '/stack',
        component: () => import('src/pages/dataStructures/stack'),
      },
      {
        path: '/linkedList',
        component: () => import('src/pages/dataStructures/linkedList'),
      },
      {
        path: '/doublyLinkedList',
        component: () => import('src/pages/dataStructures/doublyLinkedList'),
      },
      {
        path: '/hashTable',
        component: () => import('src/pages/dataStructures/hashTable'),
      },
      {
        path: '/arrayBinaryTree',
        component: () => import('src/pages/dataStructures/tree/arrayBinaryTree'),
      },
      {
        path: '/huffmanTree',
        component: () => import('src/pages/dataStructures/tree/huffmanTree'),
      },
      {
        path: '/graph',
        component: () => import('src/pages/dataStructures/graph'),
      },
    ],
  },
  {
    path: '/sortAlgorithms',
    childRoutes: [
      {
        path: '/bubbleSort',
        component: () => import('src/pages/algorithms/sort/bubbleSort'),
      },
      {
        path: '/selectSort',
        component: () => import('src/pages/algorithms/sort/selectSort'),
      },
      {
        path: '/insertSort',
        component: () => import('src/pages/algorithms/sort/insertSort'),
      },
      {
        path: '/shellSort',
        component: () => import('src/pages/algorithms/sort/shellSort'),
      },
      {
        path: '/quickSort',
        component: () => import('src/pages/algorithms/sort/quickSort'),
      },
      {
        path: '/mergeSort',
        component: () => import('src/pages/algorithms/sort/mergeSort'),
      },
      {
        path: '/radixSort',
        component: () => import('src/pages/algorithms/sort/radixSort'),
      },
      {
        path: '/heapSort',
        component: () => import('src/pages/algorithms/sort/heapSort'),
      },
    ],
  },
  {
    path: '/searchAlgorithms',
    childRoutes: [
      {
        path: '/binarySearch',
        component: () => import('src/pages/algorithms/search/binarySearch'),
      },
      {
        path: '/insertValueSearch',
        component: () => import('src/pages/algorithms/search/insertValueSearch'),
      },
      {
        path: '/fibonacciSearch',
        component: () => import('src/pages/algorithms/search/fibonacciSearch'),
      },
    ],
  },
  {
    path: '/otherAlgorithms',
    childRoutes: [
      {
        path: '/josepfuQuestion',
        component: () => import('src/pages/algorithms/josepfuQuestion'),
      },
      {
        path: '/mazeQuestion',
        component: () => import('src/pages/algorithms/mazeQuestion'),
      },
      {
        path: '/eightQueens',
        component: () => import('src/pages/algorithms/eightQueens'),
      },
      {
        path: '/huffmanCode',
        component: () => import('src/pages/algorithms/huffmanCode'),
      },
      {
        path: '/divideAndConquerAlgorithm',
        component: () => import('src/pages/algorithms/divideAndConquerAlgorithm'),
      },
      {
        path: '/dynamicProgramming',
        component: () => import('src/pages/algorithms/dynamicProgramming'),
      },
    ],
  },
];

export { adminRoutes };
