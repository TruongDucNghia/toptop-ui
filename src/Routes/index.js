import Following from '../pages/Following';
import Homepage from '../pages/Home';
import Upload from '../pages/Upload';

export const publicRouter = [
  { path: '/', component: Homepage },
  { path: 'following', component: Following },
  { path: 'upload', component: Upload, layout: null }
];

export const privateRouter = [];
