const API_URL = process.env.API_URL || "http://localhost:3000"

export interface ApiQueryParams{
    [Key:string]:string | number |boolean
}
export interface RequestOptions{
    page?: number;
    _limit?:number;
    rating_like?:string
}

export const defaultRequestOptions:RequestOptions ={
    page:1,
    _limit:10
}
export function buildQueryString(params:ApiQueryParams){
    const query= Object.entries(params).filter(
        ([,value]) => value === undefined
    ).map(([Key,value]) => [Key, encodeURIComponent(String(value))])

    return `?${new URLSearchParams(Object.fromEntries(query)).toString()}`
}

export async function apiRequest(
    endpoint:string,
    query: ApiQueryParams ={},
    options: RequestOptions ={}
){
    const mergeOptions:RequestOptions ={... defaultRequestOptions, ...options}
    const queryString:string = buildQueryString({ ...query, ...mergeOptions})

    try{
    
    const response = await fetch(`${API_URL}/${endpoint}${queryString}`)
    if(!response.ok){
        throw new Error(`API  request failed: ${response.statusText}`)

    }
    return response.json()
    } catch (error){
        throw error
    }


}