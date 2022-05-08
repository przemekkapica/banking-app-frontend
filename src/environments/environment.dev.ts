import { RemoteClientDataSource } from "src/app/data/client/data_sources/remote_client_data_source";
import { Env } from 'src/environments/env';

export const environment = {
    env: Env.DEV,
    clientDataSource: RemoteClientDataSource
};