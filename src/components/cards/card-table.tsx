/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import bootstrapJpg from '~/assets/images/bootstrap.jpg';
import angularJpg from '~/assets/images/angular.jpg';
import sketchJpg from '~/assets/images/sketch.jpg';
import reactJpg from '~/assets/images/react.jpg';
import vueJpg from '~/assets/images/vue.jpg';
import team_1_800x800_jpg from '~/assets/images/team-1-800x800.jpg';
import team_2_800x800_jpg from '~/assets/images/team-2-800x800.jpg';
import team_3_800x800_jpg from '~/assets/images/team-3-800x800.jpg';
import team_4_470x470_jpg from '~/assets/images/team-4-470x470.png';

// components

import { NotificationDropdown as TableDropdown } from '~/components/dropdowns/table-dropdown';
import { FaCircle } from 'react-icons/fa';
import { Icon } from '@chakra-ui/react';

type CardTableProps = {
  color?: 'light' | 'dark';
};

export function CardTable({ color = 'light' }: CardTableProps) {
  // console.log('color', color);
  return (
    <>
      <div
        className={
          'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded ' +
          (color === 'light' ? 'bg-white' : 'bg-slate-700 text-white')
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={'font-semibold text-lg ' + (color === 'light' ? 'text-slate-700' : 'text-white')}>
                Card Tables
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-slate-600 text-slate-200 border-slate-500')
                  }
                >
                  Project
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-slate-600 text-slate-200 border-slate-500')
                  }
                >
                  Budget
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-slate-600 text-slate-200 border-slate-500')
                  }
                >
                  Status
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-slate-600 text-slate-200 border-slate-500')
                  }
                >
                  Users
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-slate-600 text-slate-200 border-slate-500')
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    'px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
                    (color === 'light'
                      ? 'bg-slate-50 text-slate-500 border-slate-100'
                      : 'bg-slate-600 text-slate-200 border-slate-500')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    // src="/img/bootstrap.jpg"
                    src={bootstrapJpg.src}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-slate-600' : 'text-white')}>
                    Argon Design System
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,500 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-circle text-orange-500 mr-2"></i> */}
                  <Icon as={FaCircle} className="text-orange-500 mr-2" />
                  pending
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      // src="/img/team-1-800x800.jpg"
                      src={team_1_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                    ></img>
                    <img
                      // src="/img/team-2-800x800.jpg"
                      src={team_2_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-3-800x800.jpg"
                      src={team_3_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-4-470x470.png"
                      src={team_4_470x470_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: '60%' }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    // src="/img/angular.jpg"
                    src={angularJpg.src}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-slate-600' : 'text-white')}>
                    Angular Now UI Kit PRO
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $1,800 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-circle text-emerald-500 mr-2"></i> */}
                  <Icon as={FaCircle} className="text-emerald-500 mr-2" />
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      // src="/img/team-1-800x800.jpg"
                      src={team_1_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                    ></img>
                    <img
                      // src="/img/team-2-800x800.jpg"
                      src={team_2_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-3-800x800.jpg"
                      src={team_3_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-4-470x470.png"
                      src={team_4_470x470_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: '100%' }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    // src="/img/sketch.jpg"
                    src={sketchJpg.src}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-slate-600' : 'text-white')}>
                    Black Dashboard Sketch
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $3,150 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-circle text-red-500 mr-2"></i> */}
                  <Icon as={FaCircle} className="text-red-500 mr-2" />
                  delayed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      // src="/img/team-1-800x800.jpg"
                      src={team_1_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                    ></img>
                    <img
                      // src="/img/team-2-800x800.jpg"
                      src={team_2_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-3-800x800.jpg"
                      src={team_3_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-4-470x470.png"
                      src={team_4_470x470_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">73%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                        <div
                          style={{ width: '73%' }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    // src="/img/react.jpg"
                    src={reactJpg.src}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-slate-600' : 'text-white')}>
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $4,400 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-circle text-teal-500 mr-2"></i> */}
                  <Icon as={FaCircle} className="text-teal-500 mr-2" />
                  on schedule
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      // src="/img/team-1-800x800.jpg"
                      src={team_1_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                    ></img>
                    <img
                      // src="/img/team-2-800x800.jpg"
                      src={team_2_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-3-800x800.jpg"
                      src={team_3_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-4-470x470.png"
                      src={team_4_470x470_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">90%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-teal-200">
                        <div
                          style={{ width: '90%' }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  <img
                    // src="/img/vue.jpg"
                    src={vueJpg.src}
                    className="h-12 w-12 bg-white rounded-full border"
                    alt="..."
                  ></img>{' '}
                  <span className={'ml-3 font-bold ' + +(color === 'light' ? 'text-slate-600' : 'text-white')}>
                    React Material Dashboard
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  $2,200 USD
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  {/* <i className="fas fa-circle text-emerald-500 mr-2"></i> */}
                  <Icon as={FaCircle} className="text-emerald-500 mr-2" />
                  completed
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex">
                    <img
                      // src="/img/team-1-800x800.jpg"
                      src={team_1_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow"
                    ></img>
                    <img
                      // src="/img/team-2-800x800.jpg"
                      src={team_2_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-3-800x800.jpg"
                      src={team_3_800x800_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                    <img
                      // src="/img/team-4-470x470.png"
                      src={team_4_470x470_jpg.src}
                      alt="..."
                      className="w-10 h-10 rounded-full border-2 border-slate-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <div className="flex items-center">
                    <span className="mr-2">100%</span>
                    <div className="relative w-full">
                      <div className="overflow-hidden h-2 text-xs flex rounded bg-emerald-200">
                        <div
                          style={{ width: '100%' }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                  <TableDropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
