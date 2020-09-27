declare module 'huejay' {

    // #region Client
    type TClientConfig = {
        host: string;
        port?: number;
        username?: string;
        timeout?: number;
    };

    interface IClientCtor {
        new(opts: TClientConfig): IClient;
    }

    interface IClient {
        users: IClientUsers;
        bridge: IClientBridge;
        groups: IClientGroups;
    }

    // #region Client user

    interface IClientUsers {
        User: IUserCtor;
        create(user: IUser): Promise<IUser>;
        get(): Promise<IUser>;
        getByUsername(username: string): Promise<IUser>;
        getAll(): Promise<IUser[]>;
        delete(username: string): Promise<void>;
    }

    interface IUserCtor {
        new(): IUser;
    }

    interface IUser {
        deviceType: string;
        username: string;
        created: string;
        lastUsed: string;
    }

    // #endregion

    // #region Client bridge

    interface IClientBridge {
        ping(): Promise<void>;
        isAuthenticated(): Promise<void>;
        get(): Promise<IBridge>;
        save(bridge: IBridge): Promise<IBridge>;
        linkButton(): Promise<void>;
        touchlink(): Promise<void>;
    }

    interface IBridge {
        id: string;
        name: string;
        modelId: string;
        model: IBridgeModel;
        factoryNew: boolean;
        replacesBridgeId: string;
        dataStoreVersion: string;
        starterKitId: string;
        softwareVersion: string;
        apiVersion: string;
        zigbeeChannel: number;
        macAddress: string;
        ipAddress: string;
        dhcpEnabled: boolean;
        netmask: string;
        gateway: string;
        proxyAddress: string;
        proxyPort: number;
        utcTime: string;
        timeZone: string;
        localTime: string;
        portalServicesEnabled: boolean;
        portalConnected: boolean;
        linkButtonEnabled: boolean;
        touchlinkEnabled: boolean;
    }

    interface IBridgeModel {
        id: string;
        manufacturer: string;
        name: string;
    }

    // #endregion

    // #region Client groups
    interface IClientGroups {
        getAll(): Promise<IGroup[]>;
    }
    interface IGroup {
        id: string;
        name: string;
        type: string;
    }
    // #endregion

    const Client: IClientCtor;
    // #endregion

    // #region Discover
    type TDiscoverConfig = {
        strategy?: 'nupnp' | 'upnp' | 'all'
    };
    function discover(config?: TDiscoverConfig): Promise<any>;
    // #endregion

    // #region Error
    interface IErrorCtor {
        new(): IError;
    }
    interface IError {
        type: number;
    }
    const Error: IErrorCtor;
    // #endregion

    export {
        Client,
        discover,
        Error
    };
}