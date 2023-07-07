import { useState, useEffect } from 'react';
import { ActionFunction, LoaderFunction, V2_MetaFunction, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import axios from 'axios';
import { cryptoItemType, cryptoItemsType } from '~/types/crypto-types';
import { db } from '~/utils/db.server';

const parseFormData = (formDataString: string) => {
  const pairs = formDataString.split('&');
  const result: any = {};

  pairs.forEach((pair) => {
    const [key, value] = pair.split('=');
    result[key] = decodeURIComponent(value);
  });

  return result;
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Crypto Currency" },
    { name: "description", content: "this is a crypto currency application!" },
    {name: 'crypto', content: 'Best Crypto App'}
  ];
};

export const loader: LoaderFunction = async () => {
  const response = await axios.get('https://api.coincap.io/v2/assets');
  const data = response.data.data;
  return { data };
};

export const action: ActionFunction = async ({ request }) => {
  const body = await request.text();
  const formData = parseFormData(body);
  await db.cryptoCurrency.create({data: formData});

  return { data: 'saved' };
};

export default function Index() {
  const { data } = useLoaderData();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchData, setSearchData] = useState<cryptoItemsType>({ items: [] });

  const filter = () => {
    setSearchData({ items: data.filter((item: cryptoItemType) => item.name === searchTerm) });
  };

  const onDetailHandler = (name: string) => {
    setSearchData({ items: data.filter((item: cryptoItemType) => item.name === name) });
  };

  const goBackHandler = () => {
    setSearchData({ items: [] });
  };

  useEffect(() => {
    setSearchData({ items: [] });
  }, [data]);

  return (
    <div>
      {
        searchData && searchData.items && searchData.items.length > 0 &&
        <div className='fixed w-full h-full bg-black bg-opacity-50 z-50'></div>
      }
      <div className="container mx-auto py-4 relative">
        <Form method='POST' id='currencyForm'>
          <input type='hidden' name="code" defaultValue={searchData.items[0]?.symbol} />
          <input type='hidden' name="name" defaultValue={searchData.items[0]?.name} />
          <input type='hidden' name="amount" defaultValue={searchData.items[0]?.volumeUsd24Hr} />
          <input type='hidden' name="tradeVolume" defaultValue={searchData.items[0]?.marketCapUsd} />
          <input type='hidden' name="percentageChange" defaultValue={searchData.items[0]?.changePercent24Hr} />
        </Form>
        <div className="flex justify-center">
          <div id='popup' className='absolute bg-purple-100 z-50 top-auto left-auto mt-[10%]'>
            {
              searchData && searchData.items && searchData.items.length > 0 &&
              <div className="card">
                <div className="card-body">
                  <h2 className="card-title">{searchData.items[0]?.name}</h2>
                  <p className="card-text">Current Price: {searchData.items[0]?.priceUsd}</p>
                  <p className="card-text">Volume used in 24 hours: {searchData.items[0]?.volumeUsd24Hr}</p>
                  <p className="card-text">Rank: {searchData.items[0]?.rank}</p>
                  <p className="card-text">symbol: {searchData.items[0]?.symbol}</p>
                  <p className="card-text">supply: {searchData.items[0]?.supply}</p>
                  <p className="card-text">marketCapUsd: {searchData.items[0]?.marketCapUsd}</p>
                  <p className="card-text">changePercent24Hr: {searchData.items[0]?.changePercent24Hr}</p>
                  <a href={searchData.items[0]?.explorer} className="text-orange-500" target='_blank'>Visit site</a>
                  <button type='submit' form='currencyForm' className="btn btn-success text-white">Save</button>
                  <button onClick={goBackHandler} type='button' className="btn">Close</button>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="flex justify-center items-center mb-4">
          <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="input w-64 mr-2" placeholder="Search..." />
          <select className="select">
            <option value="name">Name</option>
            <option value="code">Code</option>
          </select>
          <button type='button' onClick={filter} className="btn btn-primary ml-2">Search</button>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            data.map((item: cryptoItemType) => {
              return (
                <div className="card" key={item.id}>
                  <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p className="card-text">Current Price: {item.priceUsd}</p>
                    <p className="card-text">Volume used in 24 hours: {item.volumeUsd24Hr}</p>
                    <p className="card-text">Rank: {item.rank}</p>
                    <a href={item.explorer} className="text-orange-500" target='_blank'>Visit site</a>
                    <button onClick={() => onDetailHandler(item.name)} type='button' className="btn">Detail</button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
