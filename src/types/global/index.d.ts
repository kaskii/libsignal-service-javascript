import ByteBuffer from 'bytebuffer';
import { Crypto } from 'node-webcrypto-ossl';
import { LibSignalType } from '../libsignal';
import { TextSecureType } from '../textsecure';
import { Storage } from '../../StorageWrapper';
import { SignalProtocolStore } from '../../LibSignalStore';
import '../ByteBufferExtended';
import { fromBits, fromString } from '../LongExtended';
import { WebAPIConnectType } from '../WebAPI';

declare global {
  const CONFIG_DEV: Record<string, any>;
  const CONFIG_PROD: Record<string, any>;
  interface Window {
    crypto: Crypto,
    CI?: {
      setProvisioningURL: (url: string) => void;
    };
    ConversationController: any;
    Signal: any;
    WebAPI: WebAPIConnectType;
    dcodeIO: {
      ByteBuffer: typeof ByteBuffer;
      Long: {
        fromBits: typeof fromBits;
        fromString: typeof fromString;
      };
    };
    isValidGuid: (maybe: string) => boolean;
    isValidE164: (maybe: string) => boolean;
    libphonenumber: any;
    libsignal: LibSignalType;
    log: {
      debug: (...args: any[]) => void;
      error: (...args: any[]) => void;
      info: (...args: any[]) => void;
      warn: (...args: any[]) => void;
    };
    normalizeUuids: any;
    textsecure: TextSecureType;
    receivedAtCounter: number;
    storage: Storage;
    SignalProtocolStore: SignalProtocolStore;
    synchronousCrypto: any;
    reduxActions: {
      expiration: {
        hydrateExpirationStatus: (status: boolean) => boolean,
      }
    }
  }
}
