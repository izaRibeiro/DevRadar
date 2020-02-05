import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';

function Main({ navigation }){
    const [currentRegion, setCurrentRegion] = useState(null);

    useEffect(() => {
        async function loadInicialPosition(){
            const { granted } = await requestPermissionsAsync();

            if(granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
            }
        }

        loadInicialPosition();
    }, []);

    if(!currentRegion){
        return null;
    }

    return (
        <MapView initialRegion={ currentRegion } style={ styles.map }>
            <Marker coordinate={{ latitude: -21.7425684, longitude: -43.3531025 }}>
                <Image style={styles.avatar} source={{ uri: 'https://avatars2.githubusercontent.com/u/33670052?s=460&v=4'
                }}></Image>

                <Callout onPress={() => {
                    navigation.navigate('Profile', { github_username: 'izaRibeiro'});
                }}>
                    <View style={styles.callout}></View>
                    <Text style={styles.devName}>Izabella Ribeiro</Text>
                    <Text style={styles.devBio}>asdhisahdsuihd usadhauishfuia dhfvud issd fsdf</Text>
                    <Text style={styles.devTechs}>Texnologias ....</Text>
                </Callout>
            </Marker>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff',
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBio: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5
    }
})

export default Main;