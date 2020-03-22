import { StyleSheet, Dimensions } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  loading_container:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  SV_Container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageFilm:{
    flex: 1,
    height : 380,
    backgroundColor: '#1c1c1c',
    marginHorizontal: 50,
    marginTop: 20
  },
  Title:{
    color: '#d01616',
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  descriptionFilm:{
    color: '#fff',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'justify',
    elevation: 50
  },

  DetailsText:{
    color: '#fff',
  },
  Details:{
    marginLeft: 50,
    marginVertical: 20
  },
  btnBack:{
    backgroundColor: '#d01616',
  },
  btnText:{
    color: '#fff',
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
    fontWeight: 'bold'
  },
  shareButton:{
    backgroundColor: '#d01616',
    padding: 20,
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    right: 30,
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
