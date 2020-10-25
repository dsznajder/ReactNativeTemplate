import { RootState } from '../src/store/types';

declare module 'react-redux' {
  interface DefaultRootState extends RootState {}
}
