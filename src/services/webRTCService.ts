import type { RTCConfig } from "../types";
import {
  addDoc,
  collection,
  doc,
  firestore,
  getDoc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "./firebaseService";

export const servers: RTCConfig = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

export class WebRTCService {
  private pc: RTCPeerConnection | null = null;
  private localStream: MediaStream | null = null;
  private remoteStream: MediaStream | null = null;

  constructor() {
    this.pc = new RTCPeerConnection(servers);
  }

  async startWebcam(
    webcamVideoEl: HTMLVideoElement,
    remoteVideoEl: HTMLVideoElement,
  ): Promise<void> {
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    this.remoteStream = new MediaStream();

    this.localStream.getTracks().forEach((track) => {
      if (this.pc && this.localStream) {
        this.pc.addTrack(track, this.localStream);
      }
    });

    if (this.pc) {
      this.pc.ontrack = (event) => {
        event.streams[0].getTracks().forEach((track) => {
          if (this.remoteStream) {
            this.remoteStream.addTrack(track);
          }
        });
      };
    }

    webcamVideoEl.srcObject = this.localStream;
    remoteVideoEl.srcObject = this.remoteStream;
  }

  async createCall(): Promise<string> {
    if (!this.pc) {
      throw new Error("Peer connection not initialized");
    }

    const callsCollection = collection(firestore, "calls");
    const callDoc = doc(callsCollection);
    const offerCandidatesCollection = collection(callDoc, "offerCandidates");
    const callId = callDoc.id;

    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        addDoc(offerCandidatesCollection, event.candidate.toJSON());
      }
    };

    const offerDescription = await this.pc.createOffer();
    await this.pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await setDoc(callDoc, { offer });

    onSnapshot(callDoc, (snapshot) => {
      const data = snapshot.data();
      if (this.pc && !this.pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        this.pc.setRemoteDescription(answerDescription);
      }
    });

    const answerCandidatesCollection = collection(callDoc, "answerCandidates");
    onSnapshot(answerCandidatesCollection, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added" && this.pc) {
          const candidate = new RTCIceCandidate(change.doc.data());
          this.pc.addIceCandidate(candidate);
        }
      });
    });

    return callId;
  }

  async answerCall(callId: string): Promise<void> {
    if (!this.pc) {
      throw new Error("Peer connection not initialized");
    }

    const callDocRef = doc(firestore, "calls", callId);
    const answerCandidatesCollection = collection(
      callDocRef,
      "answerCandidates",
    );
    const offerCandidatesCollection = collection(callDocRef, "offerCandidates");

    this.pc.onicecandidate = (event) => {
      if (event.candidate) {
        addDoc(answerCandidatesCollection, event.candidate.toJSON());
      }
    };

    const callSnapshot = await getDoc(callDocRef);
    const callData = callSnapshot.data();

    if (!callData) {
      throw new Error("Call not found");
    }

    const offerDescription = callData.offer;
    await this.pc.setRemoteDescription(
      new RTCSessionDescription(offerDescription),
    );

    const answerDescription = await this.pc.createAnswer();
    await this.pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await updateDoc(callDocRef, { answer });

    onSnapshot(offerCandidatesCollection, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added" && this.pc) {
          let data = change.doc.data();
          this.pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  }

  hangup(): void {
    if (this.localStream) {
      this.localStream.getTracks().forEach((track) => track.stop());
      this.localStream = null;
    }

    if (this.pc) {
      this.pc.close();
      this.pc = new RTCPeerConnection(servers);
    }

    this.remoteStream = null;
  }
}

export const webRTCService = new WebRTCService();
