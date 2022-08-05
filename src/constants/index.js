const COLORS = {
    primary : "#003131",
    secondary: "#e9e9e9",
    accent: "#1f936d",
}

const SIZES = {
    padding: 19,
    borderRadius: 15,
    textBoxRadius: 25,
    h1: 24,
    h2: 20,
}

const FONTS = {
    h1_semiBold: {fontSize : SIZES.h1, fontFamily: "NotoSansKR"},
    h2_semiBold: {fontSize : SIZES.h2, fontFamily: "NotoSansKR"}
}

const SHADOW = {
    elevation: 5,
    shadowColor: COLORS.secondary,
    shadowOffset: {width: 2, height: 12},
    shadowRadius: 12,
}

export {COLORS, SIZES, FONTS, SHADOW}