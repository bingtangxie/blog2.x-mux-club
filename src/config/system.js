/*
 * Copyright (c) 2016-Now PhotoArtLife PD, All rights reseved.
 * @fileoverview | System Config Data
 * @Author: mukuashi@PhotoArtLife | mukuashi@qq.com
 * @Date:   2018-03-23 12:25:27
 * @version 0.1 | 2018-03-23  // Initial version.
 * @Last Modified by: mukuashi
 * @Last Modified time: 2018-04-17 02:38:04
*/
const nowYear = new Date().getFullYear();
//
export const data = {
  logo: {
    header: '',
    footer: '',
  },
  header: {
    logo: '',
    nav: [
      {
        id: 0,
        name: '首页',
        path: '/',
      },
      {
        id: 1,
        name: '项目篇(2016年及之前)',
        path: '/arts',
      },
      {
        id: 2,
        name: '背景篇',
        path: '/project',
      },
      {
        id: 3,
        name: '摄影篇',
        path: 'http://photoartlife.lofter.com',
      },
      {
        id: 4,
        name: '笔记篇',
        path: '/project/works/',
      },
    ],
  },
};