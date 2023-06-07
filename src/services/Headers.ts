import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { hostUrl } from '~apis/apiUrls'

export const baseQuery = fetchBaseQuery({
  baseUrl: hostUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.access_token;

    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
})