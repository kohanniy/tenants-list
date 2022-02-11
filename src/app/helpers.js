export const isPendingAction = (action) => {
  return action.type.endsWith('pending');
};

export const isFulfilledAction = (action) => {
  return action.type.endsWith('fulfilled');
};
