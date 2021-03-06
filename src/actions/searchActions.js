const actions = {
  SET_CURRENT_SUBREDDIT: 'set_current_subreddit',
  SET_CURRENT_PAGE: 'set_current_page',
  SET_AFTER: 'set_after',
  SET_BEFORE: 'set_before',
  SET_RETRY: 'set_retry',
  SET_FILEs: 'set_files'
};

export const setCurrentSubreddit = (sr) => ({
  type: actions.SET_CURRENT_SUBREDDIT,
  payload: sr
});

export const setCurrentPage = (page) => ({
  type: actions.SET_CURRENT_PAGE,
  payload: page
});

export const setAfter = (after) => ({
  type: actions.SET_AFTER,
  payload: after
});

export const setBefore = (before) => ({
  type: actions.SET_BEFORE,
  payload: before
});

export const setRetry = (retry) => ({
  type: actions.SET_RETRY,
  payload: retry
});

export const setFiles = (files) => ({
  type: actions.SET_FILES,
  payload: files
});

export default actions;
