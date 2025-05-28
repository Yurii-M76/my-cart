type TStatusState = {
  loading: boolean;
  success: boolean;
};

export type TStatusThunk = {
  get: TStatusState;
  create: TStatusState;
  update: TStatusState;
  delete: TStatusState;
};
