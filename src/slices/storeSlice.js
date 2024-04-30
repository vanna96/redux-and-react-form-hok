import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedBranch: 0,
    selectedCountry: 5,
    countries: [
        {
            id: 1,
            name: 'Laos'
        },
        {
            id: 2,
            name: 'Singapore'
        },
        {
            id: 3,
            name: 'China'
        },
        {
            id: 4,
            name: 'Indonesia'
        },
        {
            id: 5,
            name: 'Cambodia'
        },
        {
            id: 6,
            name: 'Japan'
        },
        {
            id: 7,
            name: 'Vietnam'
        },
        {
            id: 8,
            name: 'Thailand'
        }
    ],
    branchs: [
        {
            id: 1,
            name: "សាខាភ្នំពេញ",
            detail: [
                {
                    id: 3,
                    name: "ចែរចនា",
                    phone: "(+855) 87-872162",
                    address: "Norea Parkway, Norea City, Sangkat Niroth, Khan Chbar Ampov, Phnom Penh, Cambodia"
                }
            ]
        },
        {
            id: 2,
            name: "សាខាខេត្តកណ្តាល",
            detail: [
                {
                    id: 1,
                    name: "ចែច្រិប",
                    phone: "(+855) 87-872134",
                    address: `Expressway KM109, Srok Kompong Sela, Preah Sihanouk Province, Cambodia`
                },
                {
                    id: 2,
                    name: "ចែអូន",
                    phone: "(+855) 87-872162",
                    address: "Norea Parkway, Norea City, Sangkat Niroth, Khan Chbar Ampov, Phnom Penh, Cambodia"
                }
            ]
        }
    ]
};

const storeSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        setStore(state, action) {
            state.selectedBranch = action.payload;
        },
    },
});

export const { setStore } = storeSlice.actions;

export default storeSlice.reducer;
