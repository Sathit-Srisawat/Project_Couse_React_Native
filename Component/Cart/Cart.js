import { StyleSheet, Text, View, Button, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import data from './data.json'

export default function Cart({ navigation }) {

    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%' }}>
                <Text style={{ fontSize: 20, textAlign: 'center', marginTop: '10%', fontWeight: 'bold' }}>
                    Cart
                </Text>
            </View>

            <View style={{ width: '90%', height: '85%', alignSelf: 'center', marginTop: '5%' }} >

                <FlatList
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <TouchableOpacity

                            onPress={() => navigation.navigate('Detail', { data: item })}
                            style={{
                                backgroundColor: '#fff',
                                marginTop: 15,
                                height: 80,
                                borderRadius: 15,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 1,
                                },
                                shadowOpacity: 0.20,
                                shadowRadius: 1.41,
                                elevation: 2,
                            }}>
                            <View style={{ width: '90%', height: '90%', flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>

                                <View style={{ width: '40%' }}>
                                    <Image
                                        style={{ width: '100%', height: '100%', borderRadius: 15 }}
                                        source={{ url: item.image }}
                                    />
                                </View>

                                <View style={{ width: '60%' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: '10%', fontWeight: '600' }}>
                                        {item.price} $
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    }

                />

            </View>

            <TouchableOpacity
                style={{
                    width: '45%',
                    height: '6%',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: '4%',
                    alignSelf: 'flex-end',
                    right: '10%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 2,
                    borderRadius: 15
                }}
            >
                <Text style={{ fontSize: 15, textAlign: 'center', marginTop: '7%' }}>
                    Check Out
                </Text>

            </TouchableOpacity>

            <View
                style={{
                    width: '30%',
                    height: '6%',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    bottom: '4%',
                    alignSelf: 'flex-start',
                    left: '10%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 2,
                    borderRadius: 15
                }}
            >
                <Text style={{ fontSize: 15, textAlign: 'center', marginTop: '7%' }}>
                    Price
                </Text>

            </View>

            <TouchableOpacity
                style={{
                    width: '10%',
                    height: '6%',
                    backgroundColor: '#fff',
                    position: 'absolute',
                    top: '5%',
                    alignSelf: 'flex-start',
                    left: '10%',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 2,
                    borderRadius: 15

                }}

                onPress={() => navigation.navigate('Home')}
            >

                <Icon name="arrow-left" size={20} color="#900" style={{ alignSelf: 'center', marginTop: '25%' }} />

            </TouchableOpacity>

        </View >
    )
}

const styles = StyleSheet.create({})