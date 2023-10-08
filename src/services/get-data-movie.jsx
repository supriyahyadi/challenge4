import { useQuery } from "@tanstack/react-query";
import http from "../utils/http";
import { API_ENDPOINT } from "../utils/api-endpoint";

const fetchDataMovie = async ({queryKey}) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(_key, { params: _params });
    return data
}

const useMovieDataQuery = (options) => {
    return useQuery([API_ENDPOINT.NOW_PLAYING, options], fetchDataMovie)
}

export {fetchDataMovie, useMovieDataQuery}