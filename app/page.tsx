'use client';
import { Rate, Space } from 'antd';
import { useState } from 'react';
import { LikeFilled, DislikeFilled } from '@ant-design/icons';

export default function Home() {
  const [starRating, setStarRating] = useState(0);
  const [starRatingC, setStarRatingC] = useState(0);
  const [thumbsRating, setThumbsRating] = useState(0); // 1 for thumbs up, -1 for thumbs down, 0 for no rating
  console.log(starRating);
  console.log(starRatingC);
  console.log(thumbsRating);
  const handleSafty = (value) => {
    setStarRating(value);
  };
  const handleCom = (value) => {
    setStarRatingC(value);
  };

  const handleThumbsRateChange = (value) => {
    setThumbsRating(value);
  };

  return (
    <>
      <div className="h-[500px] w-full md:w-[400px] flex justify-center rounded-lg mx-auto my-20 max-sm:px-2 py-5 border-2 border-black">
        <div>
          <h1 className="py-4 text-3xl font-black">Leave a review</h1>
          <div className="py-5">
            <h1 className="text-xl font-semibold">Safty</h1>
            <Rate className='py-3'
              style={{ fontSize: '34px' }}
              value={starRating}
              onChange={handleSafty}
            />
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Communication:</h1>
            <Rate className='py-3'
              style={{ fontSize: '34px' }}
              value={starRatingC}
              onChange={handleCom}
            />
          </div>
          <div className="py-5">
            <h1 className="text-xl font-semibold">
              Would you like to recommended us?
            </h1>
            <Space className='py-5'>
              <DislikeFilled
                style={{
                  fontSize: '30px',
                  color: thumbsRating === -1 ? 'red' : '',
                }}
                onClick={() =>
                  handleThumbsRateChange(thumbsRating === -1 ? 0 : -1)
                }
              />
              <LikeFilled
                style={{
                  fontSize: '30px',
                  color: thumbsRating === 1 ? 'green' : '',
                }}
                onClick={() =>
                  handleThumbsRateChange(thumbsRating === 1 ? 0 : 1)
                }
              />
            </Space>
          </div>
        </div>
      </div>
    </>
  );
}
