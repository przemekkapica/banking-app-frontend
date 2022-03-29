import { Server } from './model/server';

export abstract class ServerRepository {
    abstract getServerById(id: string): Promise<Server>;

    abstract getAllServers(): Promise<Server[]>;

    abstract updateServer(): Promise<Server>;
}