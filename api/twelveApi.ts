import { QuoteResponse } from '@/types/types';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.API_KEY;

export const twelveApi = createApi({
    reducerPath: 'twelveApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.twelvedata.com/' }),
    endpoints: (build) => ({
        getQuote: build.query<QuoteResponse, string>({
            query: (symbol) => `/quote?symbol=${symbol}&apikey=${API_KEY}`,
        }),
    }),
});

export const { useGetQuoteQuery } = twelveApi;
