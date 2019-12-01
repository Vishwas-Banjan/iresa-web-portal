export interface MusicPlayer {
  getAuthToken: Function;
  handleStateChanges: Function;
  authToken: string;
  musicPlayer: any;
  device_id: string;
}

export interface PlayerStates {
  paused: boolean;
}
