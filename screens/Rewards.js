import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ImageBackground
} from 'react-native';
import { HeaderBar, CustomButton } from '../components';
import { dummyData, COLORS, SIZES, icons, FONTS} from '../constants';

import {connect} from 'react-redux';
import {appTheme} from '../constants/theme';

const Rewards = ({navigation, appTheme}) => {

    function renderRewardPoint() {
        return (
            <View
                style={{
                    alignItems:'center',
                }}
            >
                {/*Text */}
                <Text
                    style={{
                        color:COLORS.primary,
                        ...FONTS.h1,
                        fontSize:35
                    }}
                >
                    Rewards
                </Text>
                <Text
                    style={{
                        marginTop:10,
                        color:appTheme.textColor,
                        width:SIZES.width*0.6,
                        textAlign:'center',
                        ...FONTS.h3,
                        lineHeight:18
                    }}
                >
                    You are 60 points away from your next reward
                </Text>
                {/*Image */}
                <ImageBackground
                    source={icons.reward_cup}
                    resizeMode="contain"
                    style={{
                        marginTop:SIZES.padding,
                        width:SIZES.width*0.5,
                        height:SIZES.height*0.5,
                        alignItems:'center',
                        justifyContent:'center'
                    }}
                >
                    <View
                        style={{
                            width:50,
                            height:50,
                            borderRadius:50,
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:COLORS.white
                        }}
                    >
                        <Text
                            style={{...FONTS.body2}}
                        >   
                            280
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        )
    }

    function renderButtons() {
        return (
            <View
                style={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                {/*Scan */}
                <CustomButton 
                    isPrimaryButton={true}
                    label="Scan in Store"
                    containerStyle={{
                        width:100,
                        paddingVertical:5,
                        marginRight:SIZES.radius,
                        borderRadius:SIZES.radius*2
                    }}
                    onPress={() =>navigation.navigate("Location")}
                />
                {/*Redeem */}
                <CustomButton 
                    isSecondaryButton={true}
                    label="Redeem"
                    containerStyle={{
                        width:100,
                        paddingVertical:5,
                        marginRight:SIZES.radius,
                        borderRadius:SIZES.radius*2
                    }}
                    onPress={() =>navigation.navigate("Location")}
                />
            </View>
        )
    }

    function renderAvailableRewardsHeader() {
        return (
            <View
                style={{

                }}
            >

            </View>
        )
    }

    return (
        <View style={styles.container}>
            {/*Header */}
            <HeaderBar />

            {/*Details */}
            <FlatList 
                style={{
                    marginTop:-25,
                    borderTopLeftRadius:SIZES.radius*2,
                    borderTopRightRadius:SIZES.radius*2,
                    backgroundColor:appTheme.backgroundColor,
                }}
                data={dummyData.availableRewards}
                keyExtractor={item =>`${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/*Reward Point */}
                        {renderRewardPoint()}
                        {/*Button */}
                        {renderButtons()}
                        {/*Reward Point */}
                        {renderAvailableRewardsHeader()}
                    </View>
                    
                }
                renderItem={({item,index})=>{
                    return (
                        <View
                            style={{
                                alignItems:'center',
                                justifyContent:'center',
                                marginHorizontal:SIZES.padding,
                                marginBottom:SIZES.base,
                                paddingVertical:SIZES.base,
                                borderRadius:20,
                                backgroundColor: item.eligible ? COLORS.yellow : COLORS.gray2,
                            }}
                        >
                            <Text
                                style={{
                                    color:item.eligible ? COLORS.black : COLORS.lightGray,
                                    ...FONTS.body3
                                }}
                            >
                                {item.title}
                                </Text>
                        </View>
                    )
                }}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom:120
                        }}
                    >

                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


const mapStateToProps = (state) => {
    return {
        appTheme:state.appTheme,
        error:state.error
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Rewards)