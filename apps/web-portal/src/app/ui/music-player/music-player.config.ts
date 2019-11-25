export interface MusicPlayer {
  getAuthToken: Function;
  handleStateChanges: Function;
  authToken: string;
  musicPlayer: any;
  device_id: string;
  init: boolean;
}

export interface PlayerStates {
  restrictions?: {
    disallow_pausing_reasons?: string[];
    disallow_resuming_reasons?: string[];
  };
}
