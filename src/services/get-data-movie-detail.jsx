import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataMovieDetail = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key +_params.id);
    return data
}

const useMovieDataQueryDetail = (options) => {
    return useQuery([API_ENDPOINT.DETAIL_MOVIE, options], fetchDataMovieDetail)
}

export {fetchDataMovieDetail, useMovieDataQueryDetail}