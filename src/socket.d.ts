declare module "socket.io-client" {
  import { Socket } from "socket.io-client/build/esm/socket";
  export function io(url: string, opts?: any): Socket;
  export default io;
}
