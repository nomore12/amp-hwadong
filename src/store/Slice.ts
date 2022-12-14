import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './Store';

interface PostType {
  id: number;
  title: string;
  desc: string;
  createdAt: string;
  uuid: string;
  type: string;
}

interface SubjectState {
  subject: string;
}

// export type = {
//   cursorText:
// }

interface CursorState {
  text: string;
  curr: string;
}

interface ContentListState {
  currNoticeIndex: number;
  currReportIndex: number;
  notices: PostType[];
  reports: PostType[];
  currNotices: PostType[];
  currReports: PostType[];
}

const subjectInitialState: SubjectState = {
  subject: '설립목적',
};

const cursorInitialState: CursorState = {
  text: '',
  curr: 'main',
};

const overlayInitialState = {
  enabled: false,
};

const postContentListState = {
  currNoticeIndex: 0,
  currReportIndex: 0,
  notices: [],
  reports: [],
  currNotices: [],
  currReports: [],
};

export const subjectSlice = createSlice({
  name: 'subject',
  initialState: subjectInitialState,
  reducers: {
    changeSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
  },
});

export const cursorSlice = createSlice({
  name: 'cursor',
  initialState: cursorInitialState,
  reducers: {
    changeText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changeCurr: (state, action: PayloadAction<string>) => {
      state.curr = action.payload;
    },
  },
});

export const overlaySlice = createSlice({
  name: 'overlay',
  initialState: overlayInitialState,
  reducers: {
    onOffOverlay: (state, action: PayloadAction<boolean>) => {
      state.enabled = action.payload;
    },
  },
});

export const postSlice = createSlice({
  name: 'post',
  initialState: postContentListState,
  reducers: {
    setNotices: (state, action: PayloadAction<PostType[]>) => {
      state.notices = [...action.payload] as any;
      const begin = 0;
      const end =
        state.notices.length >= 10 ? 10 : Math.ceil(state.notices.length / 10);
      state.currNotices = state.notices.slice(begin, end);
    },
    setReports: (state, action: PayloadAction<PostType[]>) => {
      state.reports = [...action.payload] as any;
      const begin = 0;
      const end =
        state.reports.length >= 10 ? 10 : Math.ceil(state.reports.length / 10);
      state.currReports = state.reports.slice(begin, end);
    },
    setCurrNoticeIndex: (state, action: PayloadAction<number>) => {
      state.currNoticeIndex = action.payload;
      const begin = (action.payload - 1) * 10;
      const end = begin + 10;
      state.currNotices = [...state.notices.slice(begin, end)];
    },
    setCurrReportIndex: (state, action: PayloadAction<number>) => {
      state.currReportIndex = action.payload;
      const begin = (action.payload - 1) * 10;
      const end = begin + 10;
      state.currReports = [...state.reports.slice(begin, end)];
    },
  },
});

export const { changeSubject } = subjectSlice.actions;
export const { changeText, changeCurr } = cursorSlice.actions;
export const { onOffOverlay } = overlaySlice.actions;
export const {
  setNotices,
  setReports,
  setCurrNoticeIndex,
  setCurrReportIndex,
} = postSlice.actions;
export const getSubject = (state: RootState) => state.subject;
export const getCurrState = (state: RootState) => state.cursor.curr;
export const [subjectReducer, cursorReducer, overlayReducer, postReducer] = [
  subjectSlice.reducer,
  cursorSlice.reducer,
  overlaySlice.reducer,
  postSlice.reducer,
];
