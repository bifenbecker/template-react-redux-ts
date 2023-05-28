import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import {IRepo, IUser, ServerResponse} from '../../models/models'

export const [FTName]Api = createApi({
  reducerPath: '[FTName]/api',
  baseQuery: fetchBaseQuery({
    // Base url API
    baseUrl: 'https://'
  }),
  // Request again when browser window focus
  refetchOnFocus: false,
  endpoints: build => ({
    /** 
     * Describe each endpoints build.query<any, any> - <GetType, QueryType>
     */
    endpoint1: build.query<any, any>({
      query: (search: string) => ({
        // Configure request
        url: `url`,
        params: {}
      }),
      // Transform response
      transformResponse: (response) => response
    }),
  })
})

export const {  } = [FTName]Api;