import React from 'react'
import AdsComponent from '../component/AdsComponent'
import { Breadcrumb, Tabs } from 'antd'
import FavoritiesAds from '../component/favorites/FavoritiesAds';
import SellerAds from '../component/favorites/SellerAds';

function Favorites() {
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: 'Ads (4)',
          children: <FavoritiesAds/>,
        },
        {
          key: '2',
          label: 'Seller (4)',
          children: <SellerAds/>,
        },
      ];
  return (
    <div className='container mx-auto'>
        <div className='mb-10'>
            <AdsComponent/>
        </div>
        <div className='mb-10'>
        <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Favorites',
        href: '',
      },
    ]}
  />
        </div>
        <div className='card-shadow p-4'>
                 <h1 className='text-textColor font-medium text-xl'>Favorites</h1>
                 <div className='fav-tabs mt-5'>
                 <Tabs className='border-none' defaultActiveKey="1" items={items} onChange={onChange} />
                 </div>
        </div>
    </div>
  )
}

export default Favorites