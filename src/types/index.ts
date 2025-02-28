export interface CallState {
  webcamStarted: boolean;
  callCreated: boolean;
  callId: string;
}

export interface RTCConfig {
  iceServers: {
    urls: string[];
  }[];
  iceCandidatePoolSize: number;
}
