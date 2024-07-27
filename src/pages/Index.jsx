// Update this page (the content is just a fallback if you fail to update the page)

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Slider } from "@/components/ui/slider";

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(50);

  const data1 = [
    { name: 'Step 1', value: 25 },
    { name: 'Step 2', value: 50 },
    { name: 'Step 3', value: 75 },
    { name: 'Step 4', value: 100 },
  ];

  const data2 = [
    { name: 'Item 1', value1: 10, value2: 20, value3: 30 },
    { name: 'Item 2', value1: 15, value2: 25, value3: 35 },
    { name: 'Item 3', value1: 20, value2: 30, value3: 40 },
    { name: 'Item 4', value1: 25, value2: 35, value3: 45 },
  ];

  const data3 = [
    { title: 'Title 1', percentage: 40 },
    { title: 'Title 2', percentage: 64 },
    { title: 'Title 3', percentage: 72 },
  ];

  return (
    <div className="p-6 bg-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-2">It's all about the</h1>
        <h2 className="text-5xl font-bold text-center text-purple-900 mb-4">Informational Data Infographic</h2>
        <p className="text-center text-gray-600 mb-8">
          Infographic makes it easier for readers to absorb chunks of information. Shortly explain here what will this infographic cover.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 1</h3>
            <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="flex justify-between">
              {data1.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : index === 2 ? 'bg-purple-400' : 'bg-blue-400'}`}>
                    {index === 0 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
                    {index === 1 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                    {index === 2 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    {index === 3 && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                  </div>
                  <span className="mt-2 text-sm font-medium text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 2</h3>
            <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data2}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value1" stackId="a" fill="#8884d8" />
                  <Bar dataKey="value2" stackId="a" fill="#82ca9d" />
                  <Bar dataKey="value3" stackId="a" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 3</h3>
            <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="grid grid-cols-6 gap-1">
              {Array.from({ length: 24 }, (_, i) => (
                <div key={i} className={`w-full pt-full rounded-full ${i < 12 ? 'bg-red-400' : i < 18 ? 'bg-orange-400' : 'bg-yellow-400'}`}></div>
              ))}
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 4</h3>
            <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="space-y-4">
              {data3.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-24 text-right mr-4">{item.title}</div>
                  <div className="flex-grow bg-gray-200 rounded-full h-4">
                    <div
                      className={`h-full rounded-full ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : 'bg-purple-400'}`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <div className="w-12 text-left ml-4">{item.percentage}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 5</h3>
          <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
          <div className="relative h-32">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-24 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 rounded-full"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-44 h-20 bg-white rounded-full"></div>
            </div>
            <div
              className="absolute top-1/2 left-1/2 w-1 h-20 bg-blue-600 origin-bottom transform -translate-x-1/2 -translate-y-full"
              style={{ rotate: `${(gaugeValue / 100) * 180 - 90}deg` }}
            ></div>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Control Gauge</h3>
          <Slider
            value={[gaugeValue]}
            onValueChange={(value) => setGaugeValue(value[0])}
            max={100}
            step={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
