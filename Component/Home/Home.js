import { StyleSheet, Text, View, Button, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import img1 from '../../1.jpg'
import data from './data.json'

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <View style={{ width: '100%', marginTop: '15%', flexDirection: 'row' }}>

        <View style={{ width: '50%' }}>
          <Text style={{ fontSize: 25, fontWeight: '700', marginLeft: '10%' }}>
            Store
          </Text>
        </View>

        <TouchableOpacity style={{ width: '50%' }} onPress={()=>navigation.navigate('Profile')}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 50 / 2, alignSelf: 'flex-end', marginRight: '10%' }}
            source={img1}
          />
        </TouchableOpacity>
      </View>


      <View style={{ width: '90%', height: '80%', alignSelf: 'center', marginTop: '5%' }}>

        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            <TouchableOpacity

              onPress={()=> navigation.navigate('Detail', {data : item})}
              style={{
                backgroundColor: '#fff',
                marginTop: 15,
                height: 200,
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

                <View style={{ width: '60%' }}>
                <Image
   style={{width: 50, height: 50}}
   source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
   resizeMode={'cover'} // cover or contain its upto you view look
   />
                </View>

                <View style={{ width: '40%' }}>
                  <Text style={{ textAlign: 'center', fontSize: 15, marginTop: '20%', fontWeight: '600' }}>
                    {item.price} $
                  </Text>
                  <Text style={{ textAlign: 'center', fontSize: 15, marginTop: '20%', fontWeight: '600' }}>
                    {item.rating.rate}
                  </Text>
                  <Text style={{ textAlign: 'center', fontSize: 15, marginTop: '20%', fontWeight: '600' }}>
                    {item.rating.count}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

          }

        />
      </View>


      <TouchableOpacity

        onPress={()=>navigation.navigate('Cart')}
        style={{
          width: '15%',
          height: '8%',
          backgroundColor: '#fff',
          position: 'absolute',
          bottom: '10%',
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

        <Icon name="shopping-basket" size={30} color="#900" style={{ alignSelf: 'center', marginTop: '25%' }} />

      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({})