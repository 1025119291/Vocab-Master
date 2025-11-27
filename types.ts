
export interface VocabularyItem {
  word: string;
  phonetic: string;
  translation: string;
}

export interface Unit {
  title: string;
  source: string;
  items: VocabularyItem[];
}

export enum PlayMode {
  SEQUENTIAL = 'SEQUENTIAL',
  RANDOM = 'RANDOM',
}

export interface AppSettings {
  gapDuration: number; // in seconds
  rate: number; // speech rate 0.5 - 2
  selectedVoiceURI: string | null; // URI of the selected speech synthesis voice
  quizMode: boolean; // If true, translation starts hidden
  repetitionCount: number; // Number of times to read the word
  repetitionInterval: number; // Time between repetitions in seconds
}
