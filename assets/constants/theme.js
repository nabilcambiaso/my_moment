import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
    darkBlue:"#212042",
    lightGreen:"#D9F4CE",
    lightOrange:"#FF9FA5",
    blue:"#26C1FD",
    success: "#14C48B",
    warning: "#FF7F50", 
    black2:"#5C6B88",
    white: "#F4F4F4",
    peach: '#FF615F',
    flatPurple:"#C67ADD",
    flatGreen:"#00CA72",
    red: '#FF4D4D',
    flatBlue:"#3A99D9",
    flatRed:"#E75958",
    gradientBlue:['#36d1dc',"#5b86e5"],
    Green: '#1DD1A1',
};

export const SIZES = {
    radius: 12,
    padding:15,
    padding1: 24,
    margin : 10,
    margin1: 12,
    margin2: 15,
    width,
    height
};


const appTheme = { COLORS, SIZES };

export default appTheme;