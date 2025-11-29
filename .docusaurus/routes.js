import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/game_assessments/',
    component: ComponentCreator('/game_assessments/', '9c1'),
    exact: true
  },
  {
    path: '/game_assessments/arc-raiders',
    component: ComponentCreator('/game_assessments/arc-raiders', '349'),
    exact: true
  },
  {
    path: '/game_assessments/insurgency-sandstorm',
    component: ComponentCreator('/game_assessments/insurgency-sandstorm', '73f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
