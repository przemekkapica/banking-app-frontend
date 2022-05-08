import { MockClientDataSource } from 'src/app/data/client/data_sources/mock_client_data_source';
import { Env } from 'src/environments/env';

export const environment = {
    env: Env.MOCK,
    clientDataSource: MockClientDataSource
};