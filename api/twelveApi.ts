import { QuoteResponse } from '@/types/types';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { createApi } from '@reduxjs/toolkit/query/react';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const twelveApi = createApi({
    reducerPath: 'twelveApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        getQuote: build.query<QuoteResponse, string>({
            query: (symbol) => `/quote?symbol=${symbol}&apikey=${API_KEY}`,
        }),
    }),
});

export const { useGetQuoteQuery } = twelveApi;
