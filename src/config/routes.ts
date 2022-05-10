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
    ],
  },
];

export { adminRoutes };
