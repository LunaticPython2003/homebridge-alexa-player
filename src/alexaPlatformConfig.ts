import type { PlatformConfig } from 'homebridge';

export const PLATFORM_NAME = 'AlexaPlayer';

export type AmazonDomain =
    | 'amazon.com'
    | 'amazon.ca'
    | 'amazon.de'
    | 'amazon.es'
    | 'amazon.fr'
    | 'amazon.it'
    | 'amazon.in'
    | 'amazon.co.jp'
    | 'amazon.co.uk'
    | 'amazon.com.au'
    | 'amazon.com.br'
    | 'amazon.com.mx';

export interface AlexaPlatformConfig extends PlatformConfig {
    platform: 'AlexaPlayer';
    amazonDomain: AmazonDomain;
    auth: {
        cookie?: string;
        proxy: {
            clientHost: string;
            port: number;
        };
    };
    screensAsTelevisions?: boolean;
}
