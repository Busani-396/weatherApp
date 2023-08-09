import { Text } from "react-native";
import MainWrapper from "./BodyComps/MainWrapper";
import PrimaryDisplay from "./BodyComps/PrimaryDisplay";
import SecondaryDisplay from "./BodyComps/SecondaryDisplay";

function DisplayDetails(){
    return (
        <MainWrapper>
            <PrimaryDisplay/>
            {/* <SecondaryDisplay navigation={navigation}/> */}
        </MainWrapper>
    )
}

export default DisplayDetails;