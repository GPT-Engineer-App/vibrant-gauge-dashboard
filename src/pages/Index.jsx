// Update this page (the content is just a fallback if you fail to update the page)

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
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

  useEffect(() => {
    const timer = setTimeout(() => {
      const factor = gaugeValue / 100;
      setAnimatedData2(data2.map(item => ({
        ...item,
        value1: item.value1 * factor,
        value2: item.value2 * factor,
        value3: item.value3 * factor,
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
    <div className="p-6 bg-purple-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-2">It's all about the</h1>
        <h2 className="text-5xl font-bold text-center text-purple-900 mb-4">Informational Data Infographic</h2>
        <p className="text-center text-gray-600 mb-8">
          Infographic makes it easier for readers to absorb chunks of information. Shortly explain here what will this infographic cover.
        </p>

        <div className="bg-purple-100 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 1</h3>
          <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
          <div className="flex justify-between">
            {data1.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : index === 2 ? 'bg-purple-400' : 'bg-blue-400'}`}>
                  {item.icon}
                </div>
                <span className="mt-2 text-sm font-medium text-gray-700">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 2</h3>
            <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={animatedData2}>
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

          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 2</h3>
            <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
            <div className="grid grid-cols-6 gap-2">
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
        </div>

        <div className="bg-purple-100 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 4</h3>
          <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
          <div className="space-y-4">
            {animatedData4.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-24 text-right mr-4">{item.title}</div>
                <div className="flex-grow bg-gray-200 rounded-full h-4">
                  <div
                    className={`h-full rounded-full ${index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-orange-400' : 'bg-purple-400'}`}
                    style={{ width: `${item.animatedPercentage}%` }}
                  ></div>
                </div>
                <div className="w-12 text-left ml-4">{Math.round(item.animatedPercentage)}%</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Data 5</h3>
          <p className="text-gray-600 mb-4">Include data like percentages and average. It helps the reader get insight about the topic.</p>
          <div className="relative h-[140px] w-[280px] mx-auto">
            <svg className="absolute inset-0" viewBox="0 0 280 140" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="clippath">
                  <path d="M0,140C0,62.68,62.68,0,140,0s140,62.68,140,140h-50.4c0-49.48-40.11-89.6-89.6-89.6s-89.6,40.11-89.6,89.6H0Z"/>
                </clipPath>
              </defs>
              <rect fill="#fff" x="-28" y="-14" width="336" height="168"/>
              <g clipPath="url(#clippath)">
                <rect fill="#ff5732" x="-28" y="-14" width="336" height="168"/>
              </g>
            </svg>
            <div 
              className="absolute left-1/2 bottom-0 w-[29.5px] h-[127px] origin-bottom transition-transform duration-300"
              style={{ transform: `translateX(-50%) rotate(${(gaugeValue / 100) * 180 - 90}deg)` }}
            >
              <svg viewBox="0 0 29.5 127" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#SVGID_00000010311719144933993520000012574870140054810267_)">
                  <g>
                    <clipPath id="needleClip">
                      <path d="M28.3,113.2c0,7.7-6.3,13.9-14,13.8c-7.7,0-13.9-6.3-13.8-14L12.1,3.2c0-1,0.5-1.9,1.4-2.4c0.9-0.5,1.9-0.5,2.8,0c0.9,0.5,1.4,1.4,1.4,2.4L28.3,113.2z"/>
                    </clipPath>
                    <g clipPath="url(#needleClip)">
                      <rect x="-178" y="-19.7" transform="matrix(0.8864 -0.463 0.463 0.8864 -30.8259 1.9776)" fill="#563AEF" width="333.3" height="167"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-purple-100 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-purple-700 mb-4">Control Gauge</h3>
          <div className="flex items-center gap-4">
            <Slider
              value={[gaugeValue]}
              onValueChange={(value) => setGaugeValue(value[0])}
              max={100}
              step={1}
              className="flex-grow"
            />
            <span className="text-lg font-semibold text-purple-700">{gaugeValue}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
