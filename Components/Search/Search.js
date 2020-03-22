// From REACT
import React, { useState, useRef, useContext } from 'react';
import {TextInput, Text, View ,SafeAreaView, TouchableOpacity, FlatList, Image, ActivityIndicator} from 'react-native';

// From PROJECT
import styles from'./SearchStyle'
import FilmItem from'./FilmItem'
import FavContext from '../../Context/FavContext.js'
import Locals from './SearchLocals'
import { getFilmsFromApiWithSearchedText } from'../../API/TMDBapi'

export default function Search({navigation}) {

  // STATES
  const [aflam, setaflam] = useState([])
  const [isLoading, setisLoading]= useState(false)

  // REFERENCES
  const searchedText = useRef(null)
  const page = useRef(0)
  const totalPage = useRef(0)

  // FUNCTIONS
  function searchedTextChanging(text){
    searchedText.current = text;
  }

  function loadNewPage() {
    setisLoading(true);
    getFilmsFromApiWithSearchedText(searchedText.current, page.current +1)
      .then(data => {
        page.current = page.current + 1;
        setaflam([...aflam, ...data.results])
        setisLoading(false)
      })
  }

  function newSearch() {
    if (!isLoading && searchedText.current) {
      setisLoading(true);
      getFilmsFromApiWithSearchedText(searchedText.current, 1)
        .then(data => {
          page.current = 2;
          totalPage.current = data.total_pages
          setaflam(data.results)
          setisLoading(false)
        })
    } else {
      console.log("Empty searched text !");
    }
  }

  // RENDER
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/Logo.png')}  style={styles.Logo}/>
      <TextInput
        onSubmitEditing={() => newSearch()}
        onChangeText={(text) => searchedTextChanging(text)}
        style={styles.txtinput}
        placeholder="Search a film..."
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.btnSearch} title='Search' onPress={() => newSearch()}>
        <Text  style={styles.btnText}> {Locals.Search} </Text>
      </TouchableOpacity>

      { page.current > 0 &&
        <FlatList
          data={aflam}
          keyExtractor={(item) => item.id.toString()}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log(page.current,'/',totalPage.current)
            if ( page.current < totalPage.current) loadNewPage()
          }}
          renderItem={({item}) => <FilmItem film={item} navigation= {navigation}/>}
        />
      }
      { isLoading &&
            <ActivityIndicator size="large" color="#d01616"  />
      }
    </SafeAreaView>
  );
}
