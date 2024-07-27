// Update this page (the content is just a fallback if you fail to update the page)

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Slider } from "@/components/ui/slider";

const Index = () => {
  const [gaugeValue, setGaugeValue] = useState(50);
  const [animatedData2, setAnimatedData2] = useState([]);
  const [animatedData3, setAnimatedData3] = useState([]);
  const [animatedData4, setAnimatedData4] = useState([]);

  const data1 = [
    { name: 'Step 1', value: 25, icon: '💡' },
    { name: 'Step 2', value: 50, icon: '📊' },
    { name: 'Step 3', value: 75, icon: '🔧' },
    { name: 'Step 4', value: 100, icon: '🎯' },
  ];

  const data2 = [
    { name: 'Item 1', value1: 10, value2: 10, value3: 15, value4: 15 },
    { name: 'Item 2', value1: 12, value2: 8, value3: 18, value4: 12 },
    { name: 'Item 3', value1: 8, value2: 12, value3: 12, value4: 18 },
    { name: 'Item 4', value1: 15, value2: 5, value3: 20, value4: 10 },
  ];

  const data3 = [
    { title: 'Title 1', percentage: 40 },
    { title: 'Title 2', percentage: 64 },
    { title: 'Title 3', percentage: 72 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const factor = gaugeValue / 100;
      setAnimatedData2(data2.map((item, index) => ({
        ...item,
        value1: item.value1 * factor * (1 + index * 0.1),
        value2: item.value2 * factor * (1 + (4 - index) * 0.05),
        value3: item.value3 * factor * (1 + Math.sin(index * Math.PI / 4)),
        value4: item.value4 * factor * (1 + Math.cos(index * Math.PI / 4)),
      })));
      setAnimatedData3(Array.from({ length: 24 }, (_, i) => i < Math.floor(24 * factor)));
      setAnimatedData4(data3.map(item => ({
        ...item,
        animatedPercentage: item.percentage * factor,
      })));
    }, 300);
    return () => clearTimeout(timer);
  }, [gaugeValue]);

  return (
    <div className="p-4 bg-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-purple-700 mb-1">It's all about the</h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-purple-900 mb-2">Informational Data Infographic</h2>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-4">
          Infographic makes it easier for readers to absorb chunks of information. Shortly explain here what will this infographic cover.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Data 1</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Include data like percentages and average.</p>
            <div className="flex justify-between">
              {data1.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-xl sm:text-2xl ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : index === 2 ? 'bg-purple-400' : 'bg-blue-400'}`}>
                    {item.icon}
                  </div>
                  <span className="mt-1 text-xs sm:text-sm font-medium text-gray-700">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Data 2</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="h-48 sm:h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={animatedData2}
                  layout="vertical"
                  barSize={20}
                  barGap={0}
                >
                  <XAxis type="number" domain={[0, 50]} hide />
                  <YAxis dataKey="name" type="category" width={50} axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="value1" stackId="a">
                    {animatedData2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#FFA500" /> // Orange
                    ))}
                  </Bar>
                  <Bar dataKey="value2" stackId="a">
                    {animatedData2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#FF4500" /> // Red-Orange
                    ))}
                  </Bar>
                  <Bar dataKey="value3" stackId="a">
                    {animatedData2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#8A2BE2" /> // Blue Violet
                    ))}
                  </Bar>
                  <Bar dataKey="value4" stackId="a">
                    {animatedData2.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="#4B0082" /> // Indigo
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Data 3</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Include data like percentages and average.</p>
            <div className="grid grid-cols-6 gap-1 sm:gap-2">
              {animatedData3.map((active, i) => (
                <div key={i} className="w-full aspect-[29.5/53.8]">
                  <svg viewBox="0 0 29.5 53.8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7,0C12,0,9.6,2.1,9.6,5.1v1.5c0,2.7,2.4,5.1,5.1,5.1s5.1-2.4,5.1-5.1V5.1C19.9,2.1,17.5,0,14.7,0" fill={active ? "#FF5732" : "#EABC49"} />
                    <path d="M9.6,23c0,0-0.3-0.3-0.3,0l-3.6,8.5c-0.6,1.2-1.8,2.1-3.3,2.1H0.8c-0.3,0-0.6,0-0.6-0.3c-0.3-0.3-0.3-0.6,0-0.9l4.5-10.6l1.5-4.2c1.2-2.4,3.6-4.2,6.4-4.2h4.2c2.7,0,5.1,1.8,6.4,4.2l1.5,4.2l4.5,10.6c0.3,0.3,0.3,0.6,0,0.9c0,0.3-0.3,0.3-0.6,0.3h-1.5c-1.5,0-2.7-0.9-3.3-2.1L20.2,23c0-0.3-0.3,0-0.3,0l1.5,10.6l1.8,19.3c0,0.3-0.3,0.3-0.3,0.6c-0.3,0-0.3,0.3-0.6,0.3h-1.2c-1.8,0-3.3-1.2-3.3-3l-2.7-16.3h-0.6l-2.7,16.3c0,1.8-1.5,3-3.3,3H7.2c-0.3,0-0.3-0.3-0.6-0.3c0-0.3-0.3-0.3-0.3-0.6l1.8-19.3L9.6,23L9.6,23z" fill={active ? "#FF5732" : "#EABC49"} />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-100 p-4 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Data 4</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-2">Include data like percentages and average.</p>
            <div className="space-y-2">
              {animatedData4.map((item, index) => (
                <div key={index} className="flex items-center text-xs sm:text-sm">
                  <div className="w-16 sm:w-20 text-right mr-2">{item.title}</div>
                  <div className="flex-grow bg-gray-200 rounded-full h-3 sm:h-4">
                    <div
                      className={`h-full rounded-full ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : 'bg-purple-400'}`}
                      style={{ width: `${item.animatedPercentage}%` }}
                    ></div>
                  </div>
                  <div className="w-8 sm:w-10 text-left ml-2">{Math.round(item.animatedPercentage)}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </div>
      <>
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-2">Control Gauge</h3>
            <div className="flex items-center gap-2">
              <Slider
                value={[gaugeValue]}
                onValueChange={(value) => setGaugeValue(value[0])}
                max={100}
                step={1}
                className="flex-grow"
                styles={{
                  track: {
                    height: '10px',
                    backgroundColor: '#e2e8f0',
                    borderRadius: '5px',
                  },
                  range: {
                    backgroundColor: '#8b5cf6',
                  },
                  thumb: {
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#8b5cf6',
                    border: '2px solid #fff',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  },
                }}
              />
              <span className="text-sm sm:text-base font-semibold text-purple-700 w-12 text-right">{gaugeValue}%</span>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Index;
