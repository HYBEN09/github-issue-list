import { atom } from 'recoil';
import { Issue } from '../@types/global';

export const issuesState = atom<Issue[]>({
  key: 'issuesState',
  default: [],
});
