import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommunityState {
  selectedNeighborhood: string | null;
  precipitation: number;
  temperature: number;
  pollution: number;
}

const initialState: CommunityState = {
  selectedNeighborhood: null,
  precipitation: 50,
  temperature: 20,
  pollution: 30,
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setSelectedNeighborhood: (state, action: PayloadAction<string | null>) => {
      state.selectedNeighborhood = action.payload;
    },
    updateVariable: (state, action: PayloadAction<{ variable: keyof CommunityState; value: number }>) => {
      const { variable, value } = action.payload;
      state[variable] = value;
    },
  },
});

export const { setSelectedNeighborhood, updateVariable } = communitySlice.actions;
export default communitySlice.reducer;