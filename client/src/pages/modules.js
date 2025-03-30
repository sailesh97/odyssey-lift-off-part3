import React from "react";
import { Layout, ModuleDetail, QueryResult } from "../components";
import {gql, useQuery} from '@apollo/client';
import { useParams } from "react-router-dom";


const GET_MODULE_AND_PARENT_TRACK = gql`
query getModuleAndParentTrack($moduleId: ID!, $trackId: ID!) {
  module(id: $moduleId) {
    id
    title
    content
    videoUrl
  }
  track(id: $trackId) {
    id
    title
    modules {
      id
      title
      length
    }
  }
}
`;

const Modules = () => {
    const {moduleId, trackId} = useParams();
    const {loading, error, data} = useQuery(GET_MODULE_AND_PARENT_TRACK, {
        variables: {
            moduleId,
            trackId
        }
    })
    return (<Layout fullWidth={true}>
        <QueryResult error={error} loading={loading} data={data}>
            <ModuleDetail track={data?.track} module={data?.module}/>
        </QueryResult>
    </Layout>);
}

export default Modules;