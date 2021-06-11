import { textsecure } from '../lib/ts/textsecure/index';
import { AttachmentPointerClass, DownloadAttachmentType } from '../lib/ts/textsecure.d';
import { getCredentials, getConfig, maybeInitMessaging } from './utils';

const CONFIG = getConfig();

export class MessageReceiver {
  private _inner: InstanceType<typeof textsecure.MessageReceiver>;
  constructor() {
    const [username, password] = getCredentials();
    maybeInitMessaging(username, password);

    this._inner = new textsecure.MessageReceiver(username, undefined, password, undefined, { serverTrustRoot: CONFIG.serverTrustRoot });
  }

  addEventListener(name: string, handler: Function) {
    this._inner.addEventListener(name, handler);
  }

  async close() {
    this._inner.close();
  }

  async downloadAttachment(attachment: AttachmentPointerClass): Promise<DownloadAttachmentType> {
    return this._inner.downloadAttachment(attachment);
  }
}
