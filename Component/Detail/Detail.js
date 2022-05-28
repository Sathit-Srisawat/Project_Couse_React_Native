import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';



export default function Detail({ navigation, route }) {

  const { data } = route.params;


  console.log(data)

  return (
    <View style={{ flex: 1 }}>

      <View style={{ width: '100%', height: '60%', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
        <Image
          style={{ width: '100%', height: '60%' }}
          source={{ url: data.Image }}
        />
      </View>

      <View style={{ width: '100%', height: '40%' }}>
        <View style={{ width: '90%', height: '90%', alignSelf: 'center', marginTop: '5%' }}>
          <Text style={{ textAlign: 'center', fontsize: 25, color: '#000', fontWeight: 'bold', marginTop: '5%' }}>
            {data.title}
          </Text>

          <View style={{ width: '100%', flexDirection: 'row', marginTop: '5%' }}>

            <View style={{ width: '50%' }}>
              <Text style={{ textAlign: 'center' }}>
                Price : {data.price} $
              </Text>
            </View>

            <View style={{ width: '50%' , flexDirection: 'row'}}>
              <Text style={{ textAlign: 'center' }}>
                Rating : {data.rating.rate}
              </Text>
              <Icon name="star" size={15} color="#900" style={{ alignSelf: 'center' , marginLeft : '4%'}}/>
            </View>

          </View>

          <View style={{ width: '100%', marginTop: '5%' }}>
            <Text>
              Description
            </Text>
            <Text>
              {'   '}{data.description}
            </Text>
          </View>

        </View>
      </View>


      <TouchableOpacity
        style={{
          width: '30%',
          height: '6%',
          backgroundColor: '#fff',
          position: 'absolute',
          top: '55%',
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
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '10%', textAlign: 'center' }}>
          Add to Cart
        </Text>
      </TouchableOpacity>

      <View
        style={{
          width: '30%',
          height: '6%',
          backgroundColor: '#fff',
          position: 'absolute',
          top: '55%',
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
        <Text style={{ fontSize: 15, fontWeight: 'bold', marginTop: '10%', textAlign: 'center' }}>
          {data.category}
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


    </View>
  )
}

const styles = StyleSheet.create({})