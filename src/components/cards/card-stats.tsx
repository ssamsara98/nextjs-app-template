'use client';
import { As, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaArrowDown, FaArrowUp, FaQuestion, FaRegChartBar } from 'react-icons/fa';

type CardStatsProps = {
  statSubtitle?: string;
  statTitle?: string;
  statArrow?: 'up' | 'down';
  statPercent?: string;
  // can be any of the text color utilities
  // from tailwindcss
  statPercentColor?: string;
  statDescripiron?: string;
  // statIconName?: string;
  statIconName?: As;
  // can be any of the background color utilities
  // from tailwindcss
  statIconColor?: string;
};

export function CardStats({
  statSubtitle = 'Traffic',
  statTitle = '350,897',
  statArrow = 'up',
  statPercent = '3.48',
  statPercentColor = 'text-emerald-500',
  statDescripiron = 'Since last month',
  // statIconName = 'far fa-chart-bar',
  statIconName = FaRegChartBar,
  statIconColor = 'bg-red-500',
}: CardStatsProps) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-slate-400 uppercase font-bold text-xs">{statSubtitle}</h5>
              <span className="font-semibold text-xl text-slate-700">{statTitle}</span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                  statIconColor
                }
              >
                {/* <i className={statIconName}></i> */}
                <Icon as={statIconName} />
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            <span className={statPercentColor + ' mr-2'}>
              {/* <i
                className={statArrow === 'up' ? 'fas fa-arrow-up' : statArrow === 'down' ? 'fas fa-arrow-down' : ''}
              ></i> */}
              <Icon as={statArrow === 'up' ? FaArrowUp : statArrow === 'down' ? FaArrowDown : FaQuestion} />{' '}
              {statPercent}%
            </span>
            <span className="whitespace-nowrap">{statDescripiron}</span>
          </p>
        </div>
      </div>
    </>
  );
}
